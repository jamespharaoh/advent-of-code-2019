//! Logic for solving the puzzles

use super::*;
use input::Input;
use model::Colour;
use model::Cpu;
use model::Dir;
use model::Grid;
use model::Pos;

pub fn part_one (input: & Input) -> GenResult <u32> {
	let grid = calc_result (input, Colour::None) ?;
	Ok (
		grid.values ()
			.filter (|& colour| matches! (colour, Colour::Black | Colour::White))
			.count ()
			.as_u32 ()
	)
}

pub fn part_two (input: & Input) -> GenResult <String> {
	let grid = calc_result (input, Colour::White) ?;
	let result = ocr::read_dots (
		grid.iter ()
			.filter (|& (_, colour)| matches! (colour, Colour::White))
			.map (|(pos, _)| (pos.y, pos.x))) ?;
	Ok (result)
}

fn calc_result (input: & Input, initial: Colour) -> GenResult <Grid> {
	let mut cpu = Cpu::new (input.data.clone ());
	let mut grid = Grid::new_vec ([10, 10], [21, 21]);
	let mut pos = Pos::ZERO;
	let mut dir = Dir::Up;
	grid.set (pos, initial);
	for _ in 0 .. input.params.max_steps {
		cpu.set_max_ops (input.params.max_step_ops);
		let old_colour = grid.get (pos).unwrap_or_else (|| {
			grid = grid.resize (
				[grid.native_origin () [0] + 10, grid.native_origin () [1] + 10],
				[grid.native_size () [0] + 20, grid.native_size () [1] + 20]);
			grid.get (pos).unwrap ()
		});
		cpu.input (match old_colour {
			Colour::None | Colour::Black => 0,
			Colour::White => 1,
		});
		let new_colour = match cpu.run ().output () ? {
			Some (0) => Colour::Black,
			Some (1) => Colour::White,
			Some (other) => return Err (format! ("Unexpected output: {other}").into ()),
			None => return Ok (grid),
		};
		grid.set (pos, new_colour);
		dir = match cpu.run ().output () ? {
			Some (0) => dir.left (),
			Some (1) => dir.right (),
			Some (other) => return Err (format! ("Unexpected output: {other}").into ()),
			None => return Ok (grid),
		};
		pos = pos.try_add ((dir, 1)) ?;
	}
	Err ("Max steps exceeded".into ())
}

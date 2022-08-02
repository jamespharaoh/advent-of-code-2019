//! Advent of Code 2016: Day 3: Squares With Three Sides
//!
//! [https://adventofcode.com/2016/day/3](https://adventofcode.com/2016/day/3)

#![ allow (clippy::missing_inline_in_public_items) ]

use aoc_common::*;

puzzle_info! {
	name = "Squares With Three Sides";
	year = 2016;
	day = 3;
	parse = |input| model::Input::parse (input);
	part_one = |input| logic::part_one (& input);
	part_two = |input| logic::part_two (& input);
}

pub mod logic {

	use super::*;
	use model::Input;

	pub fn part_one (input: & Input) -> GenResult <usize> {
		let num_possible =
			input.triangles.iter_vals ()
				.map (|(a, b, c)| [a, b, c])
				.map (|mut sides| { sides.sort_unstable (); sides })
				.filter (|& [a, b, c]| c < a + b)
				.count ();
		Ok (num_possible)
	}

	pub fn part_two (input: & Input) -> GenResult <usize> {
		let num_possible =
			input.triangles.iter_vals ()
				.tuples::<(_, _, _)> ()
				.flat_map (
					|((a0, a1, a2), (b0, b1, b2), (c0, c1, c2))|
						[(a0, b0, c0), (a1, b1, c1), (a2, b2, c2) ])
				.map (|(a, b, c)| [a, b, c])
				.map (|mut sides| { sides.sort_unstable (); sides })
				.filter (|& [a, b, c]| c < a + b)
				.count ();
		Ok (num_possible)
	}

}

pub mod model {

	use super::*;
	use parser::*;

	pub type Side = u16;
	pub type Triangle = (Side, Side, Side);

	#[ derive (Clone, Debug, Eq, PartialEq) ]
	pub struct Input {
		pub triangles: Vec <Triangle>,
	}

	impl Input {
		pub fn parse (input: & [& str]) -> GenResult <Self> {
			let triangles = input.iter ()
				.enumerate ()
				.map (|(line_idx, line)|
					Parser::wrap (line, |parser| {
						parser.set_ignore_whitespace (true);
						let side_0 = parser.int () ?;
						let side_1 = parser.int () ?;
						let side_2 = parser.int () ?;
						Ok ((side_0, side_1, side_2))
					}).map_parse_err (|col_idx| format! (
						"Invalid input: line {}: col {}: {}", line_idx + 1, col_idx + 1, line))
				)
				.collect::<GenResult <_>> () ?;
			Ok (Self { triangles })
		}
	}

}

#[ cfg (test) ]
mod examples {

	use super::*;

	const EXAMPLE: & [& str] = & [
		"2 2 3",
		"4 6 8",
		"5 10 25",
	];

	#[ test ]
	fn part_one () {
		let puzzle = puzzle_metadata ();
		assert_eq_ok! ("2", puzzle.part_one (EXAMPLE));
	}

	#[ test ]
	fn part_two () {
		let puzzle = puzzle_metadata ();
		assert_eq_ok! ("1", puzzle.part_two (EXAMPLE));
	}

}

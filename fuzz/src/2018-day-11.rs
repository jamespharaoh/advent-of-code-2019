#![ no_main ]

use libfuzzer_sys::fuzz_target;

use aoc_common::*;
use aoc_2018::day_11::*;
use input::Input;

fuzz_target! (|input_str: & str| {
	let input_vec: Vec <& str> = input_str.trim_end ().split ('\n').collect ();
	if let Ok (mut input) = Input::parse_from_lines (& input_vec) {
		input.params.grid_size = cmp::min (input.params.grid_size, 30);
		let _ = logic::part_one (& input);
		let _ = logic::part_two (& input);
	}
});

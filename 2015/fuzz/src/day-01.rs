#![ no_main ]

use aoc_2015::day_01::*;
use libfuzzer_sys::fuzz_target;

fuzz_target! (|input_str: & str| {
	if let Ok (input) = model::parse_input (input_str) {
		let _ = logic::part_one (& input);
		let _ = logic::part_two (& input);
	}
});

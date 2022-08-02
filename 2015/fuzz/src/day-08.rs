#![ no_main ]

use aoc_2015::day_08::*;
use libfuzzer_sys::fuzz_target;

fuzz_target! (|input_str: & str| {
	assert_eq! (model::decode (& model::encode (& input_str)).unwrap (), input_str);
	let input_vec = input_str.split ('\n').collect::<Vec <_>> ();
	if let Ok (input) = model::parse_input (& input_vec) {
		let _ = logic::part_one (& input);
		let _ = logic::part_two (& input);
	}
});

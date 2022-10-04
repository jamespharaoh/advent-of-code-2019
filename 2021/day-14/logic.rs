#![ allow (clippy::missing_inline_in_public_items) ]

use super::*;

use input::Input;

pub fn part_one (input: & Input) -> GenResult <u64> {
	calc_result (input, 10)
}

pub fn part_two (input: & Input) -> GenResult <u64> {
	calc_result (input, 40)
}

pub fn calc_result (input: & Input, loops: u32) -> GenResult <u64> {
	let rules = get_rules (input) ?;
	let mut pair_counts =
		input.template.chars ()
			.tuple_windows ()
			.map (|(left, right)| ((left, right), 1))
			.into_grouping_map ()
			.sum ();
	for _ in 0 .. loops {
		pair_counts = pair_counts.into_iter ()
			.flat_map (|((left, right), num)| {
				let insert = rules [& (left, right)];
				[ ((left, insert), num), ((insert, right), num) ]
			})
			.into_grouping_map ()
			.sum ();
	}
	let char_counts = pair_counts.iter ()
		.map (|(& (_, right), & num)| (right, num))
		.chain (iter::once ((input.template.chars ().next ().unwrap (), 1)))
		.into_grouping_map ()
		.sum ();
	let most = char_counts.values ().max ().unwrap ();
	let least = char_counts.values ().min ().unwrap ();
	Ok (most - least)
}

pub fn get_rules (input: & Input) -> GenResult <HashMap <(char, char), char>> {
	let rules: HashMap <(char, char), char> =
		input.rules.iter ().copied ().collect ();
	let chars: HashSet <char> =
		iter::empty ()
			.chain (input.template.chars ())
			.chain (input.rules.iter ().map (|& (_, ch)| ch))
			.collect ();
	if let Some ((left, right)) =
		chars.iter ().copied ()
			.cartesian_product (chars.iter ().copied ())
			.find (|& (left, right)| ! rules.contains_key (& (left, right))) {
		return Err (format! ("No rules for chars '{left}' and '{right}'").into ());
	}
	Ok (rules)
}

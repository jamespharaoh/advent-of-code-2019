//! Advent of Code 2022: Day 17: Pyroclastic Flow
//!
//! [https://adventofcode.com/2022/day/17](https://adventofcode.com/2022/day/17)

#![ allow (clippy::missing_inline_in_public_items) ]

use aoc_common::*;

mod examples;
pub mod input;
pub mod logic;

puzzle_info! {
	name = "Pyroclastic Flow";
	year = 2022;
	day = 17;
	parse = |lines| input::Input::parse_from_lines (lines);
	part_one = |input| logic::part_one (& input);
	part_two = |input| logic::part_two (& input);
}

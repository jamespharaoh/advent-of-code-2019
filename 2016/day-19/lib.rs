//! Advent of Code 2016: Day 19: An Elephant Named Joseph
//!
//! [https://adventofcode.com/2016/day/19](https://adventofcode.com/2016/day/19)

#![ allow (clippy::missing_inline_in_public_items) ]

use aoc_common::*;

mod examples;
pub mod input;
pub mod logic;

puzzle_info! {
	name = "An Elephant Named Joseph";
	year = 2016;
	day = 19;
	parse = |lines| input::Input::parse_from_lines (lines);
	part_one = |input| logic::part_one (& input);
	part_two = |input| logic::part_two (& input);
}

//! Advent of Code 2018: Day 22: Mode Maze
//!
//! [https://adventofcode.com/2018/day/22](https://adventofcode.com/2018/day/22)

#![ allow (clippy::missing_inline_in_public_items) ]

use aoc_common::*;
use aoc_grid::*;
use aoc_search as search;

mod examples;
pub mod input;
pub mod logic;
pub mod model;

puzzle_info! {
	name = "Mode Maze";
	year = 2018;
	day = 22;
	parse = |lines| input::Input::parse_from_lines (lines);
	part_one = |input| logic::part_one (& input);
	part_two = |input| logic::part_two (& input);
}

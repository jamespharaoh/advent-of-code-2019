#![ cfg (test) ]

use super::*;

const EXAMPLE_0: & [& str] = & [
	"......#.#.",
	"#..#.#....",
	"..#######.",
	".#.#.###..",
	".#..#.....",
	"..#....#.#",
	"#..#....#.",
	".##.#..###",
	"##...#..#.",
	".#....####",
];

const EXAMPLE_1: & [& str] = & [
	"#.#...#.#.",
	".###....#.",
	".#....#...",
	"##.#.#.#.#",
	"....#.#.#.",
	".##..###.#",
	"..#...##..",
	"..##....##",
	"......#...",
	".####.###.",
];

const EXAMPLE_2: & [& str] = & [
	".#..#..###",
	"####.###.#",
	"....###.#.",
	"..###.##.#",
	"##.##.#.#.",
	"....###..#",
	"..#.#..#.#",
	"#..#.#.###",
	".##...##.#",
	".....#.#..",
];

const EXAMPLE_3: & [& str] = & [
	".#..##.###...#######",
	"##.############..##.",
	".#.######.########.#",
	".###.#######.####.#.",
	"#####.##.#.##.###.##",
	"..#####..#.#########",
	"####################",
	"#.####....###.#.#.##",
	"##.#################",
	"#####.##.###..####..",
	"..######..##.#######",
	"####.##.####...##..#",
	".#####..#.######.###",
	"##...#.##########...",
	"#.##########.#######",
	".####.#.###.###.#.##",
	"....##.##.###..#####",
	".#.#.###########.###",
	"#.#.#.#####.####.###",
	"###.##.####.##.#..##",
];

#[ test ]
fn part_one () {
	let puzzle = puzzle_metadata ();
	assert_eq_ok! ("33", puzzle.part_one (EXAMPLE_0));
	assert_eq_ok! ("35", puzzle.part_one (EXAMPLE_1));
	assert_eq_ok! ("41", puzzle.part_one (EXAMPLE_2));
	assert_eq_ok! ("210", puzzle.part_one (EXAMPLE_3));
}

#[ test ]
fn part_two () {
	let puzzle = puzzle_metadata ();
	assert_eq_ok! ("802", puzzle.part_two (EXAMPLE_3));
}

use super::*;

pub type Cpu = intcode::Machine <Val>;
pub type Mem = intcode::Mem <Val>;
pub type RunResult = intcode::RunResult <Val>;
pub type Val = i32;

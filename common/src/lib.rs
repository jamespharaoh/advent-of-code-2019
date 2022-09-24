//! Common functionality used in all puzzle solutions

use clap::ArgMatches;
use clap::Command;

#[ doc (no_inline) ]
pub use prelude::*;

pub mod puzzle;

mod iter_ext {

	use super::*;
	use iter::Copied;

	pub trait IntoIteratorExt: IntoIterator + Sized {

		#[ inline ]
		fn iter_vals <'dat, Item> (self) -> Copied <Self::IntoIter>
			where
				Item: 'dat + Copy,
				Self: IntoIterator <Item = & 'dat Item> {
			self.into_iter ().copied ()
		}

	}

	impl <'dat, IntoIter> IntoIteratorExt for & 'dat IntoIter
		where & 'dat IntoIter: IntoIterator {}

	pub trait IteratorExt: Iterator {

		#[ inline ]
		fn collect_array <const DIM: usize> (mut self) -> Option <[Self::Item; DIM]>
				where Self: Sized, Self::Item: Copy + Default {
			let mut result = [default (); DIM];
			for idx in 0 .. DIM {
				assert! (idx < result.len ());
				result [idx] = some_or! (self.next (), return None);
			}
			if self.next ().is_some () { return None }
			Some (result)
		}

	}

	impl <SomeIter: Iterator> IteratorExt for SomeIter {}

	pub trait IteratorResultExt <Item, Error>: Iterator <Item = Result <Item, Error>> {

		#[ inline ]
		fn collect_array_ok <const DIM: usize> (mut self) -> Result <Option <[Item; DIM]>, Error>
				where Self: Sized, Item: Copy + Default {
			let mut result = [default (); DIM];
			for idx in 0 .. DIM {
				assert! (idx < result.len ());
				result [idx] = some_or! (self.next (), return Ok (None)) ?;
			}
			if self.next ().is_some () { return Ok (None) }
			Ok (Some (result))
		}

	}

	impl <Item, Error, SomeIter: Iterator <Item = Result <Item, Error>>> IteratorResultExt <Item, Error> for SomeIter {}

}

mod prelude {

	pub use clap;

	pub use aoc_checked::checked as chk;
	pub use aoc_misc::*;
	pub use aoc_nums as nums;
	pub use aoc_inpstr::InpStr;
	pub use aoc_parser as parser;

	pub use crate::iter_ext::IntoIteratorExt as _;
	pub use crate::iter_ext::IteratorExt as _;
	pub use crate::iter_ext::IteratorResultExt as _;
	pub use crate::nums::Int;
	pub use crate::nums::IntConv;
	pub use crate::nums::IntSigned;
	pub use crate::nums::IntUnsigned;
	pub use crate::nums::NumResult;
	pub use crate::nums::Overflow;
	pub use crate::nums::TryAdd;
	pub use crate::nums::TryAddAssign;
	pub use crate::nums::TryDiv;
	pub use crate::nums::TryDivAssign;
	pub use crate::nums::TryMul;
	pub use crate::nums::TryMulAssign;
	pub use crate::nums::TryRem;
	pub use crate::nums::TryRemAssign;
	pub use crate::nums::TrySub;
	pub use crate::nums::TrySubAssign;
	pub use crate::parser::*;

}

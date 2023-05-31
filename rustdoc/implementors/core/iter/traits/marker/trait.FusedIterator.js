(function() {var implementors = {
"aoc_grid":[["impl&lt;Inner, Pos, const DIMS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_grid/struct.GridExtendIter.html\" title=\"struct aoc_grid::GridExtendIter\">GridExtendIter</a>&lt;Inner, Pos, DIMS&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    Inner::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    Pos: <a class=\"trait\" href=\"aoc_grid/trait.GridPos.html\" title=\"trait aoc_grid::GridPos\">GridPos</a>&lt;DIMS&gt;,</span>"]],
"aoc_misc":[["impl&lt;Inner, Item&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_misc/prelude/struct.WhileSome.html\" title=\"struct aoc_misc::prelude::WhileSome\">WhileSome</a>&lt;Inner&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Item&gt;&gt;,</span>"],["impl&lt;Inner, MergeFn&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"aoc_misc/prelude/enum.MergeConsecutive.html\" title=\"enum aoc_misc::prelude::MergeConsecutive\">MergeConsecutive</a>&lt;Inner, MergeFn&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    MergeFn: <a class=\"trait\" href=\"aoc_misc/prelude/ops/trait.FnMut.html\" title=\"trait aoc_misc::prelude::ops::FnMut\">FnMut</a>(Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>, Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>, (Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>, Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>)&gt;,</span>"],["impl&lt;Inner, MapFn, In, Out, Error&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_misc/prelude/struct.MapOk.html\" title=\"struct aoc_misc::prelude::MapOk\">MapOk</a>&lt;Inner, MapFn, In, Out, Error&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;In, Error&gt;&gt;,\n    MapFn: <a class=\"trait\" href=\"aoc_misc/prelude/ops/trait.FnMut.html\" title=\"trait aoc_misc::prelude::ops::FnMut\">FnMut</a>(In) -&gt; Out,</span>"],["impl&lt;Inner, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"aoc_misc/prelude/enum.CircularArrayWindows.html\" title=\"enum aoc_misc::prelude::CircularArrayWindows\">CircularArrayWindows</a>&lt;Inner, LEN&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Inner&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_misc/prelude/struct.DedupConsecutive.html\" title=\"struct aoc_misc::prelude::DedupConsecutive\">DedupConsecutive</a>&lt;Inner&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"aoc_misc/prelude/cmp/trait.PartialEq.html\" title=\"trait aoc_misc::prelude::cmp::PartialEq\">PartialEq</a>,</span>"],["impl&lt;IterOne, IntoIterTwo&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"aoc_misc/prelude/enum.CartesianProduct.html\" title=\"enum aoc_misc::prelude::CartesianProduct\">CartesianProduct</a>&lt;IterOne, IntoIterTwo&gt;<span class=\"where fmt-newline\">where\n    IterOne: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    IterOne::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    IntoIterTwo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.IntoIterator.html\" title=\"trait aoc_misc::prelude::iter::IntoIterator\">IntoIterator</a>,</span>"],["impl&lt;Inner, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"aoc_misc/prelude/enum.ArrayCombinations.html\" title=\"enum aoc_misc::prelude::ArrayCombinations\">ArrayCombinations</a>&lt;Inner, LEN&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Inner, Item, Error&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"aoc_misc/prelude/enum.FlattenOk.html\" title=\"enum aoc_misc::prelude::FlattenOk\">FlattenOk</a>&lt;Inner, Item, Error&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Item, Error&gt;&gt;,\n    Item: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.IntoIterator.html\" title=\"trait aoc_misc::prelude::iter::IntoIterator\">IntoIterator</a>,</span>"],["impl&lt;Inner, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_misc/prelude/struct.ArrayWindows.html\" title=\"struct aoc_misc::prelude::ArrayWindows\">ArrayWindows</a>&lt;Inner, LEN&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,\n    Inner::<a class=\"associatedtype\" href=\"aoc_misc/prelude/iter/trait.Iterator.html#associatedtype.Item\" title=\"type aoc_misc::prelude::iter::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Inner, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"aoc_misc/prelude/trait.FusedIterator.html\" title=\"trait aoc_misc::prelude::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_misc/prelude/struct.Arrays.html\" title=\"struct aoc_misc::prelude::Arrays\">Arrays</a>&lt;Inner, LEN&gt;<span class=\"where fmt-newline\">where\n    Inner: <a class=\"trait\" href=\"aoc_misc/prelude/iter/trait.Iterator.html\" title=\"trait aoc_misc::prelude::iter::Iterator\">Iterator</a>,</span>"]],
"aoc_stvec":[["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_stvec/struct.TinyIntoIter.html\" title=\"struct aoc_stvec::TinyIntoIter\">TinyIntoIter</a>&lt;Item, LEN&gt;"],["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"aoc_stvec/struct.MiniIntoIter.html\" title=\"struct aoc_stvec::MiniIntoIter\">MiniIntoIter</a>&lt;Item, LEN&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
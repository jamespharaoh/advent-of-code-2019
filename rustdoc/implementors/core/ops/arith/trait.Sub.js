(function() {var implementors = {};
implementors["aoc_misc"] = [];
implementors["aoc_pos"] = [{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::xy::PosXY"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::yx::PosYX"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::geo::PosGeo"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::row_col::PosRowCol"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_3::xyz::PosXYZ"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, Global&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
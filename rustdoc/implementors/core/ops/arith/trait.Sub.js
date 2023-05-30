(function() {var implementors = {
"ahash":[["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;&amp;<a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;&gt; for &amp;<a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"aoc_misc":[],
"aoc_pos":[["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZT.html\" title=\"struct aoc_pos::PosXYZT\">PosXYZT</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZT.html\" title=\"struct aoc_pos::PosXYZT\">PosXYZT</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosWXYZ.html\" title=\"struct aoc_pos::PosWXYZ\">PosWXYZ</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosWXYZ.html\" title=\"struct aoc_pos::PosWXYZ\">PosWXYZ</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZW.html\" title=\"struct aoc_pos::PosXYZW\">PosXYZW</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZW.html\" title=\"struct aoc_pos::PosXYZW\">PosXYZW</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"],["impl&lt;Val, ArgVal: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeoHexLat.html\" title=\"struct aoc_pos::PosGeoHexLat\">PosGeoHexLat</a>&lt;ArgVal&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeoHexLat.html\" title=\"struct aoc_pos::PosGeoHexLat\">PosGeoHexLat</a>&lt;Val&gt;<span class=\"where fmt-newline\">where\n    Val: <a class=\"trait\" href=\"aoc_nums/ops/trait.TrySub.html\" title=\"trait aoc_nums::ops::TrySub\">TrySub</a>&lt;ArgVal, Output = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
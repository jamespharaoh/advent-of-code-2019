(function() {var implementors = {};
implementors["aoc_misc"] = [];
implementors["aoc_pos"] = [{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::xy::PosXY"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::yx::PosYX"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::geo::PosGeo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"aoc_pos/enum.Turn2d.html\" title=\"enum aoc_pos::Turn2d\">Turn2d</a>&gt; for <a class=\"enum\" href=\"aoc_pos/enum.DirGeo.html\" title=\"enum aoc_pos::DirGeo\">DirGeo</a>","synthetic":false,"types":["aoc_pos::dim_2::geo::DirGeo"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;(<a class=\"enum\" href=\"aoc_pos/enum.DirGeo.html\" title=\"enum aoc_pos::DirGeo\">DirGeo</a>, Val)&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::geo::PosGeo"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::row_col::PosRowCol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"aoc_pos/enum.Turn2d.html\" title=\"enum aoc_pos::Turn2d\">Turn2d</a>&gt; for <a class=\"enum\" href=\"aoc_pos/enum.Dir2d.html\" title=\"enum aoc_pos::Dir2d\">Dir2d</a>","synthetic":false,"types":["aoc_pos::dim_2::row_col::Dir2d"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;(<a class=\"enum\" href=\"aoc_pos/enum.Dir2d.html\" title=\"enum aoc_pos::Dir2d\">Dir2d</a>, Val)&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_2::row_col::PosRowCol"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_nums/trait.Int.html\" title=\"trait aoc_nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;","synthetic":false,"types":["aoc_pos::dim_3::xyz::PosXYZ"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
(function() {var implementors = {};
implementors["aoc_common"] = [{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_common/pos/struct.PosXY.html\" title=\"struct aoc_common::pos::PosXY\">PosXY</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_common/nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_common::nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosXY.html\" title=\"struct aoc_common::pos::PosXY\">PosXY</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::xy::PosXY"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_common/pos/struct.PosYX.html\" title=\"struct aoc_common::pos::PosYX\">PosYX</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_common/nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_common::nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosYX.html\" title=\"struct aoc_common::pos::PosYX\">PosYX</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::yx::PosYX"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_common/pos/struct.PosGeo.html\" title=\"struct aoc_common::pos::PosGeo\">PosGeo</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_common/nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_common::nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosGeo.html\" title=\"struct aoc_common::pos::PosGeo\">PosGeo</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::geo::PosGeo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"aoc_common/pos/enum.Turn2d.html\" title=\"enum aoc_common::pos::Turn2d\">Turn2d</a>&gt; for <a class=\"enum\" href=\"aoc_common/pos/enum.DirGeo.html\" title=\"enum aoc_common::pos::DirGeo\">DirGeo</a>","synthetic":false,"types":["aoc_common::pos::dim_2::geo::DirGeo"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;(<a class=\"enum\" href=\"aoc_common/pos/enum.DirGeo.html\" title=\"enum aoc_common::pos::DirGeo\">DirGeo</a>, Val)&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosGeo.html\" title=\"struct aoc_common::pos::PosGeo\">PosGeo</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::geo::PosGeo"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_common/pos/struct.PosRowCol.html\" title=\"struct aoc_common::pos::PosRowCol\">PosRowCol</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_common/nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_common::nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosRowCol.html\" title=\"struct aoc_common::pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::row_col::PosRowCol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"aoc_common/pos/enum.Turn2d.html\" title=\"enum aoc_common::pos::Turn2d\">Turn2d</a>&gt; for <a class=\"enum\" href=\"aoc_common/pos/enum.Dir2d.html\" title=\"enum aoc_common::pos::Dir2d\">Dir2d</a>","synthetic":false,"types":["aoc_common::pos::dim_2::row_col::Dir2d"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;(<a class=\"enum\" href=\"aoc_common/pos/enum.Dir2d.html\" title=\"enum aoc_common::pos::Dir2d\">Dir2d</a>, Val)&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosRowCol.html\" title=\"struct aoc_common::pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_2::row_col::PosRowCol"]},{"text":"impl&lt;Val:&nbsp;<a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"aoc_common/pos/struct.PosXYZ.html\" title=\"struct aoc_common::pos::PosXYZ\">PosXYZ</a>&lt;&lt;Val as <a class=\"trait\" href=\"aoc_common/nums/trait.Int.html\" title=\"trait aoc_common::nums::Int\">Int</a>&gt;::<a class=\"associatedtype\" href=\"aoc_common/nums/trait.Int.html#associatedtype.Signed\" title=\"type aoc_common::nums::Int::Signed\">Signed</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_common/pos/struct.PosXYZ.html\" title=\"struct aoc_common::pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;","synthetic":false,"types":["aoc_common::pos::dim_3::xyz::PosXYZ"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
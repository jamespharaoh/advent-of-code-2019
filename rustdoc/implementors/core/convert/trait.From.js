(function() {var implementors = {
"ahash":[["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[T; N]</a>&gt; for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, V, <a class=\"struct\" href=\"ahash/random_state/struct.RandomState.html\" title=\"struct ahash::random_state::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;T, <a class=\"struct\" href=\"ahash/random_state/struct.RandomState.html\" title=\"struct ahash::random_state::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T&gt;"],["impl&lt;K, V, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(K, V)</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]&gt; for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"]],
"aoc_2017_cpu":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_nums/struct.Overflow.html\" title=\"struct aoc_nums::Overflow\">Overflow</a>&gt; for <a class=\"enum\" href=\"aoc_2017_cpu/enum.CpuError.html\" title=\"enum aoc_2017_cpu::CpuError\">CpuError</a>"]],
"aoc_2017_day_16":[["impl&lt;Item: <a class=\"trait\" href=\"aoc_2017_day_16/model/trait.LineItem.html\" title=\"trait aoc_2017_day_16::model::LineItem\">LineItem</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Item; 16]</a>&gt; for <a class=\"struct\" href=\"aoc_2017_day_16/model/struct.Line.html\" title=\"struct aoc_2017_day_16::model::Line\">Line</a>&lt;Item&gt;"]],
"aoc_2018_day_12":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"enum\" href=\"aoc_2018_day_12/model/enum.Pot.html\" title=\"enum aoc_2018_day_12::model::Pot\">Pot</a>]&gt; for <a class=\"struct\" href=\"aoc_2018_day_12/model/struct.State.html\" title=\"struct aoc_2018_day_12::model::State\">State</a>"]],
"aoc_2019_day_21":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"aoc_2019_day_21/model/struct.Sample.html\" title=\"struct aoc_2019_day_21::model::Sample\">Sample</a>"]],
"aoc_2019_intcode":[["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_nums/struct.Overflow.html\" title=\"struct aoc_nums::Overflow\">Overflow</a>&gt; for <a class=\"enum\" href=\"aoc_2019_intcode/enum.RunResult.html\" title=\"enum aoc_2019_intcode::RunResult\">RunResult</a>&lt;Val&gt;"]],
"aoc_2020_day_24":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_2020_day_24/model/enum.Step.html\" title=\"enum aoc_2020_day_24::model::Step\">Step</a>&gt; for <a class=\"type\" href=\"aoc_2020_day_24/model/type.Pos.html\" title=\"type aoc_2020_day_24::model::Pos\">Pos</a>"]],
"aoc_2021_day_20":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_2021_day_20/model/enum.Pixel.html\" title=\"enum aoc_2021_day_20::model::Pixel\">Pixel</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>"]],
"aoc_2021_day_22":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_2021_day_22/input/struct.InputStep.html\" title=\"struct aoc_2021_day_22::input::InputStep\">InputStep</a>&gt; for <a class=\"struct\" href=\"aoc_2021_day_22/model/struct.Step.html\" title=\"struct aoc_2021_day_22::model::Step\">Step</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_2021_day_22/input/struct.InputCube.html\" title=\"struct aoc_2021_day_22::input::InputCube\">InputCube</a>&gt; for <a class=\"struct\" href=\"aoc_2021_day_22/model/struct.Cube.html\" title=\"struct aoc_2021_day_22::model::Cube\">Cube</a>"]],
"aoc_checked":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;CheckedExpr, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;CheckedExpr, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;CheckedExpr, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/proc_macro/enum.TokenTree.html\" title=\"enum proc_macro::TokenTree\">TokenTree</a>"]],
"aoc_inpstr":[["impl&lt;'inp&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_inpstr/enum.InpStr.html\" title=\"enum aoc_inpstr::InpStr\">InpStr</a>&lt;'inp&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'inp&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_inpstr/enum.InpStr.html\" title=\"enum aoc_inpstr::InpStr\">InpStr</a>&lt;'inp&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;"],["impl&lt;'inp&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'inp <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"aoc_inpstr/enum.InpStr.html\" title=\"enum aoc_inpstr::InpStr\">InpStr</a>&lt;'inp&gt;"]],
"aoc_list":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"type\" href=\"aoc_list/type.CharList.html\" title=\"type aoc_list::CharList\">CharList</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"type\" href=\"aoc_list/type.CharList.html\" title=\"type aoc_list::CharList\">CharList</a>"]],
"aoc_parser":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"aoc_parser/enum.ParseError.html\" title=\"enum aoc_parser::ParseError\">ParseError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_nums/struct.Overflow.html\" title=\"struct aoc_nums::Overflow\">Overflow</a>&gt; for <a class=\"enum\" href=\"aoc_parser/enum.ParseError.html\" title=\"enum aoc_parser::ParseError\">ParseError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"aoc_parser/enum.ParseError.html\" title=\"enum aoc_parser::ParseError\">ParseError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"aoc_parser/enum.ParseError.html\" title=\"enum aoc_parser::ParseError\">ParseError</a>"]],
"aoc_pos":[["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosWXYZ.html\" title=\"struct aoc_pos::PosWXYZ\">PosWXYZ</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeoHexLat.html\" title=\"struct aoc_pos::PosGeoHexLat\">PosGeoHexLat</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZW.html\" title=\"struct aoc_pos::PosXYZW\">PosXYZW</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 3]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&lt;Signed = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.IntSigned.html\" title=\"trait aoc_nums::int::IntSigned\">IntSigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_pos/enum.Dir2d.html\" title=\"enum aoc_pos::Dir2d\">Dir2d</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZT.html\" title=\"struct aoc_pos::PosXYZT\">PosXYZT</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosWXYZ.html\" title=\"struct aoc_pos::PosWXYZ\">PosWXYZ</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 3]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZ.html\" title=\"struct aoc_pos::PosXYZ\">PosXYZ</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeoHexLat.html\" title=\"struct aoc_pos::PosGeoHexLat\">PosGeoHexLat</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&lt;Signed = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.IntSigned.html\" title=\"trait aoc_nums::int::IntSigned\">IntSigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_pos/enum.DirGeo.html\" title=\"enum aoc_pos::DirGeo\">DirGeo</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosGeo.html\" title=\"struct aoc_pos::PosGeo\">PosGeo</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXYZT.html\" title=\"struct aoc_pos::PosXYZT\">PosXYZT</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosXY.html\" title=\"struct aoc_pos::PosXY\">PosXY</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&lt;Signed = Val&gt; + <a class=\"trait\" href=\"aoc_nums/int/trait.IntSigned.html\" title=\"trait aoc_nums::int::IntSigned\">IntSigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"aoc_pos/enum.Dir2d.html\" title=\"enum aoc_pos::Dir2d\">Dir2d</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"aoc_pos/struct.PosYX.html\" title=\"struct aoc_pos::PosYX\">PosYX</a>&lt;Val&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 2]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosRowCol.html\" title=\"struct aoc_pos::PosRowCol\">PosRowCol</a>&lt;Val&gt;"],["impl&lt;Val: <a class=\"trait\" href=\"aoc_nums/int/trait.Int.html\" title=\"trait aoc_nums::int::Int\">Int</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[Val; 4]</a>&gt; for <a class=\"struct\" href=\"aoc_pos/struct.PosXYZW.html\" title=\"struct aoc_pos::PosXYZW\">PosXYZW</a>&lt;Val&gt;"]],
"aoc_stvec":[["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Item]</a>&gt; for <a class=\"struct\" href=\"aoc_stvec/struct.TinyVec.html\" title=\"struct aoc_stvec::TinyVec\">TinyVec</a>&lt;Item, LEN&gt;<span class=\"where fmt-newline\">where\n    Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Item]</a>&gt; for <a class=\"struct\" href=\"aoc_stvec/struct.TinyVec.html\" title=\"struct aoc_stvec::TinyVec\">TinyVec</a>&lt;Item, LEN&gt;<span class=\"where fmt-newline\">where\n    Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Item]</a>&gt; for <a class=\"struct\" href=\"aoc_stvec/struct.MiniVec.html\" title=\"struct aoc_stvec::MiniVec\">MiniVec</a>&lt;Item, LEN&gt;<span class=\"where fmt-newline\">where\n    Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Item, const LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Item]</a>&gt; for <a class=\"struct\" href=\"aoc_stvec/struct.MiniVec.html\" title=\"struct aoc_stvec::MiniVec\">MiniVec</a>&lt;Item, LEN&gt;<span class=\"where fmt-newline\">where\n    Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"getrandom":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZeroU32.html\" title=\"struct core::num::nonzero::NonZeroU32\">NonZeroU32</a>&gt; for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]],
"once_cell":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"once_cell/unsync/struct.OnceCell.html\" title=\"struct once_cell::unsync::OnceCell\">OnceCell</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
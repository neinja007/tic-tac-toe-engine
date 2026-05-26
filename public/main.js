(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __moduleCache = /* @__PURE__ */ new WeakMap;
  var __toCommonJS = (from) => {
    var entry = __moduleCache.get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function")
      __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
        get: () => from[key],
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      }));
    __moduleCache.set(from, entry);
    return entry;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };

  // main.ts
  var exports_main = {};
  __export(exports_main, {
    resetBoardState: () => resetBoardState,
    makeMove: () => makeMove,
    boardState: () => boardState
  });

  // lookup-table.json
  var lookup_table_default = {
    "X-XXXXXXXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXXO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXX....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXOO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXXO....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.XO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.X.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.X.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.X...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.OO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.O...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX..O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX...O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX....X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX....O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXX.....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOXO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOX....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOOO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXOO....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.OO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.O.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.O.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.O...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO..O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO...O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO....X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO....O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXXO.....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.X....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX.O....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX...O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX....X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX....O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXX......": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXXOOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOXXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXXOO..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "X-XXOXXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXXO.O.": {
      evaluation: "X",
      moveEvaluations: "......X.X"
    },
    "X-XXOXXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXXO...": {
      evaluation: "X",
      moveEvaluations: "......XXX"
    },
    "X-XXOXX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX.O.O": {
      evaluation: "X",
      moveEvaluations: ".....X.X."
    },
    "X-XXOXX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "X-XXOXX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX..OO": {
      evaluation: "X",
      moveEvaluations: ".....XX.."
    },
    "X-XXOXX..O.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "X-XXOXX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOXX...O": {
      evaluation: "X",
      moveEvaluations: ".....XXX."
    },
    "X-XXOXX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "X-XXOXOXOXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOX.XX": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOX.XO": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOX.X.": {
      evaluation: "X",
      moveEvaluations: "......X.O"
    },
    "X-XXOXOX.OX": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOX.OO": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOX.O.": {
      evaluation: "X",
      moveEvaluations: "......X.O"
    },
    "X-XXOXOX..X": {
      evaluation: "X",
      moveEvaluations: "......XO."
    },
    "X-XXOXOX..O": {
      evaluation: "X",
      moveEvaluations: "......XO."
    },
    "X-XXOXOX...": {
      evaluation: "X",
      moveEvaluations: "......XOO"
    },
    "X-XXOXOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOO.XX": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOO.X.": {
      evaluation: "X",
      moveEvaluations: "......X.O"
    },
    "X-XXOXOO.OX": {
      evaluation: "X",
      moveEvaluations: "......X.."
    },
    "X-XXOXOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOO.O.": {
      evaluation: "X",
      moveEvaluations: "......X.O"
    },
    "X-XXOXOO..X": {
      evaluation: "X",
      moveEvaluations: "......XO."
    },
    "X-XXOXOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXOO...": {
      evaluation: "X",
      moveEvaluations: "......XOO"
    },
    "X-XXOXO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOXO..XX": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XXOXO..XO": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XXOXO..X.": {
      evaluation: "X",
      moveEvaluations: ".....OX.O"
    },
    "X-XXOXO..OX": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XXOXO..OO": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XXOXO..O.": {
      evaluation: "X",
      moveEvaluations: ".....OX.O"
    },
    "X-XXOXO...X": {
      evaluation: "X",
      moveEvaluations: ".....OXO."
    },
    "X-XXOXO...O": {
      evaluation: "X",
      moveEvaluations: ".....OXO."
    },
    "X-XXOXO....": {
      evaluation: "X",
      moveEvaluations: ".....OXOO"
    },
    "X-XXOX.XOXX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOX.XOXO": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOX.XOX.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-XXOX.XOOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOX.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.XOO.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-XXOX.XO.X": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XXOX.XO.O": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XXOX.XO..": {
      evaluation: "X",
      moveEvaluations: "....X..OO"
    },
    "X-XXOX.X.XX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.X.XO": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.X.X.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "X-XXOX.X.OX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.X.OO": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.X.O.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "X-XXOX.X..X": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "X-XXOX.X..O": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "X-XXOX.X...": {
      evaluation: "X",
      moveEvaluations: "....X.XXX"
    },
    "X-XXOX.OOOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOX.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XXOX.OO.X": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XXOX.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "X-XXOX.O.XX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.O.X.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "X-XXOX.O.OX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOX.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.O.O.": {
      evaluation: "X",
      moveEvaluations: "....O.X.X"
    },
    "X-XXOX.O..X": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "X-XXOX.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOX.O...": {
      evaluation: "X",
      moveEvaluations: "....O.XOX"
    },
    "X-XXOX..O.X": {
      evaluation: "X",
      moveEvaluations: "....XO.O."
    },
    "X-XXOX..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "X-XXOX..O..": {
      evaluation: "X",
      moveEvaluations: "....XO.OO"
    },
    "X-XXOX...XX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "X-XXOX...XO": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "X-XXOX...X.": {
      evaluation: "X",
      moveEvaluations: "....XXX.X"
    },
    "X-XXOX...OX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "X-XXOX...OO": {
      evaluation: "X",
      moveEvaluations: "....OOX.."
    },
    "X-XXOX...O.": {
      evaluation: "X",
      moveEvaluations: "....XXX.X"
    },
    "X-XXOX....X": {
      evaluation: "X",
      moveEvaluations: "....XXXX."
    },
    "X-XXOX....O": {
      evaluation: "X",
      moveEvaluations: "....OXXO."
    },
    "X-XXOX.....": {
      evaluation: "X",
      moveEvaluations: "....XXXXX"
    },
    "X-XXOOXXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXXOO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XXOOXXXO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOOXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXX.O": {
      evaluation: "X",
      moveEvaluations: ".......X."
    },
    "X-XXOOXXX..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "X-XXOOXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXXOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOOXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXXO.O": {
      evaluation: "X",
      moveEvaluations: ".......X."
    },
    "X-XXOOXXO..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "X-XXOOXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXX.OO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XXOOXX.O.": {
      evaluation: "X",
      moveEvaluations: "......D.X"
    },
    "X-XXOOXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXX..O": {
      evaluation: "X",
      moveEvaluations: "......DX."
    },
    "X-XXOOXX...": {
      evaluation: "X",
      moveEvaluations: "......XXX"
    },
    "X-XXOOXOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXOXO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXOX..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "X-XXOOXOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXOOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOOXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXOO..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "X-XXOOXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXO.O.": {
      evaluation: "X",
      moveEvaluations: "......O.X"
    },
    "X-XXOOXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOXO...": {
      evaluation: "X",
      moveEvaluations: "......OXX"
    },
    "X-XXOOX.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.XOO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XXOOX.XO.": {
      evaluation: "X",
      moveEvaluations: ".....D..X"
    },
    "X-XXOOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.X.O": {
      evaluation: "X",
      moveEvaluations: ".....D.X."
    },
    "X-XXOOX.X..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "X-XXOOX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOX.OO.": {
      evaluation: "X",
      moveEvaluations: ".....O..X"
    },
    "X-XXOOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX.O.O": {
      evaluation: "X",
      moveEvaluations: ".....O.X."
    },
    "X-XXOOX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "X-XXOOX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XXOOX..O.": {
      evaluation: "X",
      moveEvaluations: ".....DD.X"
    },
    "X-XXOOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXOOX...O": {
      evaluation: "X",
      moveEvaluations: ".....DOX."
    },
    "X-XXOOX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "X-XXOOOXXXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XXOOOXXX.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XXOOOXXOX": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XXOOOXXOO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XXOOOXXO.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "X-XXOOOXX.X": {
      evaluation: "X",
      moveEvaluations: ".......X."
    },
    "X-XXOOOXX.O": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "X-XXOOOXX..": {
      evaluation: "D",
      moveEvaluations: ".......DD"
    },
    "X-XXOOOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOX.XO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XXOOOX.X.": {
      evaluation: "D",
      moveEvaluations: "......D.O"
    },
    "X-XXOOOX.OX": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XXOOOX.OO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XXOOOX.O.": {
      evaluation: "D",
      moveEvaluations: "......D.O"
    },
    "X-XXOOOX..X": {
      evaluation: "D",
      moveEvaluations: "......DO."
    },
    "X-XXOOOX..O": {
      evaluation: "D",
      moveEvaluations: "......DO."
    },
    "X-XXOOOX...": {
      evaluation: "D",
      moveEvaluations: "......DOO"
    },
    "X-XXOOOOXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOXX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.XX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.XXO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XXOOO.XX.": {
      evaluation: "X",
      moveEvaluations: ".....D..X"
    },
    "X-XXOOO.XOX": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XXOOO.XOO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XXOOO.XO.": {
      evaluation: "D",
      moveEvaluations: ".....D..O"
    },
    "X-XXOOO.X.X": {
      evaluation: "X",
      moveEvaluations: ".....D.X."
    },
    "X-XXOOO.X.O": {
      evaluation: "D",
      moveEvaluations: ".....D.O."
    },
    "X-XXOOO.X..": {
      evaluation: "D",
      moveEvaluations: ".....D.OO"
    },
    "X-XXOOO.OXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOOO..XX": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XXOOO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XXOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-XXOOO..OX": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XXOOO..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XXOOO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-XXOOO...X": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "X-XXOOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "X-XXOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "X-XXOO.XXXO": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.XXX.": {
      evaluation: "X",
      moveEvaluations: "....X...X"
    },
    "X-XXOO.XXOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.XXOO": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "X-XXOO.XXO.": {
      evaluation: "D",
      moveEvaluations: "....D...D"
    },
    "X-XXOO.XX.X": {
      evaluation: "X",
      moveEvaluations: "....X..X."
    },
    "X-XXOO.XX.O": {
      evaluation: "D",
      moveEvaluations: "....D..D."
    },
    "X-XXOO.XX..": {
      evaluation: "X",
      moveEvaluations: "....X..XX"
    },
    "X-XXOO.XOXO": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.XOX.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-XXOO.XOOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XXOO.XO.X": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XXOO.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "X-XXOO.XO..": {
      evaluation: "X",
      moveEvaluations: "....X..OO"
    },
    "X-XXOO.X.XO": {
      evaluation: "X",
      moveEvaluations: "....X.D.."
    },
    "X-XXOO.X.X.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "X-XXOO.X.OX": {
      evaluation: "X",
      moveEvaluations: "....X.D.."
    },
    "X-XXOO.X.OO": {
      evaluation: "D",
      moveEvaluations: "....O.D.."
    },
    "X-XXOO.X.O.": {
      evaluation: "D",
      moveEvaluations: "....D.D.D"
    },
    "X-XXOO.X..X": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "X-XXOO.X..O": {
      evaluation: "D",
      moveEvaluations: "....D.DD."
    },
    "X-XXOO.X...": {
      evaluation: "X",
      moveEvaluations: "....X.DDD"
    },
    "X-XXOO.OXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OXX.": {
      evaluation: "X",
      moveEvaluations: "....X...X"
    },
    "X-XXOO.OXOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OXO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XXOO.OX.X": {
      evaluation: "X",
      moveEvaluations: "....X..X."
    },
    "X-XXOO.OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OX..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "X-XXOO.OOXX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OOX.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-XXOO.OOOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XXOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XXOO.OO.X": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XXOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "X-XXOO.O.XX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "X-XXOO.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.O.X.": {
      evaluation: "X",
      moveEvaluations: "....X.O.O"
    },
    "X-XXOO.O.OX": {
      evaluation: "X",
      moveEvaluations: "....X.O.."
    },
    "X-XXOO.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "X-XXOO.O..X": {
      evaluation: "X",
      moveEvaluations: "....X.OO."
    },
    "X-XXOO.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "X-XXOO..XXO": {
      evaluation: "X",
      moveEvaluations: "....XD..."
    },
    "X-XXOO..XX.": {
      evaluation: "X",
      moveEvaluations: "....XX..X"
    },
    "X-XXOO..XOX": {
      evaluation: "X",
      moveEvaluations: "....XD..."
    },
    "X-XXOO..XOO": {
      evaluation: "D",
      moveEvaluations: "....OD..."
    },
    "X-XXOO..XO.": {
      evaluation: "D",
      moveEvaluations: "....DD..D"
    },
    "X-XXOO..X.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "X-XXOO..X.O": {
      evaluation: "D",
      moveEvaluations: "....OD.O."
    },
    "X-XXOO..X..": {
      evaluation: "X",
      moveEvaluations: "....XD.XX"
    },
    "X-XXOO..OXX": {
      evaluation: "X",
      moveEvaluations: "....XO..."
    },
    "X-XXOO..OXO": {
      evaluation: "X",
      moveEvaluations: "....XO..."
    },
    "X-XXOO..OX.": {
      evaluation: "X",
      moveEvaluations: "....XO..O"
    },
    "X-XXOO..OOX": {
      evaluation: "X",
      moveEvaluations: "....XO..."
    },
    "X-XXOO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXOO..OO.": {
      evaluation: "O",
      moveEvaluations: "....OO..O"
    },
    "X-XXOO..O.X": {
      evaluation: "X",
      moveEvaluations: "....XO.O."
    },
    "X-XXOO..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "X-XXOO..O..": {
      evaluation: "X",
      moveEvaluations: "....XO.OO"
    },
    "X-XXOO...XX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "X-XXOO...XO": {
      evaluation: "X",
      moveEvaluations: "....XDO.."
    },
    "X-XXOO...X.": {
      evaluation: "X",
      moveEvaluations: "....XDX.X"
    },
    "X-XXOO...OX": {
      evaluation: "X",
      moveEvaluations: "....XDD.."
    },
    "X-XXOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "X-XXOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "X-XXOO....X": {
      evaluation: "X",
      moveEvaluations: "....XDXX."
    },
    "X-XXOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "X-XXOO.....": {
      evaluation: "X",
      moveEvaluations: "....XDOOO"
    },
    "X-XXO.XXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXXOO": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XXO.XXXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XXO.XXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXX.O": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "X-XXO.XXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XXO.XXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XXOO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XXO.XXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XXO.O": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "X-XXO.XXO..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XXO.XX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XX.OO": {
      evaluation: "X",
      moveEvaluations: "...X..D.."
    },
    "X-XXO.XX.O.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "X-XXO.XX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XX..O": {
      evaluation: "X",
      moveEvaluations: "...X..XX."
    },
    "X-XXO.XX...": {
      evaluation: "X",
      moveEvaluations: "...X..XXX"
    },
    "X-XXO.XOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XOXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XXO.XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XOX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XXO.XOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XOOO.": {
      evaluation: "X",
      moveEvaluations: "...O....X"
    },
    "X-XXO.XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XOO..": {
      evaluation: "X",
      moveEvaluations: "...O...XX"
    },
    "X-XXO.XO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XO.O.": {
      evaluation: "X",
      moveEvaluations: "...O..O.X"
    },
    "X-XXO.XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.XO...": {
      evaluation: "X",
      moveEvaluations: "...O..OXX"
    },
    "X-XXO.X.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.XOO": {
      evaluation: "X",
      moveEvaluations: "...X.D..."
    },
    "X-XXO.X.XO.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "X-XXO.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.X.O": {
      evaluation: "X",
      moveEvaluations: "...X.X.X."
    },
    "X-XXO.X.X..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "X-XXO.X.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.X.OO.": {
      evaluation: "X",
      moveEvaluations: "...O.O..X"
    },
    "X-XXO.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X.O.O": {
      evaluation: "X",
      moveEvaluations: "...O.O.X."
    },
    "X-XXO.X.O..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "X-XXO.X..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "X-XXO.X..O.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "X-XXO.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XXO.X...O": {
      evaluation: "X",
      moveEvaluations: "...O.XOX."
    },
    "X-XXO.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XXXX"
    },
    "X-XXO.OXXXO": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XXO.OXXX.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XXO.OXXOO": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XXO.OXXO.": {
      evaluation: "X",
      moveEvaluations: "...X....D"
    },
    "X-XXO.OXX.X": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "X-XXO.OXX.O": {
      evaluation: "X",
      moveEvaluations: "...X...D."
    },
    "X-XXO.OXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XXO.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OX.XO": {
      evaluation: "D",
      moveEvaluations: "...O..D.."
    },
    "X-XXO.OX.X.": {
      evaluation: "X",
      moveEvaluations: "...O..X.O"
    },
    "X-XXO.OX.OO": {
      evaluation: "D",
      moveEvaluations: "...O..D.."
    },
    "X-XXO.OX.O.": {
      evaluation: "D",
      moveEvaluations: "...O..D.O"
    },
    "X-XXO.OX..X": {
      evaluation: "X",
      moveEvaluations: "...O..XO."
    },
    "X-XXO.OX..O": {
      evaluation: "D",
      moveEvaluations: "...O..DO."
    },
    "X-XXO.OX...": {
      evaluation: "D",
      moveEvaluations: "...O..DOO"
    },
    "X-XXO.OOXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOXX.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XXO.OOXOX": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XXO.OOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOXO.": {
      evaluation: "X",
      moveEvaluations: "...X....O"
    },
    "X-XXO.OOX.X": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "X-XXO.OOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOX..": {
      evaluation: "X",
      moveEvaluations: "...X...OO"
    },
    "X-XXO.OOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OO.XX": {
      evaluation: "X",
      moveEvaluations: "...O..X.."
    },
    "X-XXO.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OO.X.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "X-XXO.OO.OX": {
      evaluation: "O",
      moveEvaluations: "...O..O.."
    },
    "X-XXO.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OO.O.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "X-XXO.OO..X": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "X-XXO.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.OO...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "X-XXO.O.XXO": {
      evaluation: "X",
      moveEvaluations: "...X.D..."
    },
    "X-XXO.O.XX.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "X-XXO.O.XOX": {
      evaluation: "X",
      moveEvaluations: "...X.D..."
    },
    "X-XXO.O.XOO": {
      evaluation: "X",
      moveEvaluations: "...X.D..."
    },
    "X-XXO.O.XO.": {
      evaluation: "X",
      moveEvaluations: "...X.D..D"
    },
    "X-XXO.O.X.X": {
      evaluation: "X",
      moveEvaluations: "...X.X.X."
    },
    "X-XXO.O.X.O": {
      evaluation: "X",
      moveEvaluations: "...X.D.O."
    },
    "X-XXO.O.X..": {
      evaluation: "X",
      moveEvaluations: "...X.D.XX"
    },
    "X-XXO.O.OXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO.O..XX": {
      evaluation: "X",
      moveEvaluations: "...O.OX.."
    },
    "X-XXO.O..XO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "X-XXO.O..X.": {
      evaluation: "X",
      moveEvaluations: "...O.OX.O"
    },
    "X-XXO.O..OX": {
      evaluation: "D",
      moveEvaluations: "...O.OD.."
    },
    "X-XXO.O..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "X-XXO.O..O.": {
      evaluation: "D",
      moveEvaluations: "...O.OD.O"
    },
    "X-XXO.O...X": {
      evaluation: "X",
      moveEvaluations: "...O.OXO."
    },
    "X-XXO.O...O": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "X-XXO.O....": {
      evaluation: "D",
      moveEvaluations: "...O.ODOO"
    },
    "X-XXO..XXXO": {
      evaluation: "X",
      moveEvaluations: "...XX...."
    },
    "X-XXO..XXX.": {
      evaluation: "X",
      moveEvaluations: "...XX...X"
    },
    "X-XXO..XXOO": {
      evaluation: "X",
      moveEvaluations: "...XD...."
    },
    "X-XXO..XXO.": {
      evaluation: "X",
      moveEvaluations: "...XX...X"
    },
    "X-XXO..XX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "X-XXO..XX.O": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "X-XXO..XX..": {
      evaluation: "X",
      moveEvaluations: "...XX..XX"
    },
    "X-XXO..XOXO": {
      evaluation: "X",
      moveEvaluations: "...OX...."
    },
    "X-XXO..XOX.": {
      evaluation: "X",
      moveEvaluations: "...OX...O"
    },
    "X-XXO..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..XOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "X-XXO..XO.X": {
      evaluation: "X",
      moveEvaluations: "...OX..O."
    },
    "X-XXO..XO.O": {
      evaluation: "O",
      moveEvaluations: "...OO..O."
    },
    "X-XXO..XO..": {
      evaluation: "X",
      moveEvaluations: "...OX..OO"
    },
    "X-XXO..X.XO": {
      evaluation: "X",
      moveEvaluations: "...XX.X.."
    },
    "X-XXO..X.X.": {
      evaluation: "X",
      moveEvaluations: "...XX.X.X"
    },
    "X-XXO..X.OO": {
      evaluation: "D",
      moveEvaluations: "...OO.D.."
    },
    "X-XXO..X.O.": {
      evaluation: "X",
      moveEvaluations: "...XX.D.D"
    },
    "X-XXO..X..X": {
      evaluation: "X",
      moveEvaluations: "...XX.XX."
    },
    "X-XXO..X..O": {
      evaluation: "X",
      moveEvaluations: "...XX.DD."
    },
    "X-XXO..X...": {
      evaluation: "X",
      moveEvaluations: "...XX.XXX"
    },
    "X-XXO..OXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OXX.": {
      evaluation: "X",
      moveEvaluations: "...XX...X"
    },
    "X-XXO..OXOX": {
      evaluation: "X",
      moveEvaluations: "...XX...."
    },
    "X-XXO..OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OXO.": {
      evaluation: "X",
      moveEvaluations: "...XO...X"
    },
    "X-XXO..OX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "X-XXO..OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OX..": {
      evaluation: "X",
      moveEvaluations: "...XO..OX"
    },
    "X-XXO..OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OOX.": {
      evaluation: "X",
      moveEvaluations: "...OX...O"
    },
    "X-XXO..OOOX": {
      evaluation: "X",
      moveEvaluations: "...OX...."
    },
    "X-XXO..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "X-XXO..OO.X": {
      evaluation: "X",
      moveEvaluations: "...OX..O."
    },
    "X-XXO..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..OO..": {
      evaluation: "O",
      moveEvaluations: "...OO..OO"
    },
    "X-XXO..O.XX": {
      evaluation: "X",
      moveEvaluations: "...XX.X.."
    },
    "X-XXO..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..O.X.": {
      evaluation: "X",
      moveEvaluations: "...OX.O.X"
    },
    "X-XXO..O.OX": {
      evaluation: "X",
      moveEvaluations: "...XX.X.."
    },
    "X-XXO..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..O.O.": {
      evaluation: "O",
      moveEvaluations: "...OO.O.O"
    },
    "X-XXO..O..X": {
      evaluation: "X",
      moveEvaluations: "...XX.XX."
    },
    "X-XXO..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO..O...": {
      evaluation: "O",
      moveEvaluations: "...OO.OOO"
    },
    "X-XXO...XXO": {
      evaluation: "X",
      moveEvaluations: "...XXX..."
    },
    "X-XXO...XX.": {
      evaluation: "X",
      moveEvaluations: "...XXX..X"
    },
    "X-XXO...XOX": {
      evaluation: "X",
      moveEvaluations: "...XXX..."
    },
    "X-XXO...XOO": {
      evaluation: "X",
      moveEvaluations: "...XOD..."
    },
    "X-XXO...XO.": {
      evaluation: "X",
      moveEvaluations: "...XXD..X"
    },
    "X-XXO...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "X-XXO...X.O": {
      evaluation: "X",
      moveEvaluations: "...XOD.O."
    },
    "X-XXO...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "X-XXO...OXX": {
      evaluation: "X",
      moveEvaluations: "...OXO..."
    },
    "X-XXO...OXO": {
      evaluation: "X",
      moveEvaluations: "...OXO..."
    },
    "X-XXO...OX.": {
      evaluation: "X",
      moveEvaluations: "...OXO..O"
    },
    "X-XXO...OOX": {
      evaluation: "X",
      moveEvaluations: "...OXO..."
    },
    "X-XXO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XXO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "X-XXO...O.X": {
      evaluation: "X",
      moveEvaluations: "...OXO.O."
    },
    "X-XXO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "X-XXO...O..": {
      evaluation: "X",
      moveEvaluations: "...OXO.OO"
    },
    "X-XXO....XX": {
      evaluation: "X",
      moveEvaluations: "...XXXX.."
    },
    "X-XXO....XO": {
      evaluation: "X",
      moveEvaluations: "...OXDO.."
    },
    "X-XXO....X.": {
      evaluation: "X",
      moveEvaluations: "...XXXX.X"
    },
    "X-XXO....OX": {
      evaluation: "X",
      moveEvaluations: "...XXDX.."
    },
    "X-XXO....OO": {
      evaluation: "O",
      moveEvaluations: "...OOOO.."
    },
    "X-XXO....O.": {
      evaluation: "D",
      moveEvaluations: "...OOOD.D"
    },
    "X-XXO.....X": {
      evaluation: "X",
      moveEvaluations: "...XXXXX."
    },
    "X-XXO.....O": {
      evaluation: "O",
      moveEvaluations: "...OOOOO."
    },
    "X-XXO......": {
      evaluation: "X",
      moveEvaluations: "...XXDXXX"
    },
    "X-XX.XXX.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXO.OO": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XXO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.XXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XXO..O": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.XXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "X-XX.XX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.XX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "X-XX.XX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "X-XX.XOX.XX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOX.XO": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOX.X.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.XOX.OX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOX.OO": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.XOX..X": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.XOX..O": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.XOX...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "X-XX.XOO.OX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOO.OO": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "X-XX.XOO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.XOO..X": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.XOO..O": {
      evaluation: "X",
      moveEvaluations: "..X...XO."
    },
    "X-XX.XOO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "X-XX.XO...X": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "X-XX.XO...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "X-XX.XO....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "X-XX.X.X.XX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.X.X.XO": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "X-XX.X.X.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.X.X.OO": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.X.X.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "X-XX.X.X..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "X-XX.X.X..O": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "X-XX.X.X...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "X-XX.X.O.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.X.O.OO": {
      evaluation: "X",
      moveEvaluations: "..X.O.X.."
    },
    "X-XX.X.O.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "X-XX.X.O..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "X-XX.X.O..O": {
      evaluation: "X",
      moveEvaluations: "..X.O.XO."
    },
    "X-XX.X.O...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "X-XX.X....X": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "X-XX.X....O": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "X-XX.X.....": {
      evaluation: "X",
      moveEvaluations: "..X.XXXXX"
    },
    "X-XX.OXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXXOO": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OXXXO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "X-XX.OXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXX.O": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "X-XX.OXXX..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "X-XX.OXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OXXOO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "X-XX.OXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXXO.O": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "X-XX.OXXO..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "X-XX.OXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXX.OO": {
      evaluation: "X",
      moveEvaluations: "..X...D.."
    },
    "X-XX.OXX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.OXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXX..O": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.OXX...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "X-XX.OXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOXOO": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OXOXO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "X-XX.OXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOX.O": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "X-XX.OXOX..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "X-XX.OXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OXOOO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "X-XX.OXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXOO.O": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "X-XX.OXOO..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "X-XX.OXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXO.OO": {
      evaluation: "X",
      moveEvaluations: "..X...O.."
    },
    "X-XX.OXO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.OXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OXO..O": {
      evaluation: "X",
      moveEvaluations: "..X...OX."
    },
    "X-XX.OXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "X-XX.OX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.XOO": {
      evaluation: "X",
      moveEvaluations: "..X..D..."
    },
    "X-XX.OX.XO.": {
      evaluation: "X",
      moveEvaluations: "..X..X..X"
    },
    "X-XX.OX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.X.O": {
      evaluation: "X",
      moveEvaluations: "..X..X.X."
    },
    "X-XX.OX.X..": {
      evaluation: "X",
      moveEvaluations: "..X..X.XX"
    },
    "X-XX.OX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OX.OO.": {
      evaluation: "X",
      moveEvaluations: "..X..O..X"
    },
    "X-XX.OX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX.O.O": {
      evaluation: "X",
      moveEvaluations: "..X..O.X."
    },
    "X-XX.OX.O..": {
      evaluation: "X",
      moveEvaluations: "..X..X.XX"
    },
    "X-XX.OX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX..OO": {
      evaluation: "X",
      moveEvaluations: "..X..OD.."
    },
    "X-XX.OX..O.": {
      evaluation: "X",
      moveEvaluations: "..X..XX.X"
    },
    "X-XX.OX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX.OX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "X-XX.OX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "X-XX.OOXXX.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "X-XX.OOXXOX": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OOXXOO": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OOXXO.": {
      evaluation: "X",
      moveEvaluations: "..X.....D"
    },
    "X-XX.OOXX.X": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "X-XX.OOXX.O": {
      evaluation: "X",
      moveEvaluations: "..X....D."
    },
    "X-XX.OOXX..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "X-XX.OOXOXO": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OOXOX.": {
      evaluation: "X",
      moveEvaluations: "..X.....O"
    },
    "X-XX.OOXOOX": {
      evaluation: "X",
      moveEvaluations: "..X......"
    },
    "X-XX.OOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOXOO.": {
      evaluation: "X",
      moveEvaluations: "..X.....O"
    },
    "X-XX.OOXO.X": {
      evaluation: "X",
      moveEvaluations: "..X....O."
    },
    "X-XX.OOXO.O": {
      evaluation: "X",
      moveEvaluations: "..X....O."
    },
    "X-XX.OOXO..": {
      evaluation: "X",
      moveEvaluations: "..X....OO"
    },
    "X-XX.OOX.XO": {
      evaluation: "X",
      moveEvaluations: "..X...D.."
    },
    "X-XX.OOX.X.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XX.OOX.OX": {
      evaluation: "X",
      moveEvaluations: "..X...D.."
    },
    "X-XX.OOX.OO": {
      evaluation: "X",
      moveEvaluations: "..X...D.."
    },
    "X-XX.OOX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...D.D"
    },
    "X-XX.OOX..X": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "X-XX.OOX..O": {
      evaluation: "X",
      moveEvaluations: "..X...DD."
    },
    "X-XX.OOX...": {
      evaluation: "X",
      moveEvaluations: "..X...DDD"
    },
    "X-XX.OOOXX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.XX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OO.XX.": {
      evaluation: "X",
      moveEvaluations: "..X..X..X"
    },
    "X-XX.OO.XOX": {
      evaluation: "X",
      moveEvaluations: "..X..D..."
    },
    "X-XX.OO.XOO": {
      evaluation: "X",
      moveEvaluations: "..X..D..."
    },
    "X-XX.OO.XO.": {
      evaluation: "X",
      moveEvaluations: "..X..D..O"
    },
    "X-XX.OO.X.X": {
      evaluation: "X",
      moveEvaluations: "..X..X.X."
    },
    "X-XX.OO.X.O": {
      evaluation: "X",
      moveEvaluations: "..X..D.O."
    },
    "X-XX.OO.X..": {
      evaluation: "X",
      moveEvaluations: "..X..D.OO"
    },
    "X-XX.OO.OXO": {
      evaluation: "X",
      moveEvaluations: "..X..O..."
    },
    "X-XX.OO.OX.": {
      evaluation: "X",
      moveEvaluations: "..X..O..O"
    },
    "X-XX.OO.OOX": {
      evaluation: "X",
      moveEvaluations: "..X..O..."
    },
    "X-XX.OO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.OO.OO.": {
      evaluation: "X",
      moveEvaluations: "..X..O..O"
    },
    "X-XX.OO.O.X": {
      evaluation: "X",
      moveEvaluations: "..X..O.O."
    },
    "X-XX.OO.O.O": {
      evaluation: "X",
      moveEvaluations: "..X..O.O."
    },
    "X-XX.OO.O..": {
      evaluation: "X",
      moveEvaluations: "..X..O.OO"
    },
    "X-XX.OO..XX": {
      evaluation: "X",
      moveEvaluations: "..X..XX.."
    },
    "X-XX.OO..XO": {
      evaluation: "X",
      moveEvaluations: "..X..DO.."
    },
    "X-XX.OO..X.": {
      evaluation: "X",
      moveEvaluations: "..X..DO.O"
    },
    "X-XX.OO..OX": {
      evaluation: "X",
      moveEvaluations: "..X..DO.."
    },
    "X-XX.OO..OO": {
      evaluation: "X",
      moveEvaluations: "..X..OO.."
    },
    "X-XX.OO..O.": {
      evaluation: "X",
      moveEvaluations: "..X..DO.O"
    },
    "X-XX.OO...X": {
      evaluation: "X",
      moveEvaluations: "..X..DOO."
    },
    "X-XX.OO...O": {
      evaluation: "X",
      moveEvaluations: "..X..DOO."
    },
    "X-XX.OO....": {
      evaluation: "X",
      moveEvaluations: "..X..DOOO"
    },
    "X-XX.O.XXX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "X-XX.O.XXOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.XXOO": {
      evaluation: "X",
      moveEvaluations: "..X.D...."
    },
    "X-XX.O.XXO.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "X-XX.O.XX.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "X-XX.O.XX.O": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "X-XX.O.XX..": {
      evaluation: "X",
      moveEvaluations: "..X.X..XX"
    },
    "X-XX.O.XOXO": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.XOX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "X-XX.O.XOOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.O.XOO.": {
      evaluation: "X",
      moveEvaluations: "..X.O...X"
    },
    "X-XX.O.XO.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "X-XX.O.XO.O": {
      evaluation: "X",
      moveEvaluations: "..X.O..X."
    },
    "X-XX.O.XO..": {
      evaluation: "X",
      moveEvaluations: "..X.X..XX"
    },
    "X-XX.O.X.XO": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.O.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "X-XX.O.X.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.O.X.OO": {
      evaluation: "X",
      moveEvaluations: "..X.O.D.."
    },
    "X-XX.O.X.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.D.X"
    },
    "X-XX.O.X..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "X-XX.O.X..O": {
      evaluation: "X",
      moveEvaluations: "..X.X.DX."
    },
    "X-XX.O.X...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "X-XX.O.OXX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "X-XX.O.OXOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.OXOO": {
      evaluation: "X",
      moveEvaluations: "..X.O...."
    },
    "X-XX.O.OXO.": {
      evaluation: "X",
      moveEvaluations: "..X.X...O"
    },
    "X-XX.O.OX.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "X-XX.O.OX.O": {
      evaluation: "X",
      moveEvaluations: "..X.O..O."
    },
    "X-XX.O.OX..": {
      evaluation: "X",
      moveEvaluations: "..X.X..OO"
    },
    "X-XX.O.OOXO": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.OOX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...O"
    },
    "X-XX.O.OOOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "X-XX.O.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.O.OOO.": {
      evaluation: "X",
      moveEvaluations: "..X.O...O"
    },
    "X-XX.O.OO.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..O."
    },
    "X-XX.O.OO.O": {
      evaluation: "X",
      moveEvaluations: "..X.O..O."
    },
    "X-XX.O.OO..": {
      evaluation: "X",
      moveEvaluations: "..X.X..OO"
    },
    "X-XX.O.O.XX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "X-XX.O.O.XO": {
      evaluation: "X",
      moveEvaluations: "..X.X.O.."
    },
    "X-XX.O.O.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.O.O"
    },
    "X-XX.O.O.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.O.."
    },
    "X-XX.O.O.OO": {
      evaluation: "X",
      moveEvaluations: "..X.O.O.."
    },
    "X-XX.O.O.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.O.O"
    },
    "X-XX.O.O..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.OO."
    },
    "X-XX.O.O..O": {
      evaluation: "X",
      moveEvaluations: "..X.O.OO."
    },
    "X-XX.O.O...": {
      evaluation: "X",
      moveEvaluations: "..X.X.OOO"
    },
    "X-XX.O..XX.": {
      evaluation: "X",
      moveEvaluations: "..X.XX..X"
    },
    "X-XX.O..XOX": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "X-XX.O..XOO": {
      evaluation: "X",
      moveEvaluations: "..X.DD..."
    },
    "X-XX.O..XO.": {
      evaluation: "X",
      moveEvaluations: "..X.XD..X"
    },
    "X-XX.O..X.X": {
      evaluation: "X",
      moveEvaluations: "..X.XX.X."
    },
    "X-XX.O..X.O": {
      evaluation: "X",
      moveEvaluations: "..X.XD.X."
    },
    "X-XX.O..X..": {
      evaluation: "X",
      moveEvaluations: "..X.XX.XX"
    },
    "X-XX.O..OXO": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "X-XX.O..OX.": {
      evaluation: "X",
      moveEvaluations: "..X.XX..X"
    },
    "X-XX.O..OOX": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "X-XX.O..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX.O..OO.": {
      evaluation: "X",
      moveEvaluations: "..X.OO..X"
    },
    "X-XX.O..O.X": {
      evaluation: "X",
      moveEvaluations: "..X.XX.X."
    },
    "X-XX.O..O.O": {
      evaluation: "X",
      moveEvaluations: "..X.OO.X."
    },
    "X-XX.O..O..": {
      evaluation: "X",
      moveEvaluations: "..X.XX.XX"
    },
    "X-XX.O...XX": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "X-XX.O...XO": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "X-XX.O...X.": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.X"
    },
    "X-XX.O...OX": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "X-XX.O...OO": {
      evaluation: "X",
      moveEvaluations: "..X.OOD.."
    },
    "X-XX.O...O.": {
      evaluation: "X",
      moveEvaluations: "..X.XDD.X"
    },
    "X-XX.O....X": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "X-XX.O....O": {
      evaluation: "X",
      moveEvaluations: "..X.XDDX."
    },
    "X-XX.O.....": {
      evaluation: "X",
      moveEvaluations: "..X.XXXXX"
    },
    "X-XX..XXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XXXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "X-XX..XXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..XXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..XXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XX..XXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..XXOO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..XXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XXO.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..XXO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XX..XX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XX.OO": {
      evaluation: "X",
      moveEvaluations: "..XX..X.."
    },
    "X-XX..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XX..XX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "X-XX..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "X-XX..XOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "X-XX..XOXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..XOX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XX..XOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..XOOO.": {
      evaluation: "X",
      moveEvaluations: "..XO....X"
    },
    "X-XX..XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XOO.O": {
      evaluation: "X",
      moveEvaluations: "..XO...X."
    },
    "X-XX..XOO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XX..XO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XO.OO": {
      evaluation: "X",
      moveEvaluations: "..XO..O.."
    },
    "X-XX..XO.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XX..XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..XO..O": {
      evaluation: "X",
      moveEvaluations: "..XO..OX."
    },
    "X-XX..XO...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "X-XX..X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.XOO": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "X-XX..X.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "X-XX..X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "X-XX..X.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "X-XX..X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..X.OO.": {
      evaluation: "X",
      moveEvaluations: "..XO.O..X"
    },
    "X-XX..X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X.O.O": {
      evaluation: "X",
      moveEvaluations: "..XO.O.X."
    },
    "X-XX..X.O..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "X-XX..X..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X..OO": {
      evaluation: "X",
      moveEvaluations: "..XO.OX.."
    },
    "X-XX..X..O.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "X-XX..X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XX..X...O": {
      evaluation: "X",
      moveEvaluations: "..XX.XXX."
    },
    "X-XX..X....": {
      evaluation: "X",
      moveEvaluations: "..XX.XXXX"
    },
    "X-XX..OXXX.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..OXXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "X-XX..OXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..OXX.X": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..OXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..OXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XX..OXOXO": {
      evaluation: "X",
      moveEvaluations: "..XO....."
    },
    "X-XX..OXOX.": {
      evaluation: "X",
      moveEvaluations: "..XO....O"
    },
    "X-XX..OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..OXOO.": {
      evaluation: "X",
      moveEvaluations: "..XO....O"
    },
    "X-XX..OXO.X": {
      evaluation: "X",
      moveEvaluations: "..XO...O."
    },
    "X-XX..OXO.O": {
      evaluation: "X",
      moveEvaluations: "..XO...O."
    },
    "X-XX..OXO..": {
      evaluation: "X",
      moveEvaluations: "..XO...OO"
    },
    "X-XX..OX.XO": {
      evaluation: "X",
      moveEvaluations: "..XX..X.."
    },
    "X-XX..OX.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XX..OX.OO": {
      evaluation: "X",
      moveEvaluations: "..XO..X.."
    },
    "X-XX..OX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.D"
    },
    "X-XX..OX..X": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "X-XX..OX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XD."
    },
    "X-XX..OX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "X-XX..OOXX.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XX..OOXOX": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "X-XX..OOXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "X-XX..OOXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....O"
    },
    "X-XX..OOX.X": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XX..OOX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...O."
    },
    "X-XX..OOX..": {
      evaluation: "X",
      moveEvaluations: "..XX...OO"
    },
    "X-XX..OOOXO": {
      evaluation: "X",
      moveEvaluations: "..XO....."
    },
    "X-XX..OOOX.": {
      evaluation: "X",
      moveEvaluations: "..XO....O"
    },
    "X-XX..OOOOX": {
      evaluation: "X",
      moveEvaluations: "..XO....."
    },
    "X-XX..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..OOOO.": {
      evaluation: "X",
      moveEvaluations: "..XO....O"
    },
    "X-XX..OOO.X": {
      evaluation: "X",
      moveEvaluations: "..XO...O."
    },
    "X-XX..OOO.O": {
      evaluation: "X",
      moveEvaluations: "..XO...O."
    },
    "X-XX..OOO..": {
      evaluation: "X",
      moveEvaluations: "..XO...OO"
    },
    "X-XX..OO.XO": {
      evaluation: "X",
      moveEvaluations: "..XO..O.."
    },
    "X-XX..OO.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..O.O"
    },
    "X-XX..OO.OX": {
      evaluation: "X",
      moveEvaluations: "..XX..O.."
    },
    "X-XX..OO.OO": {
      evaluation: "X",
      moveEvaluations: "..XO..O.."
    },
    "X-XX..OO.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..O.O"
    },
    "X-XX..OO..X": {
      evaluation: "X",
      moveEvaluations: "..XX..OO."
    },
    "X-XX..OO..O": {
      evaluation: "X",
      moveEvaluations: "..XO..OO."
    },
    "X-XX..OO...": {
      evaluation: "X",
      moveEvaluations: "..XX..OOO"
    },
    "X-XX..O.XX.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "X-XX..O.XOX": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "X-XX..O.XOO": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "X-XX..O.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "X-XX..O.X.X": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "X-XX..O.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "X-XX..O.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "X-XX..O.OXO": {
      evaluation: "X",
      moveEvaluations: "..XO.O..."
    },
    "X-XX..O.OX.": {
      evaluation: "X",
      moveEvaluations: "..XO.O..O"
    },
    "X-XX..O.OOX": {
      evaluation: "X",
      moveEvaluations: "..XO.O..."
    },
    "X-XX..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX..O.OO.": {
      evaluation: "X",
      moveEvaluations: "..XO.O..O"
    },
    "X-XX..O.O.X": {
      evaluation: "X",
      moveEvaluations: "..XO.O.O."
    },
    "X-XX..O.O.O": {
      evaluation: "X",
      moveEvaluations: "..XO.O.O."
    },
    "X-XX..O.O..": {
      evaluation: "X",
      moveEvaluations: "..XO.O.OO"
    },
    "X-XX..O..XX": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.."
    },
    "X-XX..O..XO": {
      evaluation: "X",
      moveEvaluations: "..XX.DX.."
    },
    "X-XX..O..X.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "X-XX..O..OX": {
      evaluation: "X",
      moveEvaluations: "..XX.DX.."
    },
    "X-XX..O..OO": {
      evaluation: "X",
      moveEvaluations: "..XO.OX.."
    },
    "X-XX..O..O.": {
      evaluation: "X",
      moveEvaluations: "..XX.DX.D"
    },
    "X-XX..O...X": {
      evaluation: "X",
      moveEvaluations: "..XX.XXX."
    },
    "X-XX..O...O": {
      evaluation: "X",
      moveEvaluations: "..XX.DXO."
    },
    "X-XX..O....": {
      evaluation: "X",
      moveEvaluations: "..XX.DXXX"
    },
    "X-XX...XXX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...XXOO": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "X-XX...XXO.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...XX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XX...XX.O": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XX...XX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "X-XX...XOXO": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "X-XX...XOX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX...XOO.": {
      evaluation: "X",
      moveEvaluations: "..XOO...X"
    },
    "X-XX...XO.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XX...XO.O": {
      evaluation: "X",
      moveEvaluations: "..XOO..X."
    },
    "X-XX...XO..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "X-XX...X.XO": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.."
    },
    "X-XX...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-XX...X.OO": {
      evaluation: "X",
      moveEvaluations: "..XOO.X.."
    },
    "X-XX...X.O.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-XX...X..X": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "X-XX...X..O": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "X-XX...X...": {
      evaluation: "X",
      moveEvaluations: "..XXX.XXX"
    },
    "X-XX...OXX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...OXOX": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "X-XX...OXOO": {
      evaluation: "X",
      moveEvaluations: "..XXO...."
    },
    "X-XX...OXO.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...OX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XX...OX.O": {
      evaluation: "X",
      moveEvaluations: "..XXO..O."
    },
    "X-XX...OX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "X-XX...OOXO": {
      evaluation: "X",
      moveEvaluations: "..XOX...."
    },
    "X-XX...OOX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "X-XX...OOOX": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "X-XX...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX...OOO.": {
      evaluation: "X",
      moveEvaluations: "..XOO...X"
    },
    "X-XX...OO.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XX...OO.O": {
      evaluation: "X",
      moveEvaluations: "..XOO..O."
    },
    "X-XX...OO..": {
      evaluation: "X",
      moveEvaluations: "..XOX..XX"
    },
    "X-XX...O.XO": {
      evaluation: "X",
      moveEvaluations: "..XOX.O.."
    },
    "X-XX...O.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-XX...O.OX": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.."
    },
    "X-XX...O.OO": {
      evaluation: "X",
      moveEvaluations: "..XOO.O.."
    },
    "X-XX...O.O.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-XX...O..X": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "X-XX...O..O": {
      evaluation: "X",
      moveEvaluations: "..XOO.OO."
    },
    "X-XX...O...": {
      evaluation: "X",
      moveEvaluations: "..XXX.XXX"
    },
    "X-XX....XX.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "X-XX....XOX": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "X-XX....XOO": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "X-XX....XO.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "X-XX....X.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "X-XX....X.O": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "X-XX....X..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "X-XX....OXO": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "X-XX....OX.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "X-XX....OOX": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "X-XX....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XX....OO.": {
      evaluation: "X",
      moveEvaluations: "..XOOO..X"
    },
    "X-XX....O.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "X-XX....O.O": {
      evaluation: "X",
      moveEvaluations: "..XOOO.X."
    },
    "X-XX....O..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "X-XX.....XX": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "X-XX.....XO": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "X-XX.....X.": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.X"
    },
    "X-XX.....OX": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "X-XX.....OO": {
      evaluation: "X",
      moveEvaluations: "..XOOOX.."
    },
    "X-XX.....O.": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.X"
    },
    "X-XX......X": {
      evaluation: "X",
      moveEvaluations: "..XXXXXX."
    },
    "X-XX......O": {
      evaluation: "X",
      moveEvaluations: "..XXXXXX."
    },
    "X-XX.......": {
      evaluation: "X",
      moveEvaluations: "..XXXXXXX"
    },
    "X-XOXOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOXOOXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XOXOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XOXOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOXOOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XOXOXOO.O": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "X-XOXOXOO..": {
      evaluation: "X",
      moveEvaluations: ".......DX"
    },
    "X-XOXOXO.X.": {
      evaluation: "X",
      moveEvaluations: "......X.X"
    },
    "X-XOXOXO.O.": {
      evaluation: "X",
      moveEvaluations: "......X.X"
    },
    "X-XOXOXO...": {
      evaluation: "X",
      moveEvaluations: "......XXX"
    },
    "X-XOXOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX.OXO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XOXOX.OX.": {
      evaluation: "X",
      moveEvaluations: ".....D..X"
    },
    "X-XOXOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOX.OO.": {
      evaluation: "X",
      moveEvaluations: ".....O..X"
    },
    "X-XOXOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX.O.O": {
      evaluation: "D",
      moveEvaluations: ".....O.D."
    },
    "X-XOXOX.O..": {
      evaluation: "X",
      moveEvaluations: ".....D.DX"
    },
    "X-XOXOX..XO": {
      evaluation: "X",
      moveEvaluations: ".....DX.."
    },
    "X-XOXOX..X.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "X-XOXOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX..OO": {
      evaluation: "X",
      moveEvaluations: ".....OX.."
    },
    "X-XOXOX..O.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "X-XOXOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOXOX...O": {
      evaluation: "X",
      moveEvaluations: ".....DXD."
    },
    "X-XOXOX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "X-XOXOOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO.X.X": {
      evaluation: "X",
      moveEvaluations: ".....X.X."
    },
    "X-XOXOO.X.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "X-XOXOO.X..": {
      evaluation: "O",
      moveEvaluations: ".....O.OO"
    },
    "X-XOXOO.OXO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "X-XOXOO.OX.": {
      evaluation: "D",
      moveEvaluations: ".....D..O"
    },
    "X-XOXOO.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO.O.X": {
      evaluation: "X",
      moveEvaluations: ".....X.O."
    },
    "X-XOXOO.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "X-XOXOO.O..": {
      evaluation: "O",
      moveEvaluations: ".....O.OO"
    },
    "X-XOXOO..XO": {
      evaluation: "D",
      moveEvaluations: ".....DO.."
    },
    "X-XOXOO..X.": {
      evaluation: "D",
      moveEvaluations: ".....DO.O"
    },
    "X-XOXOO..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXOO...X": {
      evaluation: "X",
      moveEvaluations: ".....XOO."
    },
    "X-XOXOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "X-XOXOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "X-XOXO.OXOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XOXO.OXOO": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XOXO.OXO.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-XOXO.OX.X": {
      evaluation: "X",
      moveEvaluations: "....X..X."
    },
    "X-XOXO.OX.O": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XOXO.OX..": {
      evaluation: "X",
      moveEvaluations: "....X..OO"
    },
    "X-XOXO.OOXO": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "X-XOXO.OOX.": {
      evaluation: "D",
      moveEvaluations: "....D...O"
    },
    "X-XOXO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XOXO.OO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "X-XOXO.OO..": {
      evaluation: "D",
      moveEvaluations: "....D..OO"
    },
    "X-XOXO.O.X.": {
      evaluation: "X",
      moveEvaluations: "....X.O.O"
    },
    "X-XOXO.O.O.": {
      evaluation: "X",
      moveEvaluations: "....X.O.O"
    },
    "X-XOXO.O...": {
      evaluation: "X",
      moveEvaluations: "....X.OOO"
    },
    "X-XOXO..X.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "X-XOXO..X.O": {
      evaluation: "X",
      moveEvaluations: "....XD.D."
    },
    "X-XOXO..X..": {
      evaluation: "X",
      moveEvaluations: "....XX.XX"
    },
    "X-XOXO..OXO": {
      evaluation: "D",
      moveEvaluations: "....DD..."
    },
    "X-XOXO..OX.": {
      evaluation: "X",
      moveEvaluations: "....DD..X"
    },
    "X-XOXO..OOX": {
      evaluation: "X",
      moveEvaluations: "....XX..."
    },
    "X-XOXO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOXO..OO.": {
      evaluation: "O",
      moveEvaluations: "....OO..O"
    },
    "X-XOXO..O.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "X-XOXO..O.O": {
      evaluation: "D",
      moveEvaluations: "....OO.D."
    },
    "X-XOXO..O..": {
      evaluation: "X",
      moveEvaluations: "....DD.DX"
    },
    "X-XOXO...XO": {
      evaluation: "D",
      moveEvaluations: "....DDD.."
    },
    "X-XOXO...X.": {
      evaluation: "X",
      moveEvaluations: "....XDX.X"
    },
    "X-XOXO...OX": {
      evaluation: "X",
      moveEvaluations: "....XXO.."
    },
    "X-XOXO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "X-XOXO...O.": {
      evaluation: "X",
      moveEvaluations: "....XOO.O"
    },
    "X-XOXO....X": {
      evaluation: "X",
      moveEvaluations: "....XXXX."
    },
    "X-XOXO....O": {
      evaluation: "D",
      moveEvaluations: "....DOOD."
    },
    "X-XOXO.....": {
      evaluation: "X",
      moveEvaluations: "....XDODX"
    },
    "X-XOX.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOX.X.OXO": {
      evaluation: "D",
      moveEvaluations: "...D.D..."
    },
    "X-XOX.X.OX.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "X-XOX.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.X.OO.": {
      evaluation: "X",
      moveEvaluations: "...O.O..X"
    },
    "X-XOX.X.O.O": {
      evaluation: "D",
      moveEvaluations: "...O.O.D."
    },
    "X-XOX.X.O..": {
      evaluation: "X",
      moveEvaluations: "...X.X.DX"
    },
    "X-XOX.X..X.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "X-XOX.X..O.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "X-XOX.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XXXX"
    },
    "X-XOX.O.XOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O.XOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O.X.X": {
      evaluation: "X",
      moveEvaluations: "...X.X.X."
    },
    "X-XOX.O.X.O": {
      evaluation: "X",
      moveEvaluations: "...X.O.D."
    },
    "X-XOX.O.X..": {
      evaluation: "X",
      moveEvaluations: "...X.O.XO"
    },
    "X-XOX.O.OXO": {
      evaluation: "D",
      moveEvaluations: "...D.D..."
    },
    "X-XOX.O.OX.": {
      evaluation: "D",
      moveEvaluations: "...D.D..D"
    },
    "X-XOX.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O.O.O": {
      evaluation: "D",
      moveEvaluations: "...O.O.D."
    },
    "X-XOX.O.O..": {
      evaluation: "D",
      moveEvaluations: "...O.O.DO"
    },
    "X-XOX.O..X.": {
      evaluation: "X",
      moveEvaluations: "...D.DX.X"
    },
    "X-XOX.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX.O....": {
      evaluation: "D",
      moveEvaluations: "...O.OODO"
    },
    "X-XOX...XOX": {
      evaluation: "X",
      moveEvaluations: "...XXX..."
    },
    "X-XOX...XOO": {
      evaluation: "X",
      moveEvaluations: "...XXO..."
    },
    "X-XOX...XO.": {
      evaluation: "X",
      moveEvaluations: "...XXO..O"
    },
    "X-XOX...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "X-XOX...X.O": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "X-XOX...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "X-XOX...OXO": {
      evaluation: "D",
      moveEvaluations: "...DDD..."
    },
    "X-XOX...OX.": {
      evaluation: "X",
      moveEvaluations: "...DDD..X"
    },
    "X-XOX...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOX...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "X-XOX...O.O": {
      evaluation: "D",
      moveEvaluations: "...OOO.D."
    },
    "X-XOX...O..": {
      evaluation: "X",
      moveEvaluations: "...ODD.DX"
    },
    "X-XOX....X.": {
      evaluation: "X",
      moveEvaluations: "...XXXX.X"
    },
    "X-XOX....O.": {
      evaluation: "X",
      moveEvaluations: "...OXOO.O"
    },
    "X-XOX......": {
      evaluation: "X",
      moveEvaluations: "...XXXXXX"
    },
    "X-XOOOXXOXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "X-XOOOXXOX.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XOOOXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXXOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XOOOXXO.O": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "X-XOOOXXO..": {
      evaluation: "X",
      moveEvaluations: ".......DX"
    },
    "X-XOOOXX.XO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XOOOXX.X.": {
      evaluation: "X",
      moveEvaluations: "......D.X"
    },
    "X-XOOOXX.OO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XOOOXX.O.": {
      evaluation: "X",
      moveEvaluations: "......D.X"
    },
    "X-XOOOXX..O": {
      evaluation: "D",
      moveEvaluations: "......DD."
    },
    "X-XOOOXX...": {
      evaluation: "X",
      moveEvaluations: "......DDX"
    },
    "X-XOOOXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXOOO.": {
      evaluation: "X",
      moveEvaluations: "........X"
    },
    "X-XOOOXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXOO..": {
      evaluation: "X",
      moveEvaluations: ".......OX"
    },
    "X-XOOOXO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXO.X.": {
      evaluation: "X",
      moveEvaluations: "......O.X"
    },
    "X-XOOOXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXO.O.": {
      evaluation: "X",
      moveEvaluations: "......O.X"
    },
    "X-XOOOXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOXO...": {
      evaluation: "X",
      moveEvaluations: "......OOX"
    },
    "X-XOOOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "X-XOOOX.O..": {
      evaluation: "X",
      moveEvaluations: ".....D.DX"
    },
    "X-XOOOX..XO": {
      evaluation: "D",
      moveEvaluations: ".....DO.."
    },
    "X-XOOOX..X.": {
      evaluation: "X",
      moveEvaluations: ".....DD.X"
    },
    "X-XOOOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XOOOX..O.": {
      evaluation: "X",
      moveEvaluations: ".....DD.X"
    },
    "X-XOOOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOOOX...O": {
      evaluation: "D",
      moveEvaluations: ".....DOO."
    },
    "X-XOOOX....": {
      evaluation: "X",
      moveEvaluations: ".....DDDX"
    },
    "X-XOOOOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOX.XO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "X-XOOOOX.X.": {
      evaluation: "D",
      moveEvaluations: "......D.O"
    },
    "X-XOOOOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOX..O": {
      evaluation: "O",
      moveEvaluations: "......OO."
    },
    "X-XOOOOX...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "X-XOOOOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-XOOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-XOOOO..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOOO...X": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "X-XOOOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "X-XOOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "X-XOOO.XOXO": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "X-XOOO.XOX.": {
      evaluation: "D",
      moveEvaluations: "....D...O"
    },
    "X-XOOO.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XOOO.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "X-XOOO.XO..": {
      evaluation: "D",
      moveEvaluations: "....D..OO"
    },
    "X-XOOO.X.XO": {
      evaluation: "D",
      moveEvaluations: "....D.D.."
    },
    "X-XOOO.X.X.": {
      evaluation: "X",
      moveEvaluations: "....D.D.X"
    },
    "X-XOOO.X.OO": {
      evaluation: "O",
      moveEvaluations: "....O.O.."
    },
    "X-XOOO.X.O.": {
      evaluation: "D",
      moveEvaluations: "....D.O.O"
    },
    "X-XOOO.X..O": {
      evaluation: "D",
      moveEvaluations: "....D.DD."
    },
    "X-XOOO.X...": {
      evaluation: "D",
      moveEvaluations: "....D.DDO"
    },
    "X-XOOO.OOOX": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-XOOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-XOOO.OO.X": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-XOOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "X-XOOO.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "X-XOOO.O.OX": {
      evaluation: "X",
      moveEvaluations: "....X.O.."
    },
    "X-XOOO.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "X-XOOO.O..X": {
      evaluation: "X",
      moveEvaluations: "....X.OO."
    },
    "X-XOOO.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "X-XOOO..O.X": {
      evaluation: "X",
      moveEvaluations: "....XO.O."
    },
    "X-XOOO..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "X-XOOO..O..": {
      evaluation: "O",
      moveEvaluations: "....OO.OO"
    },
    "X-XOOO...XO": {
      evaluation: "D",
      moveEvaluations: "....ODO.."
    },
    "X-XOOO...X.": {
      evaluation: "X",
      moveEvaluations: "....DDD.X"
    },
    "X-XOOO...OX": {
      evaluation: "X",
      moveEvaluations: "....XOO.."
    },
    "X-XOOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "X-XOOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "X-XOOO....X": {
      evaluation: "X",
      moveEvaluations: "....XOXX."
    },
    "X-XOOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "X-XOOO.....": {
      evaluation: "D",
      moveEvaluations: "....DOOOO"
    },
    "X-XOO.XXXOO": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XOO.XXXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XOO.XXX.O": {
      evaluation: "X",
      moveEvaluations: "...X...D."
    },
    "X-XOO.XXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XOO.XXOXO": {
      evaluation: "X",
      moveEvaluations: "...X....."
    },
    "X-XOO.XXOX.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XOO.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XXOO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XOO.XXO.O": {
      evaluation: "X",
      moveEvaluations: "...X...D."
    },
    "X-XOO.XXO..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "X-XOO.XX.XO": {
      evaluation: "X",
      moveEvaluations: "...X..D.."
    },
    "X-XOO.XX.X.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "X-XOO.XX.OO": {
      evaluation: "X",
      moveEvaluations: "...X..D.."
    },
    "X-XOO.XX.O.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "X-XOO.XX..O": {
      evaluation: "X",
      moveEvaluations: "...X..DD."
    },
    "X-XOO.XX...": {
      evaluation: "X",
      moveEvaluations: "...X..XXX"
    },
    "X-XOO.XOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XOXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "X-XOO.XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.XOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XOX..": {
      evaluation: "X",
      moveEvaluations: "...X...OX"
    },
    "X-XOO.XOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XOOX.": {
      evaluation: "X",
      moveEvaluations: "...O....X"
    },
    "X-XOO.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XOOO.": {
      evaluation: "X",
      moveEvaluations: "...O....X"
    },
    "X-XOO.XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XOO..": {
      evaluation: "X",
      moveEvaluations: "...O...OX"
    },
    "X-XOO.XO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XO.X.": {
      evaluation: "X",
      moveEvaluations: "...O..O.X"
    },
    "X-XOO.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XO.O.": {
      evaluation: "X",
      moveEvaluations: "...O..O.X"
    },
    "X-XOO.XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.XO...": {
      evaluation: "X",
      moveEvaluations: "...O..OOX"
    },
    "X-XOO.X.XOO": {
      evaluation: "X",
      moveEvaluations: "...X.D..."
    },
    "X-XOO.X.XO.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "X-XOO.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.X.X.O": {
      evaluation: "X",
      moveEvaluations: "...X.D.O."
    },
    "X-XOO.X.X..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "X-XOO.X.OXO": {
      evaluation: "D",
      moveEvaluations: "...O.D..."
    },
    "X-XOO.X.OX.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "X-XOO.X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.X.OO.": {
      evaluation: "X",
      moveEvaluations: "...O.O..X"
    },
    "X-XOO.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "...O.O.O."
    },
    "X-XOO.X.O..": {
      evaluation: "X",
      moveEvaluations: "...X.X.DX"
    },
    "X-XOO.X..XO": {
      evaluation: "D",
      moveEvaluations: "...O.DO.."
    },
    "X-XOO.X..X.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "X-XOO.X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.X..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "X-XOO.X..O.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "X-XOO.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XOO.X...O": {
      evaluation: "D",
      moveEvaluations: "...O.DOO."
    },
    "X-XOO.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XXDX"
    },
    "X-XOO.OXXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXX.O": {
      evaluation: "X",
      moveEvaluations: "...X...D."
    },
    "X-XOO.OXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XO"
    },
    "X-XOO.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OX.XO": {
      evaluation: "D",
      moveEvaluations: "...O..D.."
    },
    "X-XOO.OX.X.": {
      evaluation: "X",
      moveEvaluations: "...O..X.O"
    },
    "X-XOO.OX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OX..O": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "X-XOO.OX...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "X-XOO.OOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOX.X": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "X-XOO.OOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOX..": {
      evaluation: "X",
      moveEvaluations: "...X...OO"
    },
    "X-XOO.OOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OO.X.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "X-XOO.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OO..X": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "X-XOO.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.OO...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "X-XOO.O.XOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.X.X": {
      evaluation: "X",
      moveEvaluations: "...X.O.X."
    },
    "X-XOO.O.X.O": {
      evaluation: "X",
      moveEvaluations: "...X.O.O."
    },
    "X-XOO.O.X..": {
      evaluation: "X",
      moveEvaluations: "...X.O.XO"
    },
    "X-XOO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O..XO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "X-XOO.O..X.": {
      evaluation: "X",
      moveEvaluations: "...O.OX.O"
    },
    "X-XOO.O..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO.O...X": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "X-XOO.O...O": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "X-XOO.O....": {
      evaluation: "O",
      moveEvaluations: "...O.OOOO"
    },
    "X-XOO..XXOO": {
      evaluation: "X",
      moveEvaluations: "...XD...."
    },
    "X-XOO..XXO.": {
      evaluation: "X",
      moveEvaluations: "...XX...O"
    },
    "X-XOO..XX.O": {
      evaluation: "X",
      moveEvaluations: "...XD..D."
    },
    "X-XOO..XX..": {
      evaluation: "X",
      moveEvaluations: "...XX..XX"
    },
    "X-XOO..XOXO": {
      evaluation: "D",
      moveEvaluations: "...OD...."
    },
    "X-XOO..XOX.": {
      evaluation: "X",
      moveEvaluations: "...OX...O"
    },
    "X-XOO..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..XOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "X-XOO..XO.O": {
      evaluation: "O",
      moveEvaluations: "...OO..O."
    },
    "X-XOO..XO..": {
      evaluation: "X",
      moveEvaluations: "...OX..OO"
    },
    "X-XOO..X.XO": {
      evaluation: "X",
      moveEvaluations: "...XD.D.."
    },
    "X-XOO..X.X.": {
      evaluation: "X",
      moveEvaluations: "...XX.X.X"
    },
    "X-XOO..X.OO": {
      evaluation: "O",
      moveEvaluations: "...OO.O.."
    },
    "X-XOO..X.O.": {
      evaluation: "X",
      moveEvaluations: "...OX.O.O"
    },
    "X-XOO..X..O": {
      evaluation: "X",
      moveEvaluations: "...XD.DD."
    },
    "X-XOO..X...": {
      evaluation: "X",
      moveEvaluations: "...XX.XXO"
    },
    "X-XOO..OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..OXO.": {
      evaluation: "X",
      moveEvaluations: "...XO...O"
    },
    "X-XOO..OX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "X-XOO..OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..OX..": {
      evaluation: "X",
      moveEvaluations: "...XO..OX"
    },
    "X-XOO..OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..OOX.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "X-XOO..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..OOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "X-XOO..OO.X": {
      evaluation: "X",
      moveEvaluations: "...OX..O."
    },
    "X-XOO..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..OO..": {
      evaluation: "O",
      moveEvaluations: "...OO..OO"
    },
    "X-XOO..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..O.X.": {
      evaluation: "X",
      moveEvaluations: "...OO.O.X"
    },
    "X-XOO..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..O.O.": {
      evaluation: "O",
      moveEvaluations: "...OO.O.O"
    },
    "X-XOO..O..X": {
      evaluation: "X",
      moveEvaluations: "...XX.XX."
    },
    "X-XOO..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO..O...": {
      evaluation: "O",
      moveEvaluations: "...OO.OOO"
    },
    "X-XOO...XOO": {
      evaluation: "X",
      moveEvaluations: "...XOO..."
    },
    "X-XOO...XO.": {
      evaluation: "X",
      moveEvaluations: "...XXO..O"
    },
    "X-XOO...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "X-XOO...X.O": {
      evaluation: "X",
      moveEvaluations: "...XOD.O."
    },
    "X-XOO...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "X-XOO...OXO": {
      evaluation: "O",
      moveEvaluations: "...OOO..."
    },
    "X-XOO...OX.": {
      evaluation: "D",
      moveEvaluations: "...ODO..O"
    },
    "X-XOO...OOX": {
      evaluation: "X",
      moveEvaluations: "...OXO..."
    },
    "X-XOO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XOO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "X-XOO...O.X": {
      evaluation: "X",
      moveEvaluations: "...OXO.O."
    },
    "X-XOO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "X-XOO...O..": {
      evaluation: "O",
      moveEvaluations: "...OOO.OO"
    },
    "X-XOO....XO": {
      evaluation: "D",
      moveEvaluations: "...OODO.."
    },
    "X-XOO....X.": {
      evaluation: "X",
      moveEvaluations: "...XDXX.X"
    },
    "X-XOO....OX": {
      evaluation: "X",
      moveEvaluations: "...OXOO.."
    },
    "X-XOO....OO": {
      evaluation: "O",
      moveEvaluations: "...OOOO.."
    },
    "X-XOO....O.": {
      evaluation: "O",
      moveEvaluations: "...OOOO.O"
    },
    "X-XOO.....X": {
      evaluation: "X",
      moveEvaluations: "...XXOXX."
    },
    "X-XOO.....O": {
      evaluation: "O",
      moveEvaluations: "...OOOOO."
    },
    "X-XOO......": {
      evaluation: "X",
      moveEvaluations: "...XDOXDO"
    },
    "X-XO.OXX.XO": {
      evaluation: "D",
      moveEvaluations: "..D...D.."
    },
    "X-XO.OXX.X.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XO.OXX.OO": {
      evaluation: "D",
      moveEvaluations: "..O...D.."
    },
    "X-XO.OXX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XO.OXX..O": {
      evaluation: "D",
      moveEvaluations: "..D...DD."
    },
    "X-XO.OXX...": {
      evaluation: "X",
      moveEvaluations: "..X...XDX"
    },
    "X-XO.OXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "X-XO.OXO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "X-XO.OXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO.OXO..O": {
      evaluation: "D",
      moveEvaluations: "..D...OO."
    },
    "X-XO.OXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XDX"
    },
    "X-XO.OX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO.OX...O": {
      evaluation: "D",
      moveEvaluations: "..D..DDD."
    },
    "X-XO.OX....": {
      evaluation: "X",
      moveEvaluations: "..X..DXDX"
    },
    "X-XO.OOX.XO": {
      evaluation: "D",
      moveEvaluations: "..D...D.."
    },
    "X-XO.OOX.X.": {
      evaluation: "X",
      moveEvaluations: "..D...D.X"
    },
    "X-XO.OOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOX..O": {
      evaluation: "D",
      moveEvaluations: "..O...OD."
    },
    "X-XO.OOX...": {
      evaluation: "D",
      moveEvaluations: "..O...ODO"
    },
    "X-XO.OOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO.OO...X": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "X-XO.OO...O": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "X-XO.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "X-XO.O.X.XO": {
      evaluation: "D",
      moveEvaluations: "..D.D.D.."
    },
    "X-XO.O.X.X.": {
      evaluation: "X",
      moveEvaluations: "..D.D.D.X"
    },
    "X-XO.O.X.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-XO.O.X.O.": {
      evaluation: "D",
      moveEvaluations: "..O.D.O.O"
    },
    "X-XO.O.X..O": {
      evaluation: "D",
      moveEvaluations: "..O.D.DD."
    },
    "X-XO.O.X...": {
      evaluation: "X",
      moveEvaluations: "..D.D.DDX"
    },
    "X-XO.O.O.OX": {
      evaluation: "X",
      moveEvaluations: "..O.X.O.."
    },
    "X-XO.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-XO.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "X-XO.O.O..X": {
      evaluation: "X",
      moveEvaluations: "..O.X.OO."
    },
    "X-XO.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "X-XO.O.O...": {
      evaluation: "D",
      moveEvaluations: "..O.D.OOO"
    },
    "X-XO.O....X": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "X-XO.O....O": {
      evaluation: "D",
      moveEvaluations: "..O.DOOO."
    },
    "X-XO.O.....": {
      evaluation: "D",
      moveEvaluations: "..O.DDODO"
    },
    "X-XO..XXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XO..XXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "X-XO..XXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XO..XXOXO": {
      evaluation: "X",
      moveEvaluations: "..DX....."
    },
    "X-XO..XXOX.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XO..XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..XXOO.": {
      evaluation: "X",
      moveEvaluations: "..OX....X"
    },
    "X-XO..XXO.O": {
      evaluation: "X",
      moveEvaluations: "..OX...D."
    },
    "X-XO..XXO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XO..XX.XO": {
      evaluation: "X",
      moveEvaluations: "..XX..X.."
    },
    "X-XO..XX.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XO..XX.OO": {
      evaluation: "X",
      moveEvaluations: "..OX..X.."
    },
    "X-XO..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XO..XX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XD."
    },
    "X-XO..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "X-XO..XOXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "X-XO..XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..XOX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...O."
    },
    "X-XO..XOX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "X-XO..XOOXO": {
      evaluation: "D",
      moveEvaluations: "..DO....."
    },
    "X-XO..XOOX.": {
      evaluation: "X",
      moveEvaluations: "..DD....X"
    },
    "X-XO..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..XOOO.": {
      evaluation: "X",
      moveEvaluations: "..OO....X"
    },
    "X-XO..XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "X-XO..XOO..": {
      evaluation: "X",
      moveEvaluations: "..DO...DX"
    },
    "X-XO..XO.XO": {
      evaluation: "D",
      moveEvaluations: "..DO..O.."
    },
    "X-XO..XO.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XO..XO.OO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "X-XO..XO.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-XO..XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..XO..O": {
      evaluation: "D",
      moveEvaluations: "..DO..OO."
    },
    "X-XO..XO...": {
      evaluation: "X",
      moveEvaluations: "..XX..XDX"
    },
    "X-XO..X.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "X-XO..X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..X.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "X-XO..X.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "X-XO..X.OXO": {
      evaluation: "D",
      moveEvaluations: "..DD.D..."
    },
    "X-XO..X.OX.": {
      evaluation: "X",
      moveEvaluations: "..DX.X..X"
    },
    "X-XO..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..X.OO.": {
      evaluation: "X",
      moveEvaluations: "..OO.O..X"
    },
    "X-XO..X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..X.O.O": {
      evaluation: "D",
      moveEvaluations: "..OO.O.D."
    },
    "X-XO..X.O..": {
      evaluation: "X",
      moveEvaluations: "..DX.X.DX"
    },
    "X-XO..X..XO": {
      evaluation: "X",
      moveEvaluations: "..DX.DX.."
    },
    "X-XO..X..X.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "X-XO..X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..X..OO": {
      evaluation: "X",
      moveEvaluations: "..OO.OX.."
    },
    "X-XO..X..O.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "X-XO..X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-XO..X...O": {
      evaluation: "X",
      moveEvaluations: "..DX.DXD."
    },
    "X-XO..X....": {
      evaluation: "X",
      moveEvaluations: "..XX.XXXX"
    },
    "X-XO..OXXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OXX.O": {
      evaluation: "X",
      moveEvaluations: "..OX...D."
    },
    "X-XO..OXX..": {
      evaluation: "X",
      moveEvaluations: "..OX...XO"
    },
    "X-XO..OXOXO": {
      evaluation: "D",
      moveEvaluations: "..DO....."
    },
    "X-XO..OXOX.": {
      evaluation: "D",
      moveEvaluations: "..DO....O"
    },
    "X-XO..OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OXO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "X-XO..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-XO..OX.XO": {
      evaluation: "D",
      moveEvaluations: "..DD..D.."
    },
    "X-XO..OX.X.": {
      evaluation: "X",
      moveEvaluations: "..DD..X.X"
    },
    "X-XO..OX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OX..O": {
      evaluation: "D",
      moveEvaluations: "..OO..OD."
    },
    "X-XO..OX...": {
      evaluation: "D",
      moveEvaluations: "..OO..ODO"
    },
    "X-XO..OOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OOX.X": {
      evaluation: "X",
      moveEvaluations: "..OX...X."
    },
    "X-XO..OOX.O": {
      evaluation: "X",
      moveEvaluations: "..OX...O."
    },
    "X-XO..OOX..": {
      evaluation: "X",
      moveEvaluations: "..OX...OO"
    },
    "X-XO..OOOXO": {
      evaluation: "O",
      moveEvaluations: "..OO....."
    },
    "X-XO..OOOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-XO..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OOO.X": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "X-XO..OOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "X-XO..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-XO..OO.XO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "X-XO..OO.X.": {
      evaluation: "D",
      moveEvaluations: "..OD..O.O"
    },
    "X-XO..OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..OO..X": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "X-XO..OO..O": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "X-XO..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "X-XO..O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O.X.X": {
      evaluation: "X",
      moveEvaluations: "..OX.O.X."
    },
    "X-XO..O.X.O": {
      evaluation: "X",
      moveEvaluations: "..OX.O.D."
    },
    "X-XO..O.X..": {
      evaluation: "X",
      moveEvaluations: "..OX.O.XO"
    },
    "X-XO..O.OXO": {
      evaluation: "D",
      moveEvaluations: "..DO.O..."
    },
    "X-XO..O.OX.": {
      evaluation: "D",
      moveEvaluations: "..DO.O..O"
    },
    "X-XO..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O.O.X": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "X-XO..O.O.O": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "X-XO..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "X-XO..O..XO": {
      evaluation: "D",
      moveEvaluations: "..DD.DD.."
    },
    "X-XO..O..X.": {
      evaluation: "X",
      moveEvaluations: "..DD.DX.D"
    },
    "X-XO..O..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO..O...X": {
      evaluation: "D",
      moveEvaluations: "..OO.OOD."
    },
    "X-XO..O...O": {
      evaluation: "O",
      moveEvaluations: "..OO.OOO."
    },
    "X-XO..O....": {
      evaluation: "D",
      moveEvaluations: "..OO.OODO"
    },
    "X-XO...XXO.": {
      evaluation: "X",
      moveEvaluations: "..OXX...O"
    },
    "X-XO...XX.O": {
      evaluation: "X",
      moveEvaluations: "..XXX..D."
    },
    "X-XO...XX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "X-XO...XOXO": {
      evaluation: "D",
      moveEvaluations: "..DDD...."
    },
    "X-XO...XOX.": {
      evaluation: "X",
      moveEvaluations: "..DDX...X"
    },
    "X-XO...XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-XO...XO.O": {
      evaluation: "D",
      moveEvaluations: "..OOO..D."
    },
    "X-XO...XO..": {
      evaluation: "X",
      moveEvaluations: "..DOX..DX"
    },
    "X-XO...X.XO": {
      evaluation: "X",
      moveEvaluations: "..DXD.D.."
    },
    "X-XO...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-XO...X.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "X-XO...X.O.": {
      evaluation: "X",
      moveEvaluations: "..OOX.O.O"
    },
    "X-XO...X..O": {
      evaluation: "X",
      moveEvaluations: "..OXD.DD."
    },
    "X-XO...X...": {
      evaluation: "X",
      moveEvaluations: "..XXX.XXX"
    },
    "X-XO...OXO.": {
      evaluation: "X",
      moveEvaluations: "..OXX...O"
    },
    "X-XO...OX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "X-XO...OX.O": {
      evaluation: "X",
      moveEvaluations: "..XXO..O."
    },
    "X-XO...OX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "X-XO...OOXO": {
      evaluation: "D",
      moveEvaluations: "..DOO...."
    },
    "X-XO...OOX.": {
      evaluation: "D",
      moveEvaluations: "..DOD...O"
    },
    "X-XO...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-XO...OO.X": {
      evaluation: "X",
      moveEvaluations: "..OOX..O."
    },
    "X-XO...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "X-XO...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "X-XO...O.XO": {
      evaluation: "D",
      moveEvaluations: "..DOO.O.."
    },
    "X-XO...O.X.": {
      evaluation: "X",
      moveEvaluations: "..DDD.X.X"
    },
    "X-XO...O.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "X-XO...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "X-XO...O..X": {
      evaluation: "X",
      moveEvaluations: "..OXX.XX."
    },
    "X-XO...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "X-XO...O...": {
      evaluation: "X",
      moveEvaluations: "..OOD.XDO"
    },
    "X-XO....XO.": {
      evaluation: "X",
      moveEvaluations: "..OXXO..O"
    },
    "X-XO....X.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "X-XO....X.O": {
      evaluation: "X",
      moveEvaluations: "..XXXD.D."
    },
    "X-XO....X..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "X-XO....OXO": {
      evaluation: "D",
      moveEvaluations: "..DODD..."
    },
    "X-XO....OX.": {
      evaluation: "D",
      moveEvaluations: "..DDDD..D"
    },
    "X-XO....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-XO....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "X-XO....O.X": {
      evaluation: "X",
      moveEvaluations: "..XOXX.D."
    },
    "X-XO....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "X-XO....O..": {
      evaluation: "D",
      moveEvaluations: "..OODO.DO"
    },
    "X-XO.....XO": {
      evaluation: "D",
      moveEvaluations: "..DDDDD.."
    },
    "X-XO.....X.": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.X"
    },
    "X-XO.....OX": {
      evaluation: "X",
      moveEvaluations: "..OOXOO.."
    },
    "X-XO.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "X-XO.....O.": {
      evaluation: "X",
      moveEvaluations: "..OOXOO.O"
    },
    "X-XO......X": {
      evaluation: "X",
      moveEvaluations: "..XXXXXX."
    },
    "X-XO......O": {
      evaluation: "D",
      moveEvaluations: "..OODODD."
    },
    "X-XO.......": {
      evaluation: "X",
      moveEvaluations: "..DXXDXDD"
    },
    "X-X.X.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X.X.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X.X.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X.X.X.OXO": {
      evaluation: "X",
      moveEvaluations: ".X.X.X..."
    },
    "X-X.X.X.OX.": {
      evaluation: "X",
      moveEvaluations: ".X.X.X..X"
    },
    "X-X.X.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.X.X.OO.": {
      evaluation: "X",
      moveEvaluations: ".X.O.O..X"
    },
    "X-X.X.X.O.O": {
      evaluation: "X",
      moveEvaluations: ".X.O.O.D."
    },
    "X-X.X.X.O..": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.XX"
    },
    "X-X.X.X..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "X-X.X.X..O.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "X-X.X.X....": {
      evaluation: "X",
      moveEvaluations: ".X.X.XXXX"
    },
    "X-X.X.O.X.X": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.X."
    },
    "X-X.X.O.X.O": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.X."
    },
    "X-X.X.O.X..": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.XX"
    },
    "X-X.X.O.OXO": {
      evaluation: "X",
      moveEvaluations: ".X.D.D..."
    },
    "X-X.X.O.OX.": {
      evaluation: "X",
      moveEvaluations: ".X.D.X..X"
    },
    "X-X.X.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.X.O.OO.": {
      evaluation: "X",
      moveEvaluations: ".X.O.O..O"
    },
    "X-X.X.O.O.O": {
      evaluation: "X",
      moveEvaluations: ".X.O.O.D."
    },
    "X-X.X.O.O..": {
      evaluation: "X",
      moveEvaluations: ".X.D.X.DX"
    },
    "X-X.X.O..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "X-X.X.O..O.": {
      evaluation: "X",
      moveEvaluations: ".X.O.OO.O"
    },
    "X-X.X.O....": {
      evaluation: "X",
      moveEvaluations: ".X.X.XXXX"
    },
    "X-X.X...X.X": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.X."
    },
    "X-X.X...X.O": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.X."
    },
    "X-X.X...X..": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.XX"
    },
    "X-X.X...OXO": {
      evaluation: "X",
      moveEvaluations: ".X.DDD..."
    },
    "X-X.X...OX.": {
      evaluation: "X",
      moveEvaluations: ".X.XXX..X"
    },
    "X-X.X...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.X...OO.": {
      evaluation: "X",
      moveEvaluations: ".X.OOO..X"
    },
    "X-X.X...O.O": {
      evaluation: "X",
      moveEvaluations: ".X.OOO.D."
    },
    "X-X.X...O..": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.XX"
    },
    "X-X.X....X.": {
      evaluation: "X",
      moveEvaluations: ".X.XXXX.X"
    },
    "X-X.X....O.": {
      evaluation: "X",
      moveEvaluations: ".X.XXXX.X"
    },
    "X-X.X......": {
      evaluation: "X",
      moveEvaluations: ".X.XXXXXX"
    },
    "X-X.O.XXOXO": {
      evaluation: "X",
      moveEvaluations: ".X.X....."
    },
    "X-X.O.XXOX.": {
      evaluation: "X",
      moveEvaluations: ".X.X....X"
    },
    "X-X.O.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XXOO.": {
      evaluation: "X",
      moveEvaluations: ".O.X....X"
    },
    "X-X.O.XXO.O": {
      evaluation: "X",
      moveEvaluations: ".O.X...X."
    },
    "X-X.O.XXO..": {
      evaluation: "X",
      moveEvaluations: ".X.X...XX"
    },
    "X-X.O.XX.XO": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.."
    },
    "X-X.O.XX.X.": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.X"
    },
    "X-X.O.XX.OO": {
      evaluation: "X",
      moveEvaluations: ".O.X..D.."
    },
    "X-X.O.XX.O.": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.X"
    },
    "X-X.O.XX..O": {
      evaluation: "X",
      moveEvaluations: ".X.X..DX."
    },
    "X-X.O.XX...": {
      evaluation: "X",
      moveEvaluations: ".X.X..XXX"
    },
    "X-X.O.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XOOO.": {
      evaluation: "X",
      moveEvaluations: ".O.O....X"
    },
    "X-X.O.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XOO..": {
      evaluation: "X",
      moveEvaluations: ".O.O...OX"
    },
    "X-X.O.XO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XO.X.": {
      evaluation: "X",
      moveEvaluations: ".X.O..O.X"
    },
    "X-X.O.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XO.O.": {
      evaluation: "X",
      moveEvaluations: ".O.O..O.X"
    },
    "X-X.O.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.XO...": {
      evaluation: "X",
      moveEvaluations: ".O.O..OOX"
    },
    "X-X.O.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X.O.X.O.O": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.O."
    },
    "X-X.O.X.O..": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.XX"
    },
    "X-X.O.X..XO": {
      evaluation: "X",
      moveEvaluations: ".X.O.XO.."
    },
    "X-X.O.X..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "X-X.O.X..OO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "X-X.O.X..O.": {
      evaluation: "X",
      moveEvaluations: ".O.X.XX.X"
    },
    "X-X.O.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X.O.X...O": {
      evaluation: "D",
      moveEvaluations: ".O.O.DOO."
    },
    "X-X.O.X....": {
      evaluation: "X",
      moveEvaluations: ".X.X.XXXX"
    },
    "X-X.O.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OX.XO": {
      evaluation: "D",
      moveEvaluations: ".O.O..D.."
    },
    "X-X.O.OX.X.": {
      evaluation: "X",
      moveEvaluations: ".O.O..X.O"
    },
    "X-X.O.OX.OO": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.."
    },
    "X-X.O.OX.O.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "X-X.O.OX..O": {
      evaluation: "D",
      moveEvaluations: ".O.O..DO."
    },
    "X-X.O.OX...": {
      evaluation: "D",
      moveEvaluations: ".O.O..DOO"
    },
    "X-X.O.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OO.X.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "X-X.O.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OO.O.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "X-X.O.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.OO...": {
      evaluation: "O",
      moveEvaluations: ".O.O..OOO"
    },
    "X-X.O.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O.O..XO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "X-X.O.O..X.": {
      evaluation: "X",
      moveEvaluations: ".O.O.OX.O"
    },
    "X-X.O.O..OO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "X-X.O.O..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "X-X.O.O...X": {
      evaluation: "X",
      moveEvaluations: ".O.O.OXO."
    },
    "X-X.O.O...O": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOO."
    },
    "X-X.O.O....": {
      evaluation: "D",
      moveEvaluations: ".O.O.ODOO"
    },
    "X-X.O..XOXO": {
      evaluation: "X",
      moveEvaluations: ".O.OX...."
    },
    "X-X.O..XOX.": {
      evaluation: "X",
      moveEvaluations: ".O.OX...O"
    },
    "X-X.O..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..XOO.": {
      evaluation: "O",
      moveEvaluations: ".O.OO...O"
    },
    "X-X.O..XO.O": {
      evaluation: "O",
      moveEvaluations: ".O.OO..O."
    },
    "X-X.O..XO..": {
      evaluation: "X",
      moveEvaluations: ".O.OX..OO"
    },
    "X-X.O..X.XO": {
      evaluation: "X",
      moveEvaluations: ".D.XX.D.."
    },
    "X-X.O..X.X.": {
      evaluation: "X",
      moveEvaluations: ".X.XX.X.X"
    },
    "X-X.O..X.OO": {
      evaluation: "D",
      moveEvaluations: ".O.OO.D.."
    },
    "X-X.O..X.O.": {
      evaluation: "X",
      moveEvaluations: ".O.XX.D.O"
    },
    "X-X.O..X..O": {
      evaluation: "X",
      moveEvaluations: ".O.XD.DD."
    },
    "X-X.O..X...": {
      evaluation: "X",
      moveEvaluations: ".D.XX.XXX"
    },
    "X-X.O..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..OOO.": {
      evaluation: "O",
      moveEvaluations: ".O.OO...O"
    },
    "X-X.O..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..OO..": {
      evaluation: "O",
      moveEvaluations: ".O.OO..OO"
    },
    "X-X.O..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..O.X.": {
      evaluation: "X",
      moveEvaluations: ".O.OO.O.X"
    },
    "X-X.O..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..O.O.": {
      evaluation: "O",
      moveEvaluations: ".O.OO.O.O"
    },
    "X-X.O..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-X.O..O...": {
      evaluation: "O",
      moveEvaluations: ".O.OO.OOO"
    },
    "X-X.O...O.X": {
      evaluation: "X",
      moveEvaluations: ".O.OXO.O."
    },
    "X-X.O...O.O": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.O."
    },
    "X-X.O...O..": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.OO"
    },
    "X-X.O....XO": {
      evaluation: "D",
      moveEvaluations: ".O.OODO.."
    },
    "X-X.O....X.": {
      evaluation: "X",
      moveEvaluations: ".X.XXXX.X"
    },
    "X-X.O....OO": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.."
    },
    "X-X.O....O.": {
      evaluation: "D",
      moveEvaluations: ".O.OOOD.O"
    },
    "X-X.O.....X": {
      evaluation: "X",
      moveEvaluations: ".X.XXXXX."
    },
    "X-X.O.....O": {
      evaluation: "O",
      moveEvaluations: ".O.OOOOO."
    },
    "X-X.O......": {
      evaluation: "X",
      moveEvaluations: ".O.XDDXDX"
    },
    "X-X...XX.XO": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.."
    },
    "X-X...XX.X.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "X-X...XX.OO": {
      evaluation: "X",
      moveEvaluations: ".OOX..X.."
    },
    "X-X...XX.O.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "X-X...XX..O": {
      evaluation: "X",
      moveEvaluations: ".XXX..XX."
    },
    "X-X...XX...": {
      evaluation: "X",
      moveEvaluations: ".XXX..XXX"
    },
    "X-X...XO.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "X-X...XO.O.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "X-X...XO..O": {
      evaluation: "X",
      moveEvaluations: ".OXO..OO."
    },
    "X-X...XO...": {
      evaluation: "X",
      moveEvaluations: ".XXX..XXX"
    },
    "X-X...X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-X...X...O": {
      evaluation: "X",
      moveEvaluations: ".XXX.XXX."
    },
    "X-X...X....": {
      evaluation: "X",
      moveEvaluations: ".XXX.XXXX"
    },
    "X-X...OX.XO": {
      evaluation: "D",
      moveEvaluations: ".DDD..D.."
    },
    "X-X...OX.X.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "X-X...OX.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "X-X...OX.O.": {
      evaluation: "D",
      moveEvaluations: ".DOO..O.O"
    },
    "X-X...OX..O": {
      evaluation: "D",
      moveEvaluations: ".DDO..DD."
    },
    "X-X...OX...": {
      evaluation: "X",
      moveEvaluations: ".DXX..XDX"
    },
    "X-X...OO.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "X-X...OO.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "X-X...OO..O": {
      evaluation: "O",
      moveEvaluations: ".OOO..OO."
    },
    "X-X...OO...": {
      evaluation: "D",
      moveEvaluations: ".OOD..OOO"
    },
    "X-X...O...X": {
      evaluation: "X",
      moveEvaluations: ".XXX.XXX."
    },
    "X-X...O...O": {
      evaluation: "D",
      moveEvaluations: ".ODO.ODO."
    },
    "X-X...O....": {
      evaluation: "D",
      moveEvaluations: ".DDD.DDDD"
    },
    "X-X....X.XO": {
      evaluation: "X",
      moveEvaluations: ".XXXX.X.."
    },
    "X-X....X.X.": {
      evaluation: "X",
      moveEvaluations: ".XXXX.X.X"
    },
    "X-X....X.OO": {
      evaluation: "X",
      moveEvaluations: ".OOOO.X.."
    },
    "X-X....X.O.": {
      evaluation: "X",
      moveEvaluations: ".XXXX.X.X"
    },
    "X-X....X..O": {
      evaluation: "X",
      moveEvaluations: ".XXXX.XD."
    },
    "X-X....X...": {
      evaluation: "X",
      moveEvaluations: ".XXXX.XXX"
    },
    "X-X....O.OO": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.."
    },
    "X-X....O.O.": {
      evaluation: "X",
      moveEvaluations: ".OXOO.X.O"
    },
    "X-X....O..O": {
      evaluation: "X",
      moveEvaluations: ".OXOO.OO."
    },
    "X-X....O...": {
      evaluation: "X",
      moveEvaluations: ".OXDX.XDD"
    },
    "X-X.......X": {
      evaluation: "X",
      moveEvaluations: ".XXXXXXX."
    },
    "X-X.......O": {
      evaluation: "X",
      moveEvaluations: ".OXODDXD."
    },
    "X-X........": {
      evaluation: "X",
      moveEvaluations: ".XXXXXXXX"
    },
    "X-OXOXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXXOOO.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "X-OXOXXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXXOO..": {
      evaluation: "X",
      moveEvaluations: ".......XD"
    },
    "X-OXOXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXXO.O.": {
      evaluation: "D",
      moveEvaluations: "......O.D"
    },
    "X-OXOXXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXXO...": {
      evaluation: "X",
      moveEvaluations: "......OXD"
    },
    "X-OXOXX.O.O": {
      evaluation: "X",
      moveEvaluations: ".....X.X."
    },
    "X-OXOXX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "X-OXOXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOXX..OO": {
      evaluation: "X",
      moveEvaluations: ".....XO.."
    },
    "X-OXOXX..O.": {
      evaluation: "X",
      moveEvaluations: ".....XD.D"
    },
    "X-OXOXX...O": {
      evaluation: "X",
      moveEvaluations: ".....XOX."
    },
    "X-OXOXX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "X-OXOXOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOX.X.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "X-OXOXOX.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "X-OXOXOX...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "X-OXOXOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOO.X.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "X-OXOXOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOO.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "X-OXOXOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXOO...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "X-OXOXO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-OXOXO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-OXOXO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOXO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "X-OXOX.XOXO": {
      evaluation: "X",
      moveEvaluations: "....X...."
    },
    "X-OXOX.XOX.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-OXOX.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.XOO.": {
      evaluation: "X",
      moveEvaluations: "....X...O"
    },
    "X-OXOX.XO.O": {
      evaluation: "X",
      moveEvaluations: "....X..O."
    },
    "X-OXOX.XO..": {
      evaluation: "X",
      moveEvaluations: "....X..OO"
    },
    "X-OXOX.X.X.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "X-OXOX.X.O.": {
      evaluation: "X",
      moveEvaluations: "....X.D.D"
    },
    "X-OXOX.X...": {
      evaluation: "X",
      moveEvaluations: "....X.DOD"
    },
    "X-OXOX.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "X-OXOX.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "X-OXOX.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.O.X.": {
      evaluation: "X",
      moveEvaluations: "....X.O.X"
    },
    "X-OXOX.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.O.O.": {
      evaluation: "D",
      moveEvaluations: "....O.O.D"
    },
    "X-OXOX.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOX.O...": {
      evaluation: "D",
      moveEvaluations: "....O.OOD"
    },
    "X-OXOX..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "X-OXOX..O..": {
      evaluation: "X",
      moveEvaluations: "....XO.OO"
    },
    "X-OXOX...XO": {
      evaluation: "X",
      moveEvaluations: "....XOO.."
    },
    "X-OXOX...X.": {
      evaluation: "X",
      moveEvaluations: "....XOX.X"
    },
    "X-OXOX...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "X-OXOX...O.": {
      evaluation: "D",
      moveEvaluations: "....DOO.D"
    },
    "X-OXOX....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "X-OXOX.....": {
      evaluation: "X",
      moveEvaluations: "....XOOOD"
    },
    "X-OXOOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "X-OXOOXO...": {
      evaluation: "X",
      moveEvaluations: "......OXO"
    },
    "X-OXOOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOX.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "X-OXOOX..O.": {
      evaluation: "D",
      moveEvaluations: ".....OD.O"
    },
    "X-OXOOX...O": {
      evaluation: "X",
      moveEvaluations: ".....OOX."
    },
    "X-OXOOX....": {
      evaluation: "X",
      moveEvaluations: ".....ODXO"
    },
    "X-OXOOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-OXOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "X-OXOOO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "X-OXOO.OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.OOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO.O.X.": {
      evaluation: "X",
      moveEvaluations: "....X.O.O"
    },
    "X-OXOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "X-OXOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "X-OXOO..OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO..OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO..OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXOO...XO": {
      evaluation: "X",
      moveEvaluations: "....XOO.."
    },
    "X-OXOO...X.": {
      evaluation: "X",
      moveEvaluations: "....XOX.O"
    },
    "X-OXOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "X-OXOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "X-OXOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "X-OXOO.....": {
      evaluation: "O",
      moveEvaluations: "....OOOOO"
    },
    "X-OXO.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXO.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "...O.O..O"
    },
    "X-OXO.X.O.O": {
      evaluation: "X",
      moveEvaluations: "...O.O.X."
    },
    "X-OXO.X.O..": {
      evaluation: "X",
      moveEvaluations: "...X.O.XO"
    },
    "X-OXO.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OXO.X..O.": {
      evaluation: "D",
      moveEvaluations: "...D.DD.D"
    },
    "X-OXO.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XDXD"
    },
    "X-OXO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO.O..X.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "X-OXO.O..O.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "X-OXO.O....": {
      evaluation: "O",
      moveEvaluations: "...O.OOOO"
    },
    "X-OXO...OXO": {
      evaluation: "X",
      moveEvaluations: "...OXO..."
    },
    "X-OXO...OX.": {
      evaluation: "X",
      moveEvaluations: "...OXO..O"
    },
    "X-OXO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OXO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "X-OXO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "X-OXO...O..": {
      evaluation: "O",
      moveEvaluations: "...OOO.OO"
    },
    "X-OXO....X.": {
      evaluation: "X",
      moveEvaluations: "...OXOX.X"
    },
    "X-OXO....O.": {
      evaluation: "O",
      moveEvaluations: "...OOOO.O"
    },
    "X-OXO......": {
      evaluation: "D",
      moveEvaluations: "...ODOOOO"
    },
    "X-OX.XXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.XXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "X-OX.XXO.O.": {
      evaluation: "D",
      moveEvaluations: "..D...D.D"
    },
    "X-OX.XXO..O": {
      evaluation: "X",
      moveEvaluations: "..X...OX."
    },
    "X-OX.XXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXD"
    },
    "X-OX.XX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "X-OX.XX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "X-OX.XOX.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XOX.X.": {
      evaluation: "X",
      moveEvaluations: "..O...O.X"
    },
    "X-OX.XOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XOX.O.": {
      evaluation: "D",
      moveEvaluations: "..O...O.D"
    },
    "X-OX.XOX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XOX...": {
      evaluation: "D",
      moveEvaluations: "..O...OOD"
    },
    "X-OX.XOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XOO.O.": {
      evaluation: "D",
      moveEvaluations: "..O...O.D"
    },
    "X-OX.XOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XOO...": {
      evaluation: "D",
      moveEvaluations: "..O...OOD"
    },
    "X-OX.XO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.XO....": {
      evaluation: "D",
      moveEvaluations: "..O..OOOD"
    },
    "X-OX.X.X.XO": {
      evaluation: "X",
      moveEvaluations: "..O.X.O.."
    },
    "X-OX.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "X-OX.X.X.OO": {
      evaluation: "X",
      moveEvaluations: "..O.X.O.."
    },
    "X-OX.X.X.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.D.X"
    },
    "X-OX.X.X..O": {
      evaluation: "X",
      moveEvaluations: "..O.X.OO."
    },
    "X-OX.X.X...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "X-OX.X.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-OX.X.O.O.": {
      evaluation: "D",
      moveEvaluations: "..O.O.O.D"
    },
    "X-OX.X.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "X-OX.X.O...": {
      evaluation: "D",
      moveEvaluations: "..D.D.ODD"
    },
    "X-OX.X....O": {
      evaluation: "X",
      moveEvaluations: "..O.XOOO."
    },
    "X-OX.X.....": {
      evaluation: "X",
      moveEvaluations: "..D.XDDDD"
    },
    "X-OX.OXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OXX.OO": {
      evaluation: "D",
      moveEvaluations: "..O...D.."
    },
    "X-OX.OXX.O.": {
      evaluation: "D",
      moveEvaluations: "..O...D.O"
    },
    "X-OX.OXX..O": {
      evaluation: "X",
      moveEvaluations: "..O...XX."
    },
    "X-OX.OXX...": {
      evaluation: "X",
      moveEvaluations: "..O...XXO"
    },
    "X-OX.OXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "X-OX.OXO.O.": {
      evaluation: "D",
      moveEvaluations: "..O...D.O"
    },
    "X-OX.OXO..O": {
      evaluation: "X",
      moveEvaluations: "..O...OX."
    },
    "X-OX.OXO...": {
      evaluation: "X",
      moveEvaluations: "..O...XXO"
    },
    "X-OX.OX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OX.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX.OX..OO": {
      evaluation: "D",
      moveEvaluations: "..O..OD.."
    },
    "X-OX.OX..O.": {
      evaluation: "D",
      moveEvaluations: "..O..OD.O"
    },
    "X-OX.OX...O": {
      evaluation: "X",
      moveEvaluations: "..O..OXX."
    },
    "X-OX.OX....": {
      evaluation: "X",
      moveEvaluations: "..O..OXXO"
    },
    "X-OX.OOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OX.OOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OX.OOX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "X-OX.OOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO..X.": {
      evaluation: "O",
      moveEvaluations: "..O..OO.O"
    },
    "X-OX.OO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO..O.": {
      evaluation: "O",
      moveEvaluations: "..O..OO.O"
    },
    "X-OX.OO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "X-OX.O.XOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.XOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.XO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.XO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.X.X.": {
      evaluation: "X",
      moveEvaluations: "..O.X.X.O"
    },
    "X-OX.O.X.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-OX.O.X.O.": {
      evaluation: "D",
      moveEvaluations: "..O.O.D.O"
    },
    "X-OX.O.X..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "X-OX.O.X...": {
      evaluation: "X",
      moveEvaluations: "..O.O.XOO"
    },
    "X-OX.O.OOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O.O.XO": {
      evaluation: "X",
      moveEvaluations: "..O.X.O.."
    },
    "X-OX.O.O.X.": {
      evaluation: "X",
      moveEvaluations: "..O.X.O.O"
    },
    "X-OX.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-OX.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "X-OX.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "X-OX.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "X-OX.O..OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O..OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX.O...XO": {
      evaluation: "X",
      moveEvaluations: "..O.XOO.."
    },
    "X-OX.O...X.": {
      evaluation: "X",
      moveEvaluations: "..O.XOX.O"
    },
    "X-OX.O...OO": {
      evaluation: "O",
      moveEvaluations: "..O.OOO.."
    },
    "X-OX.O...O.": {
      evaluation: "O",
      moveEvaluations: "..O.OOO.O"
    },
    "X-OX.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "X-OX.O.....": {
      evaluation: "O",
      moveEvaluations: "..O.OOOOO"
    },
    "X-OX..XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..XXOO.": {
      evaluation: "X",
      moveEvaluations: "..OX....O"
    },
    "X-OX..XXO.O": {
      evaluation: "X",
      moveEvaluations: "..OX...X."
    },
    "X-OX..XXO..": {
      evaluation: "X",
      moveEvaluations: "..OX...XO"
    },
    "X-OX..XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "X-OX..XX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "X-OX..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "X-OX..XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OX..XOO.O": {
      evaluation: "X",
      moveEvaluations: "..OO...X."
    },
    "X-OX..XOO..": {
      evaluation: "X",
      moveEvaluations: "..OD...XO"
    },
    "X-OX..XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..XO.OO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "X-OX..XO.O.": {
      evaluation: "D",
      moveEvaluations: "..OO..D.D"
    },
    "X-OX..XO..O": {
      evaluation: "X",
      moveEvaluations: "..XO..OX."
    },
    "X-OX..XO...": {
      evaluation: "X",
      moveEvaluations: "..XD..XXD"
    },
    "X-OX..X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "X-OX..X.O.O": {
      evaluation: "X",
      moveEvaluations: "..OO.O.X."
    },
    "X-OX..X.O..": {
      evaluation: "X",
      moveEvaluations: "..OX.O.XO"
    },
    "X-OX..X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-OX..X..OO": {
      evaluation: "D",
      moveEvaluations: "..OO.OD.."
    },
    "X-OX..X..O.": {
      evaluation: "D",
      moveEvaluations: "..OD.DD.D"
    },
    "X-OX..X...O": {
      evaluation: "X",
      moveEvaluations: "..XX.XXX."
    },
    "X-OX..X....": {
      evaluation: "X",
      moveEvaluations: "..XX.XXXX"
    },
    "X-OX..OXOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OX..OXOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OX..OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-OX..OX.X.": {
      evaluation: "X",
      moveEvaluations: "..OO..O.X"
    },
    "X-OX..OX.O.": {
      evaluation: "D",
      moveEvaluations: "..OO..O.D"
    },
    "X-OX..OX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OX...": {
      evaluation: "D",
      moveEvaluations: "..OO..OOD"
    },
    "X-OX..OOOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OX..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OX..OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-OX..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "X-OX..OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OO.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "X-OX..OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "X-OX..O.OX.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "X-OX..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..O.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "X-OX..O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "X-OX..O..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..O..X.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "X-OX..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..O..O.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "X-OX..O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX..O....": {
      evaluation: "O",
      moveEvaluations: "..OO.OOOO"
    },
    "X-OX...XOX.": {
      evaluation: "X",
      moveEvaluations: "..OOX...O"
    },
    "X-OX...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-OX...XO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "X-OX...XO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "X-OX...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "X-OX...X.O.": {
      evaluation: "D",
      moveEvaluations: "..ODD.D.D"
    },
    "X-OX...X..O": {
      evaluation: "X",
      moveEvaluations: "..OOX.OO."
    },
    "X-OX...X...": {
      evaluation: "X",
      moveEvaluations: "..XDX.XXX"
    },
    "X-OX...OOX.": {
      evaluation: "X",
      moveEvaluations: "..OOX...O"
    },
    "X-OX...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-OX...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "X-OX...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "X-OX...O.X.": {
      evaluation: "X",
      moveEvaluations: "..ODX.X.X"
    },
    "X-OX...O.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "X-OX...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "X-OX...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "X-OX...O...": {
      evaluation: "D",
      moveEvaluations: "..OOD.OOO"
    },
    "X-OX....OX.": {
      evaluation: "X",
      moveEvaluations: "..OOXO..O"
    },
    "X-OX....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OX....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "X-OX....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "X-OX....O..": {
      evaluation: "O",
      moveEvaluations: "..OOOO.OO"
    },
    "X-OX.....XO": {
      evaluation: "X",
      moveEvaluations: "..OOXOO.."
    },
    "X-OX.....X.": {
      evaluation: "X",
      moveEvaluations: "..XDXXX.X"
    },
    "X-OX.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "X-OX.....O.": {
      evaluation: "D",
      moveEvaluations: "..OOOOD.D"
    },
    "X-OX......O": {
      evaluation: "D",
      moveEvaluations: "..OODOOO."
    },
    "X-OX.......": {
      evaluation: "D",
      moveEvaluations: "..ODDODOD"
    },
    "X-OOOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOXO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOX....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOOO....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.O...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO...X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO...OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO...O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO....O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOOO.....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.X....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO.O....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO...OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO...O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO...O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO....X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO....O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OOO......": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OXX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OO.OXX.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OO.OXX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "X-OO.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "X-OO.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OO.OXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...OO."
    },
    "X-OO.OXO...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "X-OO.OX...O": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "X-OO.OX....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "X-OO.OOX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "X-OO.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OOX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "X-OO.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "X-OO.O.X.X.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "X-OO.O.X.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "X-OO.O.X...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "X-OO.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "X-OO.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "X-OO.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "X-OO.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "X-OO.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "X-OO.O.....": {
      evaluation: "O",
      moveEvaluations: "..O.OOOOO"
    },
    "X-OO..XXOO.": {
      evaluation: "X",
      moveEvaluations: "..OX....O"
    },
    "X-OO..XXO..": {
      evaluation: "X",
      moveEvaluations: "..OX...OO"
    },
    "X-OO..XX.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..O.O"
    },
    "X-OO..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..O.O"
    },
    "X-OO..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..OOO"
    },
    "X-OO..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "X-OO..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "X-OO..XOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-OO..XO.X.": {
      evaluation: "D",
      moveEvaluations: "..DO..O.O"
    },
    "X-OO..XO.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "X-OO..XO..O": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "X-OO..XO...": {
      evaluation: "D",
      moveEvaluations: "..DO..OOO"
    },
    "X-OO..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "X-OO..X.O.O": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "X-OO..X.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "X-OO..X..X.": {
      evaluation: "D",
      moveEvaluations: "..DO.OO.O"
    },
    "X-OO..X..OO": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.."
    },
    "X-OO..X..O.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "X-OO..X...O": {
      evaluation: "O",
      moveEvaluations: "..OO.OOO."
    },
    "X-OO..X....": {
      evaluation: "D",
      moveEvaluations: "..DO.OOOO"
    },
    "X-OO..OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-OO..OX.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "X-OO..OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OX...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "X-OO..OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "X-OO..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "X-OO..OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "X-OO..O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "X-OO..O..X.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "X-OO..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-OO..O....": {
      evaluation: "O",
      moveEvaluations: "..OO.OOOO"
    },
    "X-OO...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-OO...XO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "X-OO...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XOO.O.O"
    },
    "X-OO...X.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "X-OO...X...": {
      evaluation: "X",
      moveEvaluations: "..XOO.OOO"
    },
    "X-OO...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "X-OO...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "X-OO...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "X-OO...O.X.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "X-OO...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "X-OO...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "X-OO...O...": {
      evaluation: "O",
      moveEvaluations: "..OOO.OOO"
    },
    "X-OO....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "X-OO....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "X-OO....O..": {
      evaluation: "O",
      moveEvaluations: "..OOOO.OO"
    },
    "X-OO.....X.": {
      evaluation: "D",
      moveEvaluations: "..DOOOO.O"
    },
    "X-OO.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "X-OO.....O.": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.O"
    },
    "X-OO......O": {
      evaluation: "O",
      moveEvaluations: "..OOOOOO."
    },
    "X-OO.......": {
      evaluation: "O",
      moveEvaluations: "..OOOOOOO"
    },
    "X-O.O.X.O.O": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.O."
    },
    "X-O.O.X.O..": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.OO"
    },
    "X-O.O.X..X.": {
      evaluation: "X",
      moveEvaluations: ".X.O.OO.O"
    },
    "X-O.O.X..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "X-O.O.X....": {
      evaluation: "D",
      moveEvaluations: ".D.O.OOOO"
    },
    "X-O.O.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-O.O.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-O.O.O..X.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "X-O.O.O..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "X-O.O.O....": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOOO"
    },
    "X-O.O...O.O": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.O."
    },
    "X-O.O...O..": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.OO"
    },
    "X-O.O....X.": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.O"
    },
    "X-O.O....O.": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.O"
    },
    "X-O.O......": {
      evaluation: "O",
      moveEvaluations: ".O.OOOOOO"
    },
    "X-O...XX.X.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "X-O...XX.O.": {
      evaluation: "X",
      moveEvaluations: ".DXX..X.X"
    },
    "X-O...XX...": {
      evaluation: "X",
      moveEvaluations: ".XXX..XXX"
    },
    "X-O...XO.O.": {
      evaluation: "D",
      moveEvaluations: ".OOO..O.D"
    },
    "X-O...XO...": {
      evaluation: "D",
      moveEvaluations: ".DDO..ODD"
    },
    "X-O...X...O": {
      evaluation: "D",
      moveEvaluations: ".DOD.DOD."
    },
    "X-O...X....": {
      evaluation: "D",
      moveEvaluations: ".DDD.DDDD"
    },
    "X-O...OX.X.": {
      evaluation: "X",
      moveEvaluations: ".OOO..O.X"
    },
    "X-O...OX.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "X-O...OX...": {
      evaluation: "O",
      moveEvaluations: ".OOO..OOO"
    },
    "X-O...OO.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "X-O...OO...": {
      evaluation: "O",
      moveEvaluations: ".OOO..OOO"
    },
    "X-O...O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-O...O....": {
      evaluation: "O",
      moveEvaluations: ".OOO.OOOO"
    },
    "X-O....X.X.": {
      evaluation: "X",
      moveEvaluations: ".XXXX.X.X"
    },
    "X-O....X.O.": {
      evaluation: "D",
      moveEvaluations: ".OOOD.O.O"
    },
    "X-O....X...": {
      evaluation: "X",
      moveEvaluations: ".OXOD.DOO"
    },
    "X-O....O.O.": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.O"
    },
    "X-O....O...": {
      evaluation: "O",
      moveEvaluations: ".OOOO.OOO"
    },
    "X-O.......O": {
      evaluation: "O",
      moveEvaluations: ".OOOOOOO."
    },
    "X-O........": {
      evaluation: "D",
      moveEvaluations: ".OOODOOOO"
    },
    "X-.X.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X.XXO.O.": {
      evaluation: "X",
      moveEvaluations: "X.X...X.D"
    },
    "X-.X.XXO...": {
      evaluation: "X",
      moveEvaluations: "X.X...XXX"
    },
    "X-.X.XX....": {
      evaluation: "X",
      moveEvaluations: "X.X..XXXX"
    },
    "X-.X.XOX.X.": {
      evaluation: "X",
      moveEvaluations: "X.X...X.X"
    },
    "X-.X.XOX.O.": {
      evaluation: "X",
      moveEvaluations: "X.X...D.D"
    },
    "X-.X.XOX...": {
      evaluation: "X",
      moveEvaluations: "X.X...XXX"
    },
    "X-.X.XOO.O.": {
      evaluation: "X",
      moveEvaluations: "X.D...D.D"
    },
    "X-.X.XOO...": {
      evaluation: "X",
      moveEvaluations: "X.D...DOD"
    },
    "X-.X.XO....": {
      evaluation: "X",
      moveEvaluations: "X.D..DDDD"
    },
    "X-.X.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "X.X.X.X.X"
    },
    "X-.X.X.X.O.": {
      evaluation: "X",
      moveEvaluations: "X.X.X.X.X"
    },
    "X-.X.X.X...": {
      evaluation: "X",
      moveEvaluations: "X.X.X.XXX"
    },
    "X-.X.X.O.O.": {
      evaluation: "X",
      moveEvaluations: "X.D.O.D.D"
    },
    "X-.X.X.O...": {
      evaluation: "X",
      moveEvaluations: "X.X.X.XXX"
    },
    "X-.X.X.....": {
      evaluation: "X",
      moveEvaluations: "X.X.XXXXX"
    },
    "X-.X.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X.OXO.O.": {
      evaluation: "X",
      moveEvaluations: "X.X...D.D"
    },
    "X-.X.OXO...": {
      evaluation: "X",
      moveEvaluations: "X.X...XXX"
    },
    "X-.X.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X.OX..O.": {
      evaluation: "X",
      moveEvaluations: "X.X..OD.D"
    },
    "X-.X.OX....": {
      evaluation: "X",
      moveEvaluations: "X.X..XXXX"
    },
    "X-.X.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.X.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.X.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.X.OO..X.": {
      evaluation: "O",
      moveEvaluations: "O.O..OO.O"
    },
    "X-.X.OO..O.": {
      evaluation: "O",
      moveEvaluations: "O.O..OO.O"
    },
    "X-.X.OO....": {
      evaluation: "O",
      moveEvaluations: "O.O..OOOO"
    },
    "X-.X.O.O.X.": {
      evaluation: "X",
      moveEvaluations: "O.O.X.O.O"
    },
    "X-.X.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "O.O.O.O.O"
    },
    "X-.X.O.O...": {
      evaluation: "X",
      moveEvaluations: "O.O.X.OOO"
    },
    "X-.X.O...X.": {
      evaluation: "X",
      moveEvaluations: "X.X.XXX.X"
    },
    "X-.X.O...O.": {
      evaluation: "D",
      moveEvaluations: "O.O.OOD.D"
    },
    "X-.X.O.....": {
      evaluation: "X",
      moveEvaluations: "X.O.XDDOD"
    },
    "X-.X..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "X-.X..X..O.": {
      evaluation: "X",
      moveEvaluations: "X.XX.XX.X"
    },
    "X-.X..X....": {
      evaluation: "X",
      moveEvaluations: "X.XX.XXXX"
    },
    "X-.X..O..X.": {
      evaluation: "X",
      moveEvaluations: "X.XD.DX.X"
    },
    "X-.X..O..O.": {
      evaluation: "D",
      moveEvaluations: "D.DO.OD.D"
    },
    "X-.X..O....": {
      evaluation: "D",
      moveEvaluations: "D.DD.DDOD"
    },
    "X-.X.....X.": {
      evaluation: "X",
      moveEvaluations: "X.XXXXX.X"
    },
    "X-.X.....O.": {
      evaluation: "D",
      moveEvaluations: "D.DDDDD.D"
    },
    "X-.X.......": {
      evaluation: "X",
      moveEvaluations: "X.XXXXXXX"
    },
    "X-.O.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "O.O...O.O"
    },
    "X-.O.OXO...": {
      evaluation: "D",
      moveEvaluations: "D.D...OOO"
    },
    "X-.O.OX....": {
      evaluation: "D",
      moveEvaluations: "D.D..ODOO"
    },
    "X-.O.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.O.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.O.OO....": {
      evaluation: "O",
      moveEvaluations: "O.O..OOOO"
    },
    "X-.O.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "O.O.O.O.O"
    },
    "X-.O.O.O...": {
      evaluation: "O",
      moveEvaluations: "O.O.O.OOO"
    },
    "X-.O.O.....": {
      evaluation: "O",
      moveEvaluations: "O.O.OOOOO"
    },
    "X-.O..X..O.": {
      evaluation: "X",
      moveEvaluations: "X.XX.XX.X"
    },
    "X-.O..X....": {
      evaluation: "X",
      moveEvaluations: "X.XX.XXDX"
    },
    "X-.O..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "X-.O..O....": {
      evaluation: "O",
      moveEvaluations: "O.OO.OOOO"
    },
    "X-.O.....O.": {
      evaluation: "O",
      moveEvaluations: "O.OOOOO.O"
    },
    "X-.O.......": {
      evaluation: "D",
      moveEvaluations: "D.DODOODO"
    },
    "X-....X....": {
      evaluation: "X",
      moveEvaluations: "XXXX.XXXX"
    },
    "X-....O....": {
      evaluation: "D",
      moveEvaluations: "DODO.ODOD"
    },
    "X-.........": {
      evaluation: "D",
      moveEvaluations: "DDDDDDDDD"
    },
    "O-XXXXXXXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXXO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXX....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXOO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXXO....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.XO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.X.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.X.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.X...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.OO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.O...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX..O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX...O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX....X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX....O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXX.....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOXO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOX....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOOO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOO.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOOO...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO...O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXOO....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.OO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.O.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.O.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.O...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO..O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO...O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO....X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO....O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXXO.....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.X....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O.O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O..O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX.O....": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...OOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...OO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...O.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX...O..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX....X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX....O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXX......": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXXOOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XXOXXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXXOO..": {
      evaluation: "O",
      moveEvaluations: ".......XO"
    },
    "O-XXOXXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXXO.O.": {
      evaluation: "O",
      moveEvaluations: "......X.O"
    },
    "O-XXOXXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXXO...": {
      evaluation: "O",
      moveEvaluations: "......XXO"
    },
    "O-XXOXX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XXOXX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "O-XXOXX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOXX..O.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "O-XXOXX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOXX...O": {
      evaluation: "O",
      moveEvaluations: ".....OXX."
    },
    "O-XXOXX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "O-XXOXOXOXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOX.XX": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOX.XO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOX.X.": {
      evaluation: "O",
      moveEvaluations: "......O.X"
    },
    "O-XXOXOX.OX": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOX.OO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOX.O.": {
      evaluation: "O",
      moveEvaluations: "......O.X"
    },
    "O-XXOXOX..X": {
      evaluation: "O",
      moveEvaluations: "......OX."
    },
    "O-XXOXOX..O": {
      evaluation: "O",
      moveEvaluations: "......OX."
    },
    "O-XXOXOX...": {
      evaluation: "O",
      moveEvaluations: "......OXX"
    },
    "O-XXOXOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOO.XX": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOO.X.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-XXOXOO.OX": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOXOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOO.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-XXOXOO..X": {
      evaluation: "O",
      moveEvaluations: "......OX."
    },
    "O-XXOXOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXOO...": {
      evaluation: "O",
      moveEvaluations: "......OXO"
    },
    "O-XXOXO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOXO..XX": {
      evaluation: "O",
      moveEvaluations: ".....XO.."
    },
    "O-XXOXO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOXO..X.": {
      evaluation: "O",
      moveEvaluations: ".....XO.X"
    },
    "O-XXOXO..OX": {
      evaluation: "O",
      moveEvaluations: ".....XO.."
    },
    "O-XXOXO..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOXO..O.": {
      evaluation: "O",
      moveEvaluations: ".....XO.X"
    },
    "O-XXOXO...X": {
      evaluation: "O",
      moveEvaluations: ".....XOX."
    },
    "O-XXOXO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOX."
    },
    "O-XXOXO....": {
      evaluation: "O",
      moveEvaluations: ".....XOXX"
    },
    "O-XXOX.XOXX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOX.XOXO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOX.XOX.": {
      evaluation: "O",
      moveEvaluations: "....O...X"
    },
    "O-XXOX.XOOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOX.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOX.XO.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XXOX.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "O-XXOX.XO..": {
      evaluation: "O",
      moveEvaluations: "....O..XX"
    },
    "O-XXOX.X.XX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "O-XXOX.X.XO": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "O-XXOX.X.X.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "O-XXOX.X.OX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "O-XXOX.X.OO": {
      evaluation: "O",
      moveEvaluations: "....X.O.."
    },
    "O-XXOX.X.O.": {
      evaluation: "X",
      moveEvaluations: "....X.X.X"
    },
    "O-XXOX.X..X": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "O-XXOX.X..O": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "O-XXOX.X...": {
      evaluation: "X",
      moveEvaluations: "....X.XXX"
    },
    "O-XXOX.OOOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOX.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOX.OO.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XXOX.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XXOX.O.XX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "O-XXOX.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.O.X.": {
      evaluation: "O",
      moveEvaluations: "....X.X.O"
    },
    "O-XXOX.O.OX": {
      evaluation: "X",
      moveEvaluations: "....X.X.."
    },
    "O-XXOX.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.O.O.": {
      evaluation: "O",
      moveEvaluations: "....X.O.O"
    },
    "O-XXOX.O..X": {
      evaluation: "X",
      moveEvaluations: "....X.XX."
    },
    "O-XXOX.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOX.O...": {
      evaluation: "O",
      moveEvaluations: "....X.OXO"
    },
    "O-XXOX..O.X": {
      evaluation: "O",
      moveEvaluations: "....OX.X."
    },
    "O-XXOX..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "O-XXOX..O..": {
      evaluation: "O",
      moveEvaluations: "....OO.OO"
    },
    "O-XXOX...XX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "O-XXOX...XO": {
      evaluation: "O",
      moveEvaluations: "....XOX.."
    },
    "O-XXOX...X.": {
      evaluation: "X",
      moveEvaluations: "....XXX.X"
    },
    "O-XXOX...OX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "O-XXOX...OO": {
      evaluation: "O",
      moveEvaluations: "....XOO.."
    },
    "O-XXOX...O.": {
      evaluation: "O",
      moveEvaluations: "....XXO.X"
    },
    "O-XXOX....X": {
      evaluation: "X",
      moveEvaluations: "....XXXX."
    },
    "O-XXOX....O": {
      evaluation: "O",
      moveEvaluations: "....XOOX."
    },
    "O-XXOX.....": {
      evaluation: "X",
      moveEvaluations: "....XXXXX"
    },
    "O-XXOOXXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXXOO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XXOOXXXO.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "O-XXOOXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXX.O": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "O-XXOOXXX..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "O-XXOOXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXXOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XXOOXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXXO.O": {
      evaluation: "O",
      moveEvaluations: ".......O."
    },
    "O-XXOOXXO..": {
      evaluation: "X",
      moveEvaluations: ".......XX"
    },
    "O-XXOOXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXX.OO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOOXX.O.": {
      evaluation: "D",
      moveEvaluations: "......X.D"
    },
    "O-XXOOXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXX..O": {
      evaluation: "D",
      moveEvaluations: "......XD."
    },
    "O-XXOOXX...": {
      evaluation: "X",
      moveEvaluations: "......XXX"
    },
    "O-XXOOXOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXOXO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XXOOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXOX..": {
      evaluation: "O",
      moveEvaluations: ".......XO"
    },
    "O-XXOOXOOXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XXOOXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXOO..": {
      evaluation: "O",
      moveEvaluations: ".......XO"
    },
    "O-XXOOXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "......X.O"
    },
    "O-XXOOXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOXO...": {
      evaluation: "O",
      moveEvaluations: "......XXO"
    },
    "O-XXOOX.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.XOO": {
      evaluation: "O",
      moveEvaluations: ".....O..."
    },
    "O-XXOOX.XO.": {
      evaluation: "D",
      moveEvaluations: ".....X..D"
    },
    "O-XXOOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.X.O": {
      evaluation: "O",
      moveEvaluations: ".....O.D."
    },
    "O-XXOOX.X..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "O-XXOOX.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOX.OO.": {
      evaluation: "O",
      moveEvaluations: ".....X..O"
    },
    "O-XXOOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XXOOX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "O-XXOOX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOOX..O.": {
      evaluation: "O",
      moveEvaluations: ".....XX.O"
    },
    "O-XXOOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXOOX...O": {
      evaluation: "O",
      moveEvaluations: ".....OXO."
    },
    "O-XXOOX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "O-XXOOOXXXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XXOOOXXX.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "O-XXOOOXXOX": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XXOOOXXOO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XXOOOXXO.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "O-XXOOOXX.X": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "O-XXOOOXX.O": {
      evaluation: "D",
      moveEvaluations: ".......D."
    },
    "O-XXOOOXX..": {
      evaluation: "D",
      moveEvaluations: ".......DD"
    },
    "O-XXOOOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOX.XO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOOOX.X.": {
      evaluation: "O",
      moveEvaluations: "......O.D"
    },
    "O-XXOOOX.OX": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOOOX.OO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XXOOOX.O.": {
      evaluation: "O",
      moveEvaluations: "......O.D"
    },
    "O-XXOOOX..X": {
      evaluation: "O",
      moveEvaluations: "......OD."
    },
    "O-XXOOOX..O": {
      evaluation: "O",
      moveEvaluations: "......OD."
    },
    "O-XXOOOX...": {
      evaluation: "O",
      moveEvaluations: "......ODD"
    },
    "O-XXOOOOXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOXX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.XX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.XXO": {
      evaluation: "O",
      moveEvaluations: ".....O..."
    },
    "O-XXOOO.XX.": {
      evaluation: "O",
      moveEvaluations: ".....O..D"
    },
    "O-XXOOO.XOX": {
      evaluation: "O",
      moveEvaluations: ".....O..."
    },
    "O-XXOOO.XOO": {
      evaluation: "O",
      moveEvaluations: ".....O..."
    },
    "O-XXOOO.XO.": {
      evaluation: "O",
      moveEvaluations: ".....O..D"
    },
    "O-XXOOO.X.X": {
      evaluation: "O",
      moveEvaluations: ".....O.D."
    },
    "O-XXOOO.X.O": {
      evaluation: "O",
      moveEvaluations: ".....O.D."
    },
    "O-XXOOO.X..": {
      evaluation: "O",
      moveEvaluations: ".....O.DD"
    },
    "O-XXOOO.OXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOOO..XX": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOOO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-XXOOO..OX": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOOO..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XXOOO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-XXOOO...X": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XXOOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XXOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "O-XXOO.XXXO": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "O-XXOO.XXX.": {
      evaluation: "X",
      moveEvaluations: "....X...X"
    },
    "O-XXOO.XXOX": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "O-XXOO.XXOO": {
      evaluation: "D",
      moveEvaluations: "....D...."
    },
    "O-XXOO.XXO.": {
      evaluation: "D",
      moveEvaluations: "....D...D"
    },
    "O-XXOO.XX.X": {
      evaluation: "X",
      moveEvaluations: "....X..X."
    },
    "O-XXOO.XX.O": {
      evaluation: "D",
      moveEvaluations: "....D..D."
    },
    "O-XXOO.XX..": {
      evaluation: "D",
      moveEvaluations: "....D..DD"
    },
    "O-XXOO.XOXO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOO.XOX.": {
      evaluation: "O",
      moveEvaluations: "....O...X"
    },
    "O-XXOO.XOOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOO.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOO.XO.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XXOO.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "O-XXOO.XO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XXOO.X.XO": {
      evaluation: "D",
      moveEvaluations: "....D.X.."
    },
    "O-XXOO.X.X.": {
      evaluation: "D",
      moveEvaluations: "....D.X.X"
    },
    "O-XXOO.X.OX": {
      evaluation: "D",
      moveEvaluations: "....D.X.."
    },
    "O-XXOO.X.OO": {
      evaluation: "O",
      moveEvaluations: "....D.O.."
    },
    "O-XXOO.X.O.": {
      evaluation: "O",
      moveEvaluations: "....D.O.D"
    },
    "O-XXOO.X..X": {
      evaluation: "D",
      moveEvaluations: "....D.XX."
    },
    "O-XXOO.X..O": {
      evaluation: "O",
      moveEvaluations: "....D.OD."
    },
    "O-XXOO.X...": {
      evaluation: "D",
      moveEvaluations: "....D.XDD"
    },
    "O-XXOO.OXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OXX.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOO.OXOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOO.OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OXO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOO.OX.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XXOO.OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OX..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XXOO.OOXX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOO.OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OOX.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOO.OOOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XXOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XXOO.OO.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XXOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XXOO.O.XX": {
      evaluation: "O",
      moveEvaluations: "....O.X.."
    },
    "O-XXOO.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.X.O"
    },
    "O-XXOO.O.OX": {
      evaluation: "O",
      moveEvaluations: "....O.X.."
    },
    "O-XXOO.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-XXOO.O..X": {
      evaluation: "O",
      moveEvaluations: "....O.XX."
    },
    "O-XXOO.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "O-XXOO..XXO": {
      evaluation: "O",
      moveEvaluations: "....DO..."
    },
    "O-XXOO..XX.": {
      evaluation: "X",
      moveEvaluations: "....XX..X"
    },
    "O-XXOO..XOX": {
      evaluation: "D",
      moveEvaluations: "....DX..."
    },
    "O-XXOO..XOO": {
      evaluation: "O",
      moveEvaluations: "....DO..."
    },
    "O-XXOO..XO.": {
      evaluation: "O",
      moveEvaluations: "....DO..D"
    },
    "O-XXOO..X.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "O-XXOO..X.O": {
      evaluation: "O",
      moveEvaluations: "....DO.D."
    },
    "O-XXOO..X..": {
      evaluation: "O",
      moveEvaluations: "....DO.DD"
    },
    "O-XXOO..OXX": {
      evaluation: "O",
      moveEvaluations: "....OX..."
    },
    "O-XXOO..OXO": {
      evaluation: "O",
      moveEvaluations: "....OO..."
    },
    "O-XXOO..OX.": {
      evaluation: "O",
      moveEvaluations: "....OX..X"
    },
    "O-XXOO..OOX": {
      evaluation: "O",
      moveEvaluations: "....OX..."
    },
    "O-XXOO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXOO..OO.": {
      evaluation: "O",
      moveEvaluations: "....OO..O"
    },
    "O-XXOO..O.X": {
      evaluation: "O",
      moveEvaluations: "....OX.X."
    },
    "O-XXOO..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "O-XXOO..O..": {
      evaluation: "O",
      moveEvaluations: "....OO.OO"
    },
    "O-XXOO...XX": {
      evaluation: "X",
      moveEvaluations: "....XXX.."
    },
    "O-XXOO...XO": {
      evaluation: "O",
      moveEvaluations: "....OOX.."
    },
    "O-XXOO...X.": {
      evaluation: "O",
      moveEvaluations: "....OXX.X"
    },
    "O-XXOO...OX": {
      evaluation: "O",
      moveEvaluations: "....OXX.."
    },
    "O-XXOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-XXOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "O-XXOO....X": {
      evaluation: "O",
      moveEvaluations: "....OXXX."
    },
    "O-XXOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "O-XXOO.....": {
      evaluation: "O",
      moveEvaluations: "....OOXOO"
    },
    "O-XXO.XXXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXXOO": {
      evaluation: "D",
      moveEvaluations: "...D....."
    },
    "O-XXO.XXXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "O-XXO.XXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXX.O": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "O-XXO.XXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "O-XXO.XXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XXOO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XXO.XXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XXO.O": {
      evaluation: "O",
      moveEvaluations: "...X...O."
    },
    "O-XXO.XXO..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "O-XXO.XX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XX.OO": {
      evaluation: "O",
      moveEvaluations: "...D..O.."
    },
    "O-XXO.XX.O.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "O-XXO.XX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XX..O": {
      evaluation: "X",
      moveEvaluations: "...X..XX."
    },
    "O-XXO.XX...": {
      evaluation: "X",
      moveEvaluations: "...X..XXX"
    },
    "O-XXO.XOXXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XOXO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XXO.XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XOX..": {
      evaluation: "O",
      moveEvaluations: "...X...XO"
    },
    "O-XXO.XOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XOOO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XXO.XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XOO..": {
      evaluation: "O",
      moveEvaluations: "...X...XO"
    },
    "O-XXO.XO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XO.O.": {
      evaluation: "O",
      moveEvaluations: "...X..X.O"
    },
    "O-XXO.XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.XO...": {
      evaluation: "O",
      moveEvaluations: "...X..XXO"
    },
    "O-XXO.X.XXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.XOO": {
      evaluation: "O",
      moveEvaluations: "...D.O..."
    },
    "O-XXO.X.XO.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "O-XXO.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.X.O": {
      evaluation: "O",
      moveEvaluations: "...X.O.X."
    },
    "O-XXO.X.X..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "O-XXO.X.OXX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "...X.X..O"
    },
    "O-XXO.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "...X.O.O."
    },
    "O-XXO.X.O..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "O-XXO.X..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XXO.X..O.": {
      evaluation: "O",
      moveEvaluations: "...X.XX.O"
    },
    "O-XXO.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XXO.X...O": {
      evaluation: "O",
      moveEvaluations: "...X.OXO."
    },
    "O-XXO.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XXXX"
    },
    "O-XXO.OXXXO": {
      evaluation: "D",
      moveEvaluations: "...D....."
    },
    "O-XXO.OXXX.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "O-XXO.OXXOO": {
      evaluation: "D",
      moveEvaluations: "...D....."
    },
    "O-XXO.OXXO.": {
      evaluation: "D",
      moveEvaluations: "...D....X"
    },
    "O-XXO.OXX.X": {
      evaluation: "X",
      moveEvaluations: "...X...X."
    },
    "O-XXO.OXX.O": {
      evaluation: "D",
      moveEvaluations: "...D...X."
    },
    "O-XXO.OXX..": {
      evaluation: "D",
      moveEvaluations: "...D...XX"
    },
    "O-XXO.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OX.XO": {
      evaluation: "O",
      moveEvaluations: "...D..O.."
    },
    "O-XXO.OX.X.": {
      evaluation: "O",
      moveEvaluations: "...D..O.D"
    },
    "O-XXO.OX.OO": {
      evaluation: "O",
      moveEvaluations: "...D..O.."
    },
    "O-XXO.OX.O.": {
      evaluation: "O",
      moveEvaluations: "...D..O.D"
    },
    "O-XXO.OX..X": {
      evaluation: "O",
      moveEvaluations: "...D..OD."
    },
    "O-XXO.OX..O": {
      evaluation: "O",
      moveEvaluations: "...D..OD."
    },
    "O-XXO.OX...": {
      evaluation: "O",
      moveEvaluations: "...D..ODD"
    },
    "O-XXO.OOXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOXX.": {
      evaluation: "O",
      moveEvaluations: "...O....O"
    },
    "O-XXO.OOXOX": {
      evaluation: "O",
      moveEvaluations: "...O....."
    },
    "O-XXO.OOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOXO.": {
      evaluation: "O",
      moveEvaluations: "...O....O"
    },
    "O-XXO.OOX.X": {
      evaluation: "O",
      moveEvaluations: "...O...X."
    },
    "O-XXO.OOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOX..": {
      evaluation: "O",
      moveEvaluations: "...O...XO"
    },
    "O-XXO.OOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OO.XX": {
      evaluation: "O",
      moveEvaluations: "...O..O.."
    },
    "O-XXO.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OO.X.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "O-XXO.OO.OX": {
      evaluation: "O",
      moveEvaluations: "...O..O.."
    },
    "O-XXO.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OO.O.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "O-XXO.OO..X": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "O-XXO.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.OO...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "O-XXO.O.XXO": {
      evaluation: "O",
      moveEvaluations: "...D.O..."
    },
    "O-XXO.O.XX.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "O-XXO.O.XOX": {
      evaluation: "D",
      moveEvaluations: "...D.X..."
    },
    "O-XXO.O.XOO": {
      evaluation: "O",
      moveEvaluations: "...D.O..."
    },
    "O-XXO.O.XO.": {
      evaluation: "D",
      moveEvaluations: "...D.X..X"
    },
    "O-XXO.O.X.X": {
      evaluation: "X",
      moveEvaluations: "...X.X.X."
    },
    "O-XXO.O.X.O": {
      evaluation: "O",
      moveEvaluations: "...D.O.X."
    },
    "O-XXO.O.X..": {
      evaluation: "D",
      moveEvaluations: "...D.X.XX"
    },
    "O-XXO.O.OXX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO.O..XX": {
      evaluation: "O",
      moveEvaluations: "...X.XO.."
    },
    "O-XXO.O..XO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XXO.O..X.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "O-XXO.O..OX": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XXO.O..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XXO.O..O.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "O-XXO.O...X": {
      evaluation: "O",
      moveEvaluations: "...O.OOD."
    },
    "O-XXO.O...O": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "O-XXO.O....": {
      evaluation: "O",
      moveEvaluations: "...O.OODO"
    },
    "O-XXO..XXXO": {
      evaluation: "X",
      moveEvaluations: "...XX...."
    },
    "O-XXO..XXX.": {
      evaluation: "X",
      moveEvaluations: "...XX...X"
    },
    "O-XXO..XXOO": {
      evaluation: "D",
      moveEvaluations: "...DX...."
    },
    "O-XXO..XXO.": {
      evaluation: "D",
      moveEvaluations: "...DX...X"
    },
    "O-XXO..XX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "O-XXO..XX.O": {
      evaluation: "D",
      moveEvaluations: "...DX..X."
    },
    "O-XXO..XX..": {
      evaluation: "X",
      moveEvaluations: "...XX..XX"
    },
    "O-XXO..XOXO": {
      evaluation: "O",
      moveEvaluations: "...XO...."
    },
    "O-XXO..XOX.": {
      evaluation: "O",
      moveEvaluations: "...XO...X"
    },
    "O-XXO..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..XOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XXO..XO.X": {
      evaluation: "O",
      moveEvaluations: "...XO..X."
    },
    "O-XXO..XO.O": {
      evaluation: "O",
      moveEvaluations: "...OO..O."
    },
    "O-XXO..XO..": {
      evaluation: "O",
      moveEvaluations: "...XO..OO"
    },
    "O-XXO..X.XO": {
      evaluation: "D",
      moveEvaluations: "...XD.X.."
    },
    "O-XXO..X.X.": {
      evaluation: "X",
      moveEvaluations: "...XX.X.X"
    },
    "O-XXO..X.OO": {
      evaluation: "O",
      moveEvaluations: "...DD.O.."
    },
    "O-XXO..X.O.": {
      evaluation: "O",
      moveEvaluations: "...DD.O.D"
    },
    "O-XXO..X..X": {
      evaluation: "X",
      moveEvaluations: "...XX.XX."
    },
    "O-XXO..X..O": {
      evaluation: "O",
      moveEvaluations: "...DD.OD."
    },
    "O-XXO..X...": {
      evaluation: "D",
      moveEvaluations: "...XD.XXX"
    },
    "O-XXO..OXXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OXX.": {
      evaluation: "O",
      moveEvaluations: "...XX...O"
    },
    "O-XXO..OXOX": {
      evaluation: "X",
      moveEvaluations: "...XX...."
    },
    "O-XXO..OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OXO.": {
      evaluation: "O",
      moveEvaluations: "...OX...O"
    },
    "O-XXO..OX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "O-XXO..OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OX..": {
      evaluation: "O",
      moveEvaluations: "...OX..XO"
    },
    "O-XXO..OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OOX.": {
      evaluation: "O",
      moveEvaluations: "...XO...O"
    },
    "O-XXO..OOOX": {
      evaluation: "O",
      moveEvaluations: "...XO...."
    },
    "O-XXO..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XXO..OO.X": {
      evaluation: "O",
      moveEvaluations: "...XO..X."
    },
    "O-XXO..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..OO..": {
      evaluation: "O",
      moveEvaluations: "...OO..OO"
    },
    "O-XXO..O.XX": {
      evaluation: "X",
      moveEvaluations: "...XX.X.."
    },
    "O-XXO..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..O.X.": {
      evaluation: "O",
      moveEvaluations: "...XO.X.O"
    },
    "O-XXO..O.OX": {
      evaluation: "O",
      moveEvaluations: "...XO.X.."
    },
    "O-XXO..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..O.O.": {
      evaluation: "O",
      moveEvaluations: "...OO.O.O"
    },
    "O-XXO..O..X": {
      evaluation: "O",
      moveEvaluations: "...XO.XX."
    },
    "O-XXO..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO..O...": {
      evaluation: "O",
      moveEvaluations: "...OO.OOO"
    },
    "O-XXO...XXO": {
      evaluation: "O",
      moveEvaluations: "...XXO..."
    },
    "O-XXO...XX.": {
      evaluation: "X",
      moveEvaluations: "...XXX..X"
    },
    "O-XXO...XOX": {
      evaluation: "X",
      moveEvaluations: "...XXX..."
    },
    "O-XXO...XOO": {
      evaluation: "O",
      moveEvaluations: "...DXO..."
    },
    "O-XXO...XO.": {
      evaluation: "D",
      moveEvaluations: "...DXX..X"
    },
    "O-XXO...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "O-XXO...X.O": {
      evaluation: "O",
      moveEvaluations: "...DXO.X."
    },
    "O-XXO...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "O-XXO...OXX": {
      evaluation: "O",
      moveEvaluations: "...XOX..."
    },
    "O-XXO...OXO": {
      evaluation: "O",
      moveEvaluations: "...XOO..."
    },
    "O-XXO...OX.": {
      evaluation: "O",
      moveEvaluations: "...XOX..X"
    },
    "O-XXO...OOX": {
      evaluation: "O",
      moveEvaluations: "...XOX..."
    },
    "O-XXO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XXO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "O-XXO...O.X": {
      evaluation: "O",
      moveEvaluations: "...XOX.X."
    },
    "O-XXO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "O-XXO...O..": {
      evaluation: "O",
      moveEvaluations: "...XOO.OO"
    },
    "O-XXO....XX": {
      evaluation: "X",
      moveEvaluations: "...XXXX.."
    },
    "O-XXO....XO": {
      evaluation: "O",
      moveEvaluations: "...XOOX.."
    },
    "O-XXO....X.": {
      evaluation: "X",
      moveEvaluations: "...XXXX.X"
    },
    "O-XXO....OX": {
      evaluation: "D",
      moveEvaluations: "...XDXX.."
    },
    "O-XXO....OO": {
      evaluation: "O",
      moveEvaluations: "...OOOO.."
    },
    "O-XXO....O.": {
      evaluation: "O",
      moveEvaluations: "...ODOO.O"
    },
    "O-XXO.....X": {
      evaluation: "X",
      moveEvaluations: "...XXXXX."
    },
    "O-XXO.....O": {
      evaluation: "O",
      moveEvaluations: "...OOOOO."
    },
    "O-XXO......": {
      evaluation: "O",
      moveEvaluations: "...XDOXDO"
    },
    "O-XX.XXX.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-XX.XXO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.XXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...XX."
    },
    "O-XX.XXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "O-XX.XX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.XX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "O-XX.XX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "O-XX.XOX.XX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "O-XX.XOX.XO": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "O-XX.XOX.X.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.XOX.OX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "O-XX.XOX.OO": {
      evaluation: "O",
      moveEvaluations: "..X...O.."
    },
    "O-XX.XOX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.XOX..X": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "O-XX.XOX..O": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "O-XX.XOX...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "O-XX.XOO.OX": {
      evaluation: "X",
      moveEvaluations: "..X...X.."
    },
    "O-XX.XOO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-XX.XOO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.XOO..X": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "O-XX.XOO..O": {
      evaluation: "O",
      moveEvaluations: "..O...XX."
    },
    "O-XX.XOO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "O-XX.XO...X": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "O-XX.XO...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "O-XX.XO....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "O-XX.X.X.XX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.X.X.XO": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "O-XX.X.X.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.X.X.OO": {
      evaluation: "O",
      moveEvaluations: "..X.X.O.."
    },
    "O-XX.X.X.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "O-XX.X.X..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "O-XX.X.X..O": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "O-XX.X.X...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "O-XX.X.O.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.X.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.X.O.."
    },
    "O-XX.X.O.O.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "O-XX.X.O..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "O-XX.X.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.X.XX."
    },
    "O-XX.X.O...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "O-XX.X....X": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "O-XX.X....O": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "O-XX.X.....": {
      evaluation: "X",
      moveEvaluations: "..X.XXXXX"
    },
    "O-XX.OXXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXXOO": {
      evaluation: "D",
      moveEvaluations: "..D......"
    },
    "O-XX.OXXXO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "O-XX.OXXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXX.O": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "O-XX.OXXX..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "O-XX.OXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OXXOO.": {
      evaluation: "O",
      moveEvaluations: "..X.....O"
    },
    "O-XX.OXXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXXO.O": {
      evaluation: "O",
      moveEvaluations: "..X....O."
    },
    "O-XX.OXXO..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "O-XX.OXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXX.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXX.OO": {
      evaluation: "O",
      moveEvaluations: "..D...O.."
    },
    "O-XX.OXX.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.OXX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXX..O": {
      evaluation: "X",
      moveEvaluations: "..X...XX."
    },
    "O-XX.OXX...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "O-XX.OXOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOXOO": {
      evaluation: "O",
      moveEvaluations: "..O......"
    },
    "O-XX.OXOXO.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "O-XX.OXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOX.O": {
      evaluation: "O",
      moveEvaluations: "..O....X."
    },
    "O-XX.OXOX..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "O-XX.OXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OXOOO.": {
      evaluation: "O",
      moveEvaluations: "..X.....O"
    },
    "O-XX.OXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXOO.O": {
      evaluation: "O",
      moveEvaluations: "..O....O."
    },
    "O-XX.OXOO..": {
      evaluation: "X",
      moveEvaluations: "..X....XX"
    },
    "O-XX.OXO.XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-XX.OXO.O.": {
      evaluation: "X",
      moveEvaluations: "..X...X.X"
    },
    "O-XX.OXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...XX."
    },
    "O-XX.OXO...": {
      evaluation: "X",
      moveEvaluations: "..X...XXX"
    },
    "O-XX.OX.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.XOO": {
      evaluation: "D",
      moveEvaluations: "..D..X..."
    },
    "O-XX.OX.XO.": {
      evaluation: "X",
      moveEvaluations: "..X..X..X"
    },
    "O-XX.OX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.X.O": {
      evaluation: "X",
      moveEvaluations: "..X..X.X."
    },
    "O-XX.OX.X..": {
      evaluation: "X",
      moveEvaluations: "..X..X.XX"
    },
    "O-XX.OX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OX.OO.": {
      evaluation: "O",
      moveEvaluations: "..X..X..O"
    },
    "O-XX.OX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX.O.O": {
      evaluation: "O",
      moveEvaluations: "..X..X.O."
    },
    "O-XX.OX.O..": {
      evaluation: "X",
      moveEvaluations: "..X..X.XX"
    },
    "O-XX.OX..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX..OO": {
      evaluation: "O",
      moveEvaluations: "..O..XO.."
    },
    "O-XX.OX..O.": {
      evaluation: "X",
      moveEvaluations: "..X..XX.X"
    },
    "O-XX.OX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX.OX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "O-XX.OX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "O-XX.OOXXX.": {
      evaluation: "X",
      moveEvaluations: "..X.....X"
    },
    "O-XX.OOXXOX": {
      evaluation: "D",
      moveEvaluations: "..D......"
    },
    "O-XX.OOXXOO": {
      evaluation: "D",
      moveEvaluations: "..D......"
    },
    "O-XX.OOXXO.": {
      evaluation: "D",
      moveEvaluations: "..D.....X"
    },
    "O-XX.OOXX.X": {
      evaluation: "X",
      moveEvaluations: "..X....X."
    },
    "O-XX.OOXX.O": {
      evaluation: "D",
      moveEvaluations: "..D....X."
    },
    "O-XX.OOXX..": {
      evaluation: "D",
      moveEvaluations: "..D....XX"
    },
    "O-XX.OOXOXO": {
      evaluation: "O",
      moveEvaluations: "..O......"
    },
    "O-XX.OOXOX.": {
      evaluation: "O",
      moveEvaluations: "..O.....X"
    },
    "O-XX.OOXOOX": {
      evaluation: "O",
      moveEvaluations: "..O......"
    },
    "O-XX.OOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOXOO.": {
      evaluation: "O",
      moveEvaluations: "..O.....O"
    },
    "O-XX.OOXO.X": {
      evaluation: "O",
      moveEvaluations: "..O....X."
    },
    "O-XX.OOXO.O": {
      evaluation: "O",
      moveEvaluations: "..O....O."
    },
    "O-XX.OOXO..": {
      evaluation: "O",
      moveEvaluations: "..O....XX"
    },
    "O-XX.OOX.XO": {
      evaluation: "D",
      moveEvaluations: "..D...X.."
    },
    "O-XX.OOX.X.": {
      evaluation: "D",
      moveEvaluations: "..D...X.X"
    },
    "O-XX.OOX.OX": {
      evaluation: "D",
      moveEvaluations: "..D...X.."
    },
    "O-XX.OOX.OO": {
      evaluation: "O",
      moveEvaluations: "..D...O.."
    },
    "O-XX.OOX.O.": {
      evaluation: "D",
      moveEvaluations: "..D...X.X"
    },
    "O-XX.OOX..X": {
      evaluation: "D",
      moveEvaluations: "..D...XX."
    },
    "O-XX.OOX..O": {
      evaluation: "D",
      moveEvaluations: "..D...XX."
    },
    "O-XX.OOX...": {
      evaluation: "D",
      moveEvaluations: "..D...XXX"
    },
    "O-XX.OOOXX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.XX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OO.XX.": {
      evaluation: "O",
      moveEvaluations: "..X..O..X"
    },
    "O-XX.OO.XOX": {
      evaluation: "O",
      moveEvaluations: "..D..O..."
    },
    "O-XX.OO.XOO": {
      evaluation: "O",
      moveEvaluations: "..D..O..."
    },
    "O-XX.OO.XO.": {
      evaluation: "O",
      moveEvaluations: "..D..O..X"
    },
    "O-XX.OO.X.X": {
      evaluation: "O",
      moveEvaluations: "..X..O.X."
    },
    "O-XX.OO.X.O": {
      evaluation: "O",
      moveEvaluations: "..D..O.X."
    },
    "O-XX.OO.X..": {
      evaluation: "O",
      moveEvaluations: "..D..O.XX"
    },
    "O-XX.OO.OXO": {
      evaluation: "O",
      moveEvaluations: "..O..O..."
    },
    "O-XX.OO.OX.": {
      evaluation: "O",
      moveEvaluations: "..O..O..X"
    },
    "O-XX.OO.OOX": {
      evaluation: "O",
      moveEvaluations: "..O..O..."
    },
    "O-XX.OO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.OO.OO.": {
      evaluation: "O",
      moveEvaluations: "..O..O..O"
    },
    "O-XX.OO.O.X": {
      evaluation: "O",
      moveEvaluations: "..O..O.X."
    },
    "O-XX.OO.O.O": {
      evaluation: "O",
      moveEvaluations: "..O..O.O."
    },
    "O-XX.OO.O..": {
      evaluation: "O",
      moveEvaluations: "..O..O.XX"
    },
    "O-XX.OO..XX": {
      evaluation: "O",
      moveEvaluations: "..X..OX.."
    },
    "O-XX.OO..XO": {
      evaluation: "O",
      moveEvaluations: "..O..OX.."
    },
    "O-XX.OO..X.": {
      evaluation: "O",
      moveEvaluations: "..O..OX.X"
    },
    "O-XX.OO..OX": {
      evaluation: "O",
      moveEvaluations: "..O..OX.."
    },
    "O-XX.OO..OO": {
      evaluation: "O",
      moveEvaluations: "..O..OO.."
    },
    "O-XX.OO..O.": {
      evaluation: "O",
      moveEvaluations: "..O..OX.X"
    },
    "O-XX.OO...X": {
      evaluation: "O",
      moveEvaluations: "..O..OXX."
    },
    "O-XX.OO...O": {
      evaluation: "O",
      moveEvaluations: "..O..OXX."
    },
    "O-XX.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OXXX"
    },
    "O-XX.O.XXX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "O-XX.O.XXOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "O-XX.O.XXOO": {
      evaluation: "D",
      moveEvaluations: "..D.X...."
    },
    "O-XX.O.XXO.": {
      evaluation: "D",
      moveEvaluations: "..D.X...X"
    },
    "O-XX.O.XX.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "O-XX.O.XX.O": {
      evaluation: "D",
      moveEvaluations: "..D.X..X."
    },
    "O-XX.O.XX..": {
      evaluation: "X",
      moveEvaluations: "..X.X..XX"
    },
    "O-XX.O.XOXO": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "O-XX.O.XOX.": {
      evaluation: "X",
      moveEvaluations: "..X.X...X"
    },
    "O-XX.O.XOOX": {
      evaluation: "X",
      moveEvaluations: "..X.X...."
    },
    "O-XX.O.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.O.XOO.": {
      evaluation: "O",
      moveEvaluations: "..O.X...O"
    },
    "O-XX.O.XO.X": {
      evaluation: "X",
      moveEvaluations: "..X.X..X."
    },
    "O-XX.O.XO.O": {
      evaluation: "O",
      moveEvaluations: "..O.X..O."
    },
    "O-XX.O.XO..": {
      evaluation: "X",
      moveEvaluations: "..X.X..XX"
    },
    "O-XX.O.X.XO": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.O.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "O-XX.O.X.OX": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.."
    },
    "O-XX.O.X.OO": {
      evaluation: "O",
      moveEvaluations: "..D.X.O.."
    },
    "O-XX.O.X.O.": {
      evaluation: "D",
      moveEvaluations: "..D.X.X.X"
    },
    "O-XX.O.X..X": {
      evaluation: "X",
      moveEvaluations: "..X.X.XX."
    },
    "O-XX.O.X..O": {
      evaluation: "D",
      moveEvaluations: "..D.X.XX."
    },
    "O-XX.O.X...": {
      evaluation: "X",
      moveEvaluations: "..X.X.XXX"
    },
    "O-XX.O.OXX.": {
      evaluation: "O",
      moveEvaluations: "..X.O...X"
    },
    "O-XX.O.OXOX": {
      evaluation: "O",
      moveEvaluations: "..X.O...."
    },
    "O-XX.O.OXOO": {
      evaluation: "O",
      moveEvaluations: "..O.O...."
    },
    "O-XX.O.OXO.": {
      evaluation: "O",
      moveEvaluations: "..O.O...X"
    },
    "O-XX.O.OX.X": {
      evaluation: "O",
      moveEvaluations: "..X.O..X."
    },
    "O-XX.O.OX.O": {
      evaluation: "O",
      moveEvaluations: "..O.O..X."
    },
    "O-XX.O.OX..": {
      evaluation: "O",
      moveEvaluations: "..O.O..XX"
    },
    "O-XX.O.OOXO": {
      evaluation: "O",
      moveEvaluations: "..O.O...."
    },
    "O-XX.O.OOX.": {
      evaluation: "O",
      moveEvaluations: "..X.O...X"
    },
    "O-XX.O.OOOX": {
      evaluation: "O",
      moveEvaluations: "..X.O...."
    },
    "O-XX.O.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.O.OOO.": {
      evaluation: "O",
      moveEvaluations: "..O.O...O"
    },
    "O-XX.O.OO.X": {
      evaluation: "O",
      moveEvaluations: "..X.O..X."
    },
    "O-XX.O.OO.O": {
      evaluation: "O",
      moveEvaluations: "..O.O..O."
    },
    "O-XX.O.OO..": {
      evaluation: "O",
      moveEvaluations: "..O.O..XX"
    },
    "O-XX.O.O.XX": {
      evaluation: "O",
      moveEvaluations: "..X.O.X.."
    },
    "O-XX.O.O.XO": {
      evaluation: "O",
      moveEvaluations: "..O.O.X.."
    },
    "O-XX.O.O.X.": {
      evaluation: "O",
      moveEvaluations: "..X.O.X.X"
    },
    "O-XX.O.O.OX": {
      evaluation: "O",
      moveEvaluations: "..X.O.X.."
    },
    "O-XX.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-XX.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.X.X"
    },
    "O-XX.O.O..X": {
      evaluation: "O",
      moveEvaluations: "..X.O.XX."
    },
    "O-XX.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.XX."
    },
    "O-XX.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.XXX"
    },
    "O-XX.O..XX.": {
      evaluation: "X",
      moveEvaluations: "..X.XX..X"
    },
    "O-XX.O..XOX": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "O-XX.O..XOO": {
      evaluation: "D",
      moveEvaluations: "..D.XX..."
    },
    "O-XX.O..XO.": {
      evaluation: "D",
      moveEvaluations: "..D.XX..X"
    },
    "O-XX.O..X.X": {
      evaluation: "X",
      moveEvaluations: "..X.XX.X."
    },
    "O-XX.O..X.O": {
      evaluation: "D",
      moveEvaluations: "..D.XX.X."
    },
    "O-XX.O..X..": {
      evaluation: "X",
      moveEvaluations: "..X.XX.XX"
    },
    "O-XX.O..OXO": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "O-XX.O..OX.": {
      evaluation: "X",
      moveEvaluations: "..X.XX..X"
    },
    "O-XX.O..OOX": {
      evaluation: "X",
      moveEvaluations: "..X.XX..."
    },
    "O-XX.O..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX.O..OO.": {
      evaluation: "O",
      moveEvaluations: "..O.XX..O"
    },
    "O-XX.O..O.X": {
      evaluation: "X",
      moveEvaluations: "..X.XX.X."
    },
    "O-XX.O..O.O": {
      evaluation: "O",
      moveEvaluations: "..O.XX.O."
    },
    "O-XX.O..O..": {
      evaluation: "X",
      moveEvaluations: "..X.XX.XX"
    },
    "O-XX.O...XX": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "O-XX.O...XO": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "O-XX.O...X.": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.X"
    },
    "O-XX.O...OX": {
      evaluation: "X",
      moveEvaluations: "..X.XXX.."
    },
    "O-XX.O...OO": {
      evaluation: "O",
      moveEvaluations: "..O.XXO.."
    },
    "O-XX.O...O.": {
      evaluation: "O",
      moveEvaluations: "..O.XXX.X"
    },
    "O-XX.O....X": {
      evaluation: "X",
      moveEvaluations: "..X.XXXX."
    },
    "O-XX.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.XXXX."
    },
    "O-XX.O.....": {
      evaluation: "X",
      moveEvaluations: "..X.XXXXX"
    },
    "O-XX..XXXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XXXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "O-XX..XXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XX..XXX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "O-XX..XXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XX..XXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..XXOO.": {
      evaluation: "O",
      moveEvaluations: "..XX....O"
    },
    "O-XX..XXO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XXO.O": {
      evaluation: "O",
      moveEvaluations: "..XX...O."
    },
    "O-XX..XXO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XX..XX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XX.OO": {
      evaluation: "O",
      moveEvaluations: "..XX..O.."
    },
    "O-XX..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "O-XX..XX..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "O-XX..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "O-XX..XOXX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOXOO": {
      evaluation: "O",
      moveEvaluations: "..OX....."
    },
    "O-XX..XOXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XX..XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOX.O": {
      evaluation: "O",
      moveEvaluations: "..OX...X."
    },
    "O-XX..XOX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XX..XOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..XX....O"
    },
    "O-XX..XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OX...O."
    },
    "O-XX..XOO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XX..XO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XO.OO": {
      evaluation: "O",
      moveEvaluations: "..OX..O.."
    },
    "O-XX..XO.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "O-XX..XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..XO..O": {
      evaluation: "O",
      moveEvaluations: "..OX..XX."
    },
    "O-XX..XO...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "O-XX..X.XX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.XOO": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "O-XX..X.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "O-XX..X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "O-XX..X.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "O-XX..X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..XX.X..O"
    },
    "O-XX..X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X.O.O": {
      evaluation: "O",
      moveEvaluations: "..XX.X.O."
    },
    "O-XX..X.O..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "O-XX..X..XX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X..OO": {
      evaluation: "O",
      moveEvaluations: "..OX.XO.."
    },
    "O-XX..X..O.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "O-XX..X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XX..X...O": {
      evaluation: "X",
      moveEvaluations: "..XX.XXX."
    },
    "O-XX..X....": {
      evaluation: "X",
      moveEvaluations: "..XX.XXXX"
    },
    "O-XX..OXXX.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XX..OXXOO": {
      evaluation: "X",
      moveEvaluations: "..XX....."
    },
    "O-XX..OXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XX..OXX.X": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "O-XX..OXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "O-XX..OXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XX..OXOXO": {
      evaluation: "O",
      moveEvaluations: "..OX....."
    },
    "O-XX..OXOX.": {
      evaluation: "O",
      moveEvaluations: "..OX....X"
    },
    "O-XX..OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..OXOO.": {
      evaluation: "O",
      moveEvaluations: "..OX....O"
    },
    "O-XX..OXO.X": {
      evaluation: "O",
      moveEvaluations: "..OX...X."
    },
    "O-XX..OXO.O": {
      evaluation: "O",
      moveEvaluations: "..OX...O."
    },
    "O-XX..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OX...XX"
    },
    "O-XX..OX.XO": {
      evaluation: "D",
      moveEvaluations: "..DX..X.."
    },
    "O-XX..OX.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "O-XX..OX.OO": {
      evaluation: "O",
      moveEvaluations: "..DX..O.."
    },
    "O-XX..OX.O.": {
      evaluation: "D",
      moveEvaluations: "..DX..X.X"
    },
    "O-XX..OX..X": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "O-XX..OX..O": {
      evaluation: "D",
      moveEvaluations: "..DX..XX."
    },
    "O-XX..OX...": {
      evaluation: "D",
      moveEvaluations: "..DX..XXX"
    },
    "O-XX..OOXX.": {
      evaluation: "O",
      moveEvaluations: "..XO....X"
    },
    "O-XX..OOXOX": {
      evaluation: "O",
      moveEvaluations: "..XO....."
    },
    "O-XX..OOXOO": {
      evaluation: "O",
      moveEvaluations: "..OO....."
    },
    "O-XX..OOXO.": {
      evaluation: "O",
      moveEvaluations: "..XO....X"
    },
    "O-XX..OOX.X": {
      evaluation: "O",
      moveEvaluations: "..XO...X."
    },
    "O-XX..OOX.O": {
      evaluation: "O",
      moveEvaluations: "..OO...X."
    },
    "O-XX..OOX..": {
      evaluation: "O",
      moveEvaluations: "..XO...XX"
    },
    "O-XX..OOOXO": {
      evaluation: "O",
      moveEvaluations: "..OO....."
    },
    "O-XX..OOOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....X"
    },
    "O-XX..OOOOX": {
      evaluation: "O",
      moveEvaluations: "..OO....."
    },
    "O-XX..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..OOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-XX..OOO.X": {
      evaluation: "O",
      moveEvaluations: "..OO...X."
    },
    "O-XX..OOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XX..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...XX"
    },
    "O-XX..OO.XO": {
      evaluation: "O",
      moveEvaluations: "..OO..X.."
    },
    "O-XX..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..X.X"
    },
    "O-XX..OO.OX": {
      evaluation: "O",
      moveEvaluations: "..OO..X.."
    },
    "O-XX..OO.OO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "O-XX..OO.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..X.X"
    },
    "O-XX..OO..X": {
      evaluation: "O",
      moveEvaluations: "..OO..XX."
    },
    "O-XX..OO..O": {
      evaluation: "O",
      moveEvaluations: "..OO..XX."
    },
    "O-XX..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..XXX"
    },
    "O-XX..O.XX.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "O-XX..O.XOX": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "O-XX..O.XOO": {
      evaluation: "X",
      moveEvaluations: "..XX.X..."
    },
    "O-XX..O.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "O-XX..O.X.X": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "O-XX..O.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "O-XX..O.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "O-XX..O.OXO": {
      evaluation: "O",
      moveEvaluations: "..OX.X..."
    },
    "O-XX..O.OX.": {
      evaluation: "O",
      moveEvaluations: "..OX.X..X"
    },
    "O-XX..O.OOX": {
      evaluation: "O",
      moveEvaluations: "..OX.X..."
    },
    "O-XX..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX..O.OO.": {
      evaluation: "O",
      moveEvaluations: "..OX.X..O"
    },
    "O-XX..O.O.X": {
      evaluation: "O",
      moveEvaluations: "..OX.X.X."
    },
    "O-XX..O.O.O": {
      evaluation: "O",
      moveEvaluations: "..OX.X.O."
    },
    "O-XX..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OX.X.XX"
    },
    "O-XX..O..XX": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.."
    },
    "O-XX..O..XO": {
      evaluation: "O",
      moveEvaluations: "..OX.XX.."
    },
    "O-XX..O..X.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "O-XX..O..OX": {
      evaluation: "D",
      moveEvaluations: "..DX.XX.."
    },
    "O-XX..O..OO": {
      evaluation: "O",
      moveEvaluations: "..OX.XO.."
    },
    "O-XX..O..O.": {
      evaluation: "D",
      moveEvaluations: "..DX.XX.X"
    },
    "O-XX..O...X": {
      evaluation: "X",
      moveEvaluations: "..XX.XXX."
    },
    "O-XX..O...O": {
      evaluation: "O",
      moveEvaluations: "..OX.XXX."
    },
    "O-XX..O....": {
      evaluation: "D",
      moveEvaluations: "..DX.XXXX"
    },
    "O-XX...XXX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...XXOO": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "O-XX...XXO.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...XX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XX...XX.O": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XX...XX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "O-XX...XOXO": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "O-XX...XOX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OXX...O"
    },
    "O-XX...XO.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XX...XO.O": {
      evaluation: "O",
      moveEvaluations: "..OXX..O."
    },
    "O-XX...XO..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "O-XX...X.XO": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.."
    },
    "O-XX...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "O-XX...X.OO": {
      evaluation: "O",
      moveEvaluations: "..DXX.O.."
    },
    "O-XX...X.O.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "O-XX...X..X": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "O-XX...X..O": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "O-XX...X...": {
      evaluation: "X",
      moveEvaluations: "..XXX.XXX"
    },
    "O-XX...OXX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...OXOX": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "O-XX...OXOO": {
      evaluation: "O",
      moveEvaluations: "..OXX...."
    },
    "O-XX...OXO.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...OX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XX...OX.O": {
      evaluation: "O",
      moveEvaluations: "..OXX..X."
    },
    "O-XX...OX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "O-XX...OOXO": {
      evaluation: "O",
      moveEvaluations: "..OXX...."
    },
    "O-XX...OOX.": {
      evaluation: "X",
      moveEvaluations: "..XXX...X"
    },
    "O-XX...OOOX": {
      evaluation: "X",
      moveEvaluations: "..XXX...."
    },
    "O-XX...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OXX...O"
    },
    "O-XX...OO.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XX...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OXX..O."
    },
    "O-XX...OO..": {
      evaluation: "O",
      moveEvaluations: "..OXX..XX"
    },
    "O-XX...O.XO": {
      evaluation: "O",
      moveEvaluations: "..OXX.X.."
    },
    "O-XX...O.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "O-XX...O.OX": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.."
    },
    "O-XX...O.OO": {
      evaluation: "O",
      moveEvaluations: "..OXX.O.."
    },
    "O-XX...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OXX.X.X"
    },
    "O-XX...O..X": {
      evaluation: "X",
      moveEvaluations: "..XXX.XX."
    },
    "O-XX...O..O": {
      evaluation: "O",
      moveEvaluations: "..OXX.XX."
    },
    "O-XX...O...": {
      evaluation: "O",
      moveEvaluations: "..OXX.XXX"
    },
    "O-XX....XX.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "O-XX....XOX": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "O-XX....XOO": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "O-XX....XO.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "O-XX....X.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "O-XX....X.O": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "O-XX....X..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "O-XX....OXO": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "O-XX....OX.": {
      evaluation: "X",
      moveEvaluations: "..XXXX..X"
    },
    "O-XX....OOX": {
      evaluation: "X",
      moveEvaluations: "..XXXX..."
    },
    "O-XX....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XX....OO.": {
      evaluation: "O",
      moveEvaluations: "..OXXX..O"
    },
    "O-XX....O.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "O-XX....O.O": {
      evaluation: "O",
      moveEvaluations: "..OXXX.O."
    },
    "O-XX....O..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "O-XX.....XX": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "O-XX.....XO": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "O-XX.....X.": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.X"
    },
    "O-XX.....OX": {
      evaluation: "X",
      moveEvaluations: "..XXXXX.."
    },
    "O-XX.....OO": {
      evaluation: "O",
      moveEvaluations: "..OXXXO.."
    },
    "O-XX.....O.": {
      evaluation: "D",
      moveEvaluations: "..DXXXX.X"
    },
    "O-XX......X": {
      evaluation: "X",
      moveEvaluations: "..XXXXXX."
    },
    "O-XX......O": {
      evaluation: "O",
      moveEvaluations: "..OXXXXX."
    },
    "O-XX.......": {
      evaluation: "X",
      moveEvaluations: "..XXXXXXX"
    },
    "O-XOXOXOXOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOXOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOXO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOX.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOX..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOXOOXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XOXOXOOX.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "O-XOXOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XOXOXOO.O": {
      evaluation: "O",
      moveEvaluations: ".......O."
    },
    "O-XOXOXOO..": {
      evaluation: "D",
      moveEvaluations: ".......XD"
    },
    "O-XOXOXO.X.": {
      evaluation: "X",
      moveEvaluations: "......X.X"
    },
    "O-XOXOXO.O.": {
      evaluation: "X",
      moveEvaluations: "......X.X"
    },
    "O-XOXOXO...": {
      evaluation: "X",
      moveEvaluations: "......XXX"
    },
    "O-XOXOX.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX.OXO": {
      evaluation: "D",
      moveEvaluations: ".....D..."
    },
    "O-XOXOX.OX.": {
      evaluation: "D",
      moveEvaluations: ".....X..D"
    },
    "O-XOXOX.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOX.OO.": {
      evaluation: "O",
      moveEvaluations: ".....X..O"
    },
    "O-XOXOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....D.O."
    },
    "O-XOXOX.O..": {
      evaluation: "D",
      moveEvaluations: ".....X.XD"
    },
    "O-XOXOX..XO": {
      evaluation: "D",
      moveEvaluations: ".....XD.."
    },
    "O-XOXOX..X.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "O-XOXOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....XO.."
    },
    "O-XOXOX..O.": {
      evaluation: "X",
      moveEvaluations: ".....XX.X"
    },
    "O-XOXOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOXOX...O": {
      evaluation: "D",
      moveEvaluations: ".....XDX."
    },
    "O-XOXOX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "O-XOXOOOXOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOX.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOX..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO.X.X": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XOXOO.X.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XOXOO.X..": {
      evaluation: "O",
      moveEvaluations: ".....O.OO"
    },
    "O-XOXOO.OXO": {
      evaluation: "O",
      moveEvaluations: ".....O..."
    },
    "O-XOXOO.OX.": {
      evaluation: "O",
      moveEvaluations: ".....O..D"
    },
    "O-XOXOO.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO.O.X": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XOXOO.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XOXOO.O..": {
      evaluation: "O",
      moveEvaluations: ".....O.OO"
    },
    "O-XOXOO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OD.."
    },
    "O-XOXOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OD.D"
    },
    "O-XOXOO..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXOO...X": {
      evaluation: "O",
      moveEvaluations: ".....OXO."
    },
    "O-XOXOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XOXOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "O-XOXO.OXOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XOXO.OXOO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XOXO.OXO.": {
      evaluation: "O",
      moveEvaluations: "....O...X"
    },
    "O-XOXO.OX.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XOXO.OX.O": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XOXO.OX..": {
      evaluation: "O",
      moveEvaluations: "....O..XX"
    },
    "O-XOXO.OOXO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XOXO.OOX.": {
      evaluation: "O",
      moveEvaluations: "....O...D"
    },
    "O-XOXO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XOXO.OO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "O-XOXO.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XOXO.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.D.D"
    },
    "O-XOXO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-XOXO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.DXD"
    },
    "O-XOXO..X.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "O-XOXO..X.O": {
      evaluation: "O",
      moveEvaluations: "....OX.X."
    },
    "O-XOXO..X..": {
      evaluation: "O",
      moveEvaluations: "....OX.XX"
    },
    "O-XOXO..OXO": {
      evaluation: "D",
      moveEvaluations: "....DD..."
    },
    "O-XOXO..OX.": {
      evaluation: "D",
      moveEvaluations: "....DD..D"
    },
    "O-XOXO..OOX": {
      evaluation: "O",
      moveEvaluations: "....OX..."
    },
    "O-XOXO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOXO..OO.": {
      evaluation: "O",
      moveEvaluations: "....OO..O"
    },
    "O-XOXO..O.X": {
      evaluation: "X",
      moveEvaluations: "....XX.X."
    },
    "O-XOXO..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "O-XOXO..O..": {
      evaluation: "O",
      moveEvaluations: "....OD.OD"
    },
    "O-XOXO...XO": {
      evaluation: "D",
      moveEvaluations: "....DDD.."
    },
    "O-XOXO...X.": {
      evaluation: "D",
      moveEvaluations: "....DXX.D"
    },
    "O-XOXO...OX": {
      evaluation: "O",
      moveEvaluations: "....OXX.."
    },
    "O-XOXO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-XOXO...O.": {
      evaluation: "O",
      moveEvaluations: "....OXO.O"
    },
    "O-XOXO....X": {
      evaluation: "X",
      moveEvaluations: "....XXXX."
    },
    "O-XOXO....O": {
      evaluation: "O",
      moveEvaluations: "....ODDO."
    },
    "O-XOXO.....": {
      evaluation: "O",
      moveEvaluations: "....OXXXD"
    },
    "O-XOX.X.XOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.XOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.XO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOX.X.OXO": {
      evaluation: "D",
      moveEvaluations: "...D.D..."
    },
    "O-XOX.X.OX.": {
      evaluation: "D",
      moveEvaluations: "...X.X..D"
    },
    "O-XOX.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.X.OO.": {
      evaluation: "O",
      moveEvaluations: "...X.X..O"
    },
    "O-XOX.X.O.O": {
      evaluation: "O",
      moveEvaluations: "...D.D.O."
    },
    "O-XOX.X.O..": {
      evaluation: "D",
      moveEvaluations: "...X.X.XD"
    },
    "O-XOX.X..X.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "O-XOX.X..O.": {
      evaluation: "X",
      moveEvaluations: "...X.XX.X"
    },
    "O-XOX.X....": {
      evaluation: "X",
      moveEvaluations: "...X.XXXX"
    },
    "O-XOX.O.XOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O.XOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O.X.X": {
      evaluation: "O",
      moveEvaluations: "...X.X.O."
    },
    "O-XOX.O.X.O": {
      evaluation: "O",
      moveEvaluations: "...O.X.O."
    },
    "O-XOX.O.X..": {
      evaluation: "O",
      moveEvaluations: "...O.X.OX"
    },
    "O-XOX.O.OXO": {
      evaluation: "D",
      moveEvaluations: "...D.D..."
    },
    "O-XOX.O.OX.": {
      evaluation: "D",
      moveEvaluations: "...D.D..D"
    },
    "O-XOX.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O.O.O": {
      evaluation: "O",
      moveEvaluations: "...O.O.O."
    },
    "O-XOX.O.O..": {
      evaluation: "O",
      moveEvaluations: "...O.O.OD"
    },
    "O-XOX.O..X.": {
      evaluation: "D",
      moveEvaluations: "...D.DD.D"
    },
    "O-XOX.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX.O....": {
      evaluation: "O",
      moveEvaluations: "...O.ODOD"
    },
    "O-XOX...XOX": {
      evaluation: "O",
      moveEvaluations: "...XOX..."
    },
    "O-XOX...XOO": {
      evaluation: "O",
      moveEvaluations: "...XOX..."
    },
    "O-XOX...XO.": {
      evaluation: "O",
      moveEvaluations: "...XOX..X"
    },
    "O-XOX...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "O-XOX...X.O": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "O-XOX...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "O-XOX...OXO": {
      evaluation: "D",
      moveEvaluations: "...DDD..."
    },
    "O-XOX...OX.": {
      evaluation: "D",
      moveEvaluations: "...XDD..D"
    },
    "O-XOX...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOX...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "O-XOX...O.O": {
      evaluation: "O",
      moveEvaluations: "...DDD.O."
    },
    "O-XOX...O..": {
      evaluation: "O",
      moveEvaluations: "...XDD.OD"
    },
    "O-XOX....X.": {
      evaluation: "X",
      moveEvaluations: "...XXXX.X"
    },
    "O-XOX....O.": {
      evaluation: "O",
      moveEvaluations: "...XOXO.O"
    },
    "O-XOX......": {
      evaluation: "D",
      moveEvaluations: "...XDXXXX"
    },
    "O-XOOOXXOXO": {
      evaluation: "D",
      moveEvaluations: "........."
    },
    "O-XOOOXXOX.": {
      evaluation: "D",
      moveEvaluations: "........D"
    },
    "O-XOOOXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXXOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XOOOXXO.O": {
      evaluation: "O",
      moveEvaluations: ".......O."
    },
    "O-XOOOXXO..": {
      evaluation: "D",
      moveEvaluations: ".......XD"
    },
    "O-XOOOXX.XO": {
      evaluation: "D",
      moveEvaluations: "......D.."
    },
    "O-XOOOXX.X.": {
      evaluation: "D",
      moveEvaluations: "......X.D"
    },
    "O-XOOOXX.OO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XOOOXX.O.": {
      evaluation: "D",
      moveEvaluations: "......X.D"
    },
    "O-XOOOXX..O": {
      evaluation: "D",
      moveEvaluations: "......DD."
    },
    "O-XOOOXX...": {
      evaluation: "D",
      moveEvaluations: "......XXD"
    },
    "O-XOOOXOOOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-XOOOXOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXOO..": {
      evaluation: "O",
      moveEvaluations: ".......XO"
    },
    "O-XOOOXO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXO.X.": {
      evaluation: "O",
      moveEvaluations: "......X.O"
    },
    "O-XOOOXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "......X.O"
    },
    "O-XOOOXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOXO...": {
      evaluation: "O",
      moveEvaluations: "......XXO"
    },
    "O-XOOOX.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-XOOOX.O..": {
      evaluation: "O",
      moveEvaluations: ".....X.XO"
    },
    "O-XOOOX..XO": {
      evaluation: "O",
      moveEvaluations: ".....OD.."
    },
    "O-XOOOX..X.": {
      evaluation: "D",
      moveEvaluations: ".....XX.D"
    },
    "O-XOOOX..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XOOOX..O.": {
      evaluation: "O",
      moveEvaluations: ".....XX.O"
    },
    "O-XOOOX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOOOX...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XOOOX....": {
      evaluation: "D",
      moveEvaluations: ".....XXXD"
    },
    "O-XOOOOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOX.XO": {
      evaluation: "O",
      moveEvaluations: "......O.."
    },
    "O-XOOOOX.X.": {
      evaluation: "O",
      moveEvaluations: "......O.D"
    },
    "O-XOOOOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOX..O": {
      evaluation: "O",
      moveEvaluations: "......OO."
    },
    "O-XOOOOX...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "O-XOOOOOOOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO..XO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-XOOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-XOOOO..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOOO...X": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XOOOO...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-XOOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "O-XOOO.XOXO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XOOO.XOX.": {
      evaluation: "O",
      moveEvaluations: "....O...D"
    },
    "O-XOOO.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XOOO.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "O-XOOO.XO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XOOO.X.XO": {
      evaluation: "D",
      moveEvaluations: "....D.D.."
    },
    "O-XOOO.X.X.": {
      evaluation: "D",
      moveEvaluations: "....D.D.D"
    },
    "O-XOOO.X.OO": {
      evaluation: "O",
      moveEvaluations: "....O.O.."
    },
    "O-XOOO.X.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-XOOO.X..O": {
      evaluation: "O",
      moveEvaluations: "....O.OO."
    },
    "O-XOOO.X...": {
      evaluation: "O",
      moveEvaluations: "....O.DDD"
    },
    "O-XOOO.OOOX": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-XOOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-XOOO.OO.X": {
      evaluation: "O",
      moveEvaluations: "....O..X."
    },
    "O-XOOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-XOOO.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-XOOO.O.OX": {
      evaluation: "O",
      moveEvaluations: "....O.X.."
    },
    "O-XOOO.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-XOOO.O..X": {
      evaluation: "O",
      moveEvaluations: "....O.XX."
    },
    "O-XOOO.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "O-XOOO..O.X": {
      evaluation: "O",
      moveEvaluations: "....OX.X."
    },
    "O-XOOO..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "O-XOOO..O..": {
      evaluation: "O",
      moveEvaluations: "....OO.OO"
    },
    "O-XOOO...XO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-XOOO...X.": {
      evaluation: "O",
      moveEvaluations: "....OOD.D"
    },
    "O-XOOO...OX": {
      evaluation: "O",
      moveEvaluations: "....OXX.."
    },
    "O-XOOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-XOOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "O-XOOO....X": {
      evaluation: "O",
      moveEvaluations: "....OXXX."
    },
    "O-XOOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "O-XOOO.....": {
      evaluation: "O",
      moveEvaluations: "....OOOOO"
    },
    "O-XOO.XXXOO": {
      evaluation: "D",
      moveEvaluations: "...D....."
    },
    "O-XOO.XXXO.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "O-XOO.XXX.O": {
      evaluation: "D",
      moveEvaluations: "...D...X."
    },
    "O-XOO.XXX..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "O-XOO.XXOXO": {
      evaluation: "D",
      moveEvaluations: "...D....."
    },
    "O-XOO.XXOX.": {
      evaluation: "X",
      moveEvaluations: "...X....X"
    },
    "O-XOO.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XXOO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XOO.XXO.O": {
      evaluation: "O",
      moveEvaluations: "...D...O."
    },
    "O-XOO.XXO..": {
      evaluation: "X",
      moveEvaluations: "...X...XX"
    },
    "O-XOO.XX.XO": {
      evaluation: "D",
      moveEvaluations: "...D..X.."
    },
    "O-XOO.XX.X.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "O-XOO.XX.OO": {
      evaluation: "O",
      moveEvaluations: "...D..O.."
    },
    "O-XOO.XX.O.": {
      evaluation: "X",
      moveEvaluations: "...X..X.X"
    },
    "O-XOO.XX..O": {
      evaluation: "D",
      moveEvaluations: "...D..XX."
    },
    "O-XOO.XX...": {
      evaluation: "X",
      moveEvaluations: "...X..XXX"
    },
    "O-XOO.XOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XOXO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XOO.XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.XOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XOX..": {
      evaluation: "O",
      moveEvaluations: "...X...XO"
    },
    "O-XOO.XOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XOOX.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XOO.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XOOO.": {
      evaluation: "O",
      moveEvaluations: "...X....O"
    },
    "O-XOO.XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XOO..": {
      evaluation: "O",
      moveEvaluations: "...X...XO"
    },
    "O-XOO.XO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XO.X.": {
      evaluation: "O",
      moveEvaluations: "...X..X.O"
    },
    "O-XOO.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XO.O.": {
      evaluation: "O",
      moveEvaluations: "...X..X.O"
    },
    "O-XOO.XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.XO...": {
      evaluation: "O",
      moveEvaluations: "...X..XXO"
    },
    "O-XOO.X.XOO": {
      evaluation: "O",
      moveEvaluations: "...D.O..."
    },
    "O-XOO.X.XO.": {
      evaluation: "X",
      moveEvaluations: "...X.X..X"
    },
    "O-XOO.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.X.X.O": {
      evaluation: "O",
      moveEvaluations: "...D.O.X."
    },
    "O-XOO.X.X..": {
      evaluation: "X",
      moveEvaluations: "...X.X.XX"
    },
    "O-XOO.X.OXO": {
      evaluation: "O",
      moveEvaluations: "...D.O..."
    },
    "O-XOO.X.OX.": {
      evaluation: "D",
      moveEvaluations: "...X.X..D"
    },
    "O-XOO.X.OOX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "...X.X..O"
    },
    "O-XOO.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "...O.O.O."
    },
    "O-XOO.X.O..": {
      evaluation: "O",
      moveEvaluations: "...X.X.XO"
    },
    "O-XOO.X..XO": {
      evaluation: "O",
      moveEvaluations: "...D.OD.."
    },
    "O-XOO.X..X.": {
      evaluation: "D",
      moveEvaluations: "...X.XX.D"
    },
    "O-XOO.X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.X..OO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XOO.X..O.": {
      evaluation: "O",
      moveEvaluations: "...X.XX.O"
    },
    "O-XOO.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XOO.X...O": {
      evaluation: "O",
      moveEvaluations: "...D.OOO."
    },
    "O-XOO.X....": {
      evaluation: "D",
      moveEvaluations: "...X.XXXD"
    },
    "O-XOO.OXXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXX.O": {
      evaluation: "O",
      moveEvaluations: "...D...O."
    },
    "O-XOO.OXX..": {
      evaluation: "O",
      moveEvaluations: "...D...OX"
    },
    "O-XOO.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OX.XO": {
      evaluation: "O",
      moveEvaluations: "...D..O.."
    },
    "O-XOO.OX.X.": {
      evaluation: "O",
      moveEvaluations: "...D..O.D"
    },
    "O-XOO.OX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OX..O": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "O-XOO.OX...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "O-XOO.OOXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOX.X": {
      evaluation: "O",
      moveEvaluations: "...O...O."
    },
    "O-XOO.OOX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOX..": {
      evaluation: "O",
      moveEvaluations: "...O...OO"
    },
    "O-XOO.OOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOO.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OO.X.": {
      evaluation: "O",
      moveEvaluations: "...O..O.O"
    },
    "O-XOO.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OO..X": {
      evaluation: "O",
      moveEvaluations: "...O..OO."
    },
    "O-XOO.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.OO...": {
      evaluation: "O",
      moveEvaluations: "...O..OOO"
    },
    "O-XOO.O.XOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.X.X": {
      evaluation: "O",
      moveEvaluations: "...X.X.O."
    },
    "O-XOO.O.X.O": {
      evaluation: "O",
      moveEvaluations: "...O.O.O."
    },
    "O-XOO.O.X..": {
      evaluation: "O",
      moveEvaluations: "...O.X.OX"
    },
    "O-XOO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.OOX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O..XO": {
      evaluation: "O",
      moveEvaluations: "...O.OO.."
    },
    "O-XOO.O..X.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "O-XOO.O..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO.O...X": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "O-XOO.O...O": {
      evaluation: "O",
      moveEvaluations: "...O.OOO."
    },
    "O-XOO.O....": {
      evaluation: "O",
      moveEvaluations: "...O.OOOO"
    },
    "O-XOO..XXOO": {
      evaluation: "O",
      moveEvaluations: "...DO...."
    },
    "O-XOO..XXO.": {
      evaluation: "O",
      moveEvaluations: "...DO...X"
    },
    "O-XOO..XX.O": {
      evaluation: "D",
      moveEvaluations: "...DX..X."
    },
    "O-XOO..XX..": {
      evaluation: "X",
      moveEvaluations: "...XX..XX"
    },
    "O-XOO..XOXO": {
      evaluation: "O",
      moveEvaluations: "...DO...."
    },
    "O-XOO..XOX.": {
      evaluation: "O",
      moveEvaluations: "...DO...D"
    },
    "O-XOO..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..XOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XOO..XO.O": {
      evaluation: "O",
      moveEvaluations: "...OO..O."
    },
    "O-XOO..XO..": {
      evaluation: "O",
      moveEvaluations: "...DO..OO"
    },
    "O-XOO..X.XO": {
      evaluation: "D",
      moveEvaluations: "...DD.D.."
    },
    "O-XOO..X.X.": {
      evaluation: "X",
      moveEvaluations: "...XX.X.X"
    },
    "O-XOO..X.OO": {
      evaluation: "O",
      moveEvaluations: "...OO.O.."
    },
    "O-XOO..X.O.": {
      evaluation: "O",
      moveEvaluations: "...DO.O.O"
    },
    "O-XOO..X..O": {
      evaluation: "O",
      moveEvaluations: "...DO.OO."
    },
    "O-XOO..X...": {
      evaluation: "O",
      moveEvaluations: "...DO.XXX"
    },
    "O-XOO..OXOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..OXO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XOO..OX.X": {
      evaluation: "X",
      moveEvaluations: "...XX..X."
    },
    "O-XOO..OX.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..OX..": {
      evaluation: "O",
      moveEvaluations: "...OX..XO"
    },
    "O-XOO..OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..OOX.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XOO..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..OOO.": {
      evaluation: "O",
      moveEvaluations: "...OO...O"
    },
    "O-XOO..OO.X": {
      evaluation: "O",
      moveEvaluations: "...XO..X."
    },
    "O-XOO..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..OO..": {
      evaluation: "O",
      moveEvaluations: "...OO..OO"
    },
    "O-XOO..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..O.X.": {
      evaluation: "O",
      moveEvaluations: "...OO.O.O"
    },
    "O-XOO..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..O.O.": {
      evaluation: "O",
      moveEvaluations: "...OO.O.O"
    },
    "O-XOO..O..X": {
      evaluation: "O",
      moveEvaluations: "...XO.XX."
    },
    "O-XOO..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO..O...": {
      evaluation: "O",
      moveEvaluations: "...OO.OOO"
    },
    "O-XOO...XOO": {
      evaluation: "O",
      moveEvaluations: "...OOO..."
    },
    "O-XOO...XO.": {
      evaluation: "O",
      moveEvaluations: "...DOX..X"
    },
    "O-XOO...X.X": {
      evaluation: "X",
      moveEvaluations: "...XXX.X."
    },
    "O-XOO...X.O": {
      evaluation: "O",
      moveEvaluations: "...DXO.X."
    },
    "O-XOO...X..": {
      evaluation: "X",
      moveEvaluations: "...XXX.XX"
    },
    "O-XOO...OXO": {
      evaluation: "O",
      moveEvaluations: "...OOO..."
    },
    "O-XOO...OX.": {
      evaluation: "O",
      moveEvaluations: "...DOO..O"
    },
    "O-XOO...OOX": {
      evaluation: "O",
      moveEvaluations: "...XOX..."
    },
    "O-XOO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XOO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "O-XOO...O.X": {
      evaluation: "O",
      moveEvaluations: "...XOX.X."
    },
    "O-XOO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "O-XOO...O..": {
      evaluation: "O",
      moveEvaluations: "...OOO.OO"
    },
    "O-XOO....XO": {
      evaluation: "O",
      moveEvaluations: "...DOOO.."
    },
    "O-XOO....X.": {
      evaluation: "D",
      moveEvaluations: "...XXXD.D"
    },
    "O-XOO....OX": {
      evaluation: "O",
      moveEvaluations: "...XOXX.."
    },
    "O-XOO....OO": {
      evaluation: "O",
      moveEvaluations: "...OOOO.."
    },
    "O-XOO....O.": {
      evaluation: "O",
      moveEvaluations: "...OOOO.O"
    },
    "O-XOO.....X": {
      evaluation: "O",
      moveEvaluations: "...XOXXX."
    },
    "O-XOO.....O": {
      evaluation: "O",
      moveEvaluations: "...OOOOO."
    },
    "O-XOO......": {
      evaluation: "O",
      moveEvaluations: "...DOOOOO"
    },
    "O-XO.OXX.XO": {
      evaluation: "D",
      moveEvaluations: "..D...D.."
    },
    "O-XO.OXX.X.": {
      evaluation: "D",
      moveEvaluations: "..X...X.D"
    },
    "O-XO.OXX.OO": {
      evaluation: "O",
      moveEvaluations: "..D...O.."
    },
    "O-XO.OXX.O.": {
      evaluation: "D",
      moveEvaluations: "..X...X.D"
    },
    "O-XO.OXX..O": {
      evaluation: "D",
      moveEvaluations: "..D...DD."
    },
    "O-XO.OXX...": {
      evaluation: "D",
      moveEvaluations: "..X...XXD"
    },
    "O-XO.OXO.OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-XO.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "..X...X.O"
    },
    "O-XO.OXO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO.OXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...OO."
    },
    "O-XO.OXO...": {
      evaluation: "D",
      moveEvaluations: "..X...XXD"
    },
    "O-XO.OX...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO.OX...O": {
      evaluation: "D",
      moveEvaluations: "..D..DDD."
    },
    "O-XO.OX....": {
      evaluation: "D",
      moveEvaluations: "..X..XXXD"
    },
    "O-XO.OOX.XO": {
      evaluation: "D",
      moveEvaluations: "..D...D.."
    },
    "O-XO.OOX.X.": {
      evaluation: "D",
      moveEvaluations: "..D...D.D"
    },
    "O-XO.OOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOX..O": {
      evaluation: "O",
      moveEvaluations: "..O...OO."
    },
    "O-XO.OOX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOD"
    },
    "O-XO.OOO.OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOO..X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO.OO...X": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "O-XO.OO...O": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "O-XO.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "O-XO.O.X.XO": {
      evaluation: "D",
      moveEvaluations: "..D.D.D.."
    },
    "O-XO.O.X.X.": {
      evaluation: "D",
      moveEvaluations: "..X.X.X.D"
    },
    "O-XO.O.X.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-XO.O.X.O.": {
      evaluation: "O",
      moveEvaluations: "..D.O.O.O"
    },
    "O-XO.O.X..O": {
      evaluation: "O",
      moveEvaluations: "..D.D.DO."
    },
    "O-XO.O.X...": {
      evaluation: "D",
      moveEvaluations: "..D.D.XDD"
    },
    "O-XO.O.O.OX": {
      evaluation: "O",
      moveEvaluations: "..X.O.X.."
    },
    "O-XO.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-XO.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "O-XO.O.O..X": {
      evaluation: "O",
      moveEvaluations: "..X.O.XX."
    },
    "O-XO.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "O-XO.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "O-XO.O....X": {
      evaluation: "O",
      moveEvaluations: "..X.OXXX."
    },
    "O-XO.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "O-XO.O.....": {
      evaluation: "O",
      moveEvaluations: "..D.ODDDD"
    },
    "O-XO..XXXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XO..XXX.O": {
      evaluation: "X",
      moveEvaluations: "..XX...X."
    },
    "O-XO..XXX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XO..XXOXO": {
      evaluation: "D",
      moveEvaluations: "..XD....."
    },
    "O-XO..XXOX.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XO..XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..XXOO.": {
      evaluation: "O",
      moveEvaluations: "..XX....O"
    },
    "O-XO..XXO.O": {
      evaluation: "O",
      moveEvaluations: "..XD...O."
    },
    "O-XO..XXO..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XO..XX.XO": {
      evaluation: "D",
      moveEvaluations: "..XD..X.."
    },
    "O-XO..XX.X.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "O-XO..XX.OO": {
      evaluation: "O",
      moveEvaluations: "..XD..O.."
    },
    "O-XO..XX.O.": {
      evaluation: "X",
      moveEvaluations: "..XX..X.X"
    },
    "O-XO..XX..O": {
      evaluation: "D",
      moveEvaluations: "..XD..XX."
    },
    "O-XO..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "O-XO..XOXO.": {
      evaluation: "X",
      moveEvaluations: "..XX....X"
    },
    "O-XO..XOX.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..XOX.O": {
      evaluation: "O",
      moveEvaluations: "..OX...X."
    },
    "O-XO..XOX..": {
      evaluation: "X",
      moveEvaluations: "..XX...XX"
    },
    "O-XO..XOOXO": {
      evaluation: "O",
      moveEvaluations: "..OD....."
    },
    "O-XO..XOOX.": {
      evaluation: "D",
      moveEvaluations: "..XX....D"
    },
    "O-XO..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..XX....O"
    },
    "O-XO..XOO.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XO..XOO..": {
      evaluation: "O",
      moveEvaluations: "..XX...XO"
    },
    "O-XO..XO.XO": {
      evaluation: "O",
      moveEvaluations: "..OD..D.."
    },
    "O-XO..XO.X.": {
      evaluation: "D",
      moveEvaluations: "..XX..X.D"
    },
    "O-XO..XO.OO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "O-XO..XO.O.": {
      evaluation: "O",
      moveEvaluations: "..XX..X.O"
    },
    "O-XO..XO..X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..XO..O": {
      evaluation: "O",
      moveEvaluations: "..OD..OO."
    },
    "O-XO..XO...": {
      evaluation: "D",
      moveEvaluations: "..XX..XXD"
    },
    "O-XO..X.XO.": {
      evaluation: "X",
      moveEvaluations: "..XX.X..X"
    },
    "O-XO..X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..X.X.O": {
      evaluation: "X",
      moveEvaluations: "..XX.X.X."
    },
    "O-XO..X.X..": {
      evaluation: "X",
      moveEvaluations: "..XX.X.XX"
    },
    "O-XO..X.OXO": {
      evaluation: "D",
      moveEvaluations: "..DD.D..."
    },
    "O-XO..X.OX.": {
      evaluation: "D",
      moveEvaluations: "..XX.X..D"
    },
    "O-XO..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..XX.X..O"
    },
    "O-XO..X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..X.O.O": {
      evaluation: "O",
      moveEvaluations: "..OD.O.O."
    },
    "O-XO..X.O..": {
      evaluation: "D",
      moveEvaluations: "..XX.X.XD"
    },
    "O-XO..X..XO": {
      evaluation: "D",
      moveEvaluations: "..DD.DD.."
    },
    "O-XO..X..X.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "O-XO..X..OX": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..X..OO": {
      evaluation: "O",
      moveEvaluations: "..OD.OO.."
    },
    "O-XO..X..O.": {
      evaluation: "X",
      moveEvaluations: "..XX.XX.X"
    },
    "O-XO..X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-XO..X...O": {
      evaluation: "D",
      moveEvaluations: "..DD.DDX."
    },
    "O-XO..X....": {
      evaluation: "X",
      moveEvaluations: "..XX.XXXX"
    },
    "O-XO..OXXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OXX.O": {
      evaluation: "O",
      moveEvaluations: "..XD...O."
    },
    "O-XO..OXX..": {
      evaluation: "O",
      moveEvaluations: "..XD...OX"
    },
    "O-XO..OXOXO": {
      evaluation: "O",
      moveEvaluations: "..OD....."
    },
    "O-XO..OXOX.": {
      evaluation: "O",
      moveEvaluations: "..OD....D"
    },
    "O-XO..OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OXO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XO..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-XO..OX.XO": {
      evaluation: "D",
      moveEvaluations: "..DD..D.."
    },
    "O-XO..OX.X.": {
      evaluation: "D",
      moveEvaluations: "..XX..D.D"
    },
    "O-XO..OX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OX..O": {
      evaluation: "O",
      moveEvaluations: "..OD..OO."
    },
    "O-XO..OX...": {
      evaluation: "O",
      moveEvaluations: "..OD..OOD"
    },
    "O-XO..OOXO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OOX.X": {
      evaluation: "O",
      moveEvaluations: "..XO...O."
    },
    "O-XO..OOX.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XO..OOX..": {
      evaluation: "O",
      moveEvaluations: "..XO...OX"
    },
    "O-XO..OOOXO": {
      evaluation: "O",
      moveEvaluations: "..OO....."
    },
    "O-XO..OOOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-XO..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OOO.X": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XO..OOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-XO..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-XO..OO.XO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "O-XO..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-XO..OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..OO..X": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "O-XO..OO..O": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "O-XO..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "O-XO..O.XO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O.X.X": {
      evaluation: "O",
      moveEvaluations: "..XX.X.O."
    },
    "O-XO..O.X.O": {
      evaluation: "O",
      moveEvaluations: "..XO.X.O."
    },
    "O-XO..O.X..": {
      evaluation: "O",
      moveEvaluations: "..XO.X.OX"
    },
    "O-XO..O.OXO": {
      evaluation: "O",
      moveEvaluations: "..OO.O..."
    },
    "O-XO..O.OX.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..D"
    },
    "O-XO..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O.O.X": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "O-XO..O.O.O": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "O-XO..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "O-XO..O..XO": {
      evaluation: "O",
      moveEvaluations: "..OD.OD.."
    },
    "O-XO..O..X.": {
      evaluation: "D",
      moveEvaluations: "..XD.DD.D"
    },
    "O-XO..O..OX": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO..O...X": {
      evaluation: "O",
      moveEvaluations: "..OO.OOO."
    },
    "O-XO..O...O": {
      evaluation: "O",
      moveEvaluations: "..OO.OOO."
    },
    "O-XO..O....": {
      evaluation: "O",
      moveEvaluations: "..OO.OOOO"
    },
    "O-XO...XXO.": {
      evaluation: "O",
      moveEvaluations: "..XXO...X"
    },
    "O-XO...XX.O": {
      evaluation: "D",
      moveEvaluations: "..XDX..X."
    },
    "O-XO...XX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "O-XO...XOXO": {
      evaluation: "D",
      moveEvaluations: "..DDD...."
    },
    "O-XO...XOX.": {
      evaluation: "D",
      moveEvaluations: "..XXD...D"
    },
    "O-XO...XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-XO...XO.O": {
      evaluation: "O",
      moveEvaluations: "..ODO..O."
    },
    "O-XO...XO..": {
      evaluation: "O",
      moveEvaluations: "..XXO..OD"
    },
    "O-XO...X.XO": {
      evaluation: "D",
      moveEvaluations: "..XDD.D.."
    },
    "O-XO...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "O-XO...X.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "O-XO...X.O.": {
      evaluation: "O",
      moveEvaluations: "..XDO.O.O"
    },
    "O-XO...X..O": {
      evaluation: "O",
      moveEvaluations: "..XDD.DO."
    },
    "O-XO...X...": {
      evaluation: "D",
      moveEvaluations: "..XXD.XXX"
    },
    "O-XO...OXO.": {
      evaluation: "O",
      moveEvaluations: "..XXO...X"
    },
    "O-XO...OX.X": {
      evaluation: "X",
      moveEvaluations: "..XXX..X."
    },
    "O-XO...OX.O": {
      evaluation: "O",
      moveEvaluations: "..OOX..X."
    },
    "O-XO...OX..": {
      evaluation: "X",
      moveEvaluations: "..XXX..XX"
    },
    "O-XO...OOXO": {
      evaluation: "O",
      moveEvaluations: "..OOO...."
    },
    "O-XO...OOX.": {
      evaluation: "O",
      moveEvaluations: "..ODO...D"
    },
    "O-XO...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-XO...OO.X": {
      evaluation: "O",
      moveEvaluations: "..XXO..X."
    },
    "O-XO...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "O-XO...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "O-XO...O.XO": {
      evaluation: "O",
      moveEvaluations: "..OOO.D.."
    },
    "O-XO...O.X.": {
      evaluation: "D",
      moveEvaluations: "..XDD.D.D"
    },
    "O-XO...O.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "O-XO...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-XO...O..X": {
      evaluation: "O",
      moveEvaluations: "..XXO.XX."
    },
    "O-XO...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "O-XO...O...": {
      evaluation: "O",
      moveEvaluations: "..ODO.OOO"
    },
    "O-XO....XO.": {
      evaluation: "O",
      moveEvaluations: "..XXOX..X"
    },
    "O-XO....X.X": {
      evaluation: "X",
      moveEvaluations: "..XXXX.X."
    },
    "O-XO....X.O": {
      evaluation: "D",
      moveEvaluations: "..XDXX.X."
    },
    "O-XO....X..": {
      evaluation: "X",
      moveEvaluations: "..XXXX.XX"
    },
    "O-XO....OXO": {
      evaluation: "O",
      moveEvaluations: "..ODDD..."
    },
    "O-XO....OX.": {
      evaluation: "D",
      moveEvaluations: "..DDDD..D"
    },
    "O-XO....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-XO....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "O-XO....O.X": {
      evaluation: "O",
      moveEvaluations: "..XXOX.X."
    },
    "O-XO....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "O-XO....O..": {
      evaluation: "O",
      moveEvaluations: "..ODOO.OO"
    },
    "O-XO.....XO": {
      evaluation: "D",
      moveEvaluations: "..DDDDD.."
    },
    "O-XO.....X.": {
      evaluation: "D",
      moveEvaluations: "..XXXXD.D"
    },
    "O-XO.....OX": {
      evaluation: "O",
      moveEvaluations: "..XXOXX.."
    },
    "O-XO.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "O-XO.....O.": {
      evaluation: "O",
      moveEvaluations: "..ODOOO.O"
    },
    "O-XO......X": {
      evaluation: "D",
      moveEvaluations: "..XXDXXX."
    },
    "O-XO......O": {
      evaluation: "O",
      moveEvaluations: "..ODOOOO."
    },
    "O-XO.......": {
      evaluation: "D",
      moveEvaluations: "..XDDXDXD"
    },
    "O-X.X.X.X.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X.X.X.X.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X.X.X.X..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X.X.X.OXO": {
      evaluation: "D",
      moveEvaluations: ".D.X.X..."
    },
    "O-X.X.X.OX.": {
      evaluation: "X",
      moveEvaluations: ".X.X.X..X"
    },
    "O-X.X.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.X.X.OO.": {
      evaluation: "O",
      moveEvaluations: ".X.X.X..O"
    },
    "O-X.X.X.O.O": {
      evaluation: "O",
      moveEvaluations: ".D.X.X.O."
    },
    "O-X.X.X.O..": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.XX"
    },
    "O-X.X.X..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "O-X.X.X..O.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "O-X.X.X....": {
      evaluation: "X",
      moveEvaluations: ".X.X.XXXX"
    },
    "O-X.X.O.X.X": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.X."
    },
    "O-X.X.O.X.O": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.X."
    },
    "O-X.X.O.X..": {
      evaluation: "X",
      moveEvaluations: ".X.X.X.XX"
    },
    "O-X.X.O.OXO": {
      evaluation: "D",
      moveEvaluations: ".D.X.X..."
    },
    "O-X.X.O.OX.": {
      evaluation: "D",
      moveEvaluations: ".D.X.X..X"
    },
    "O-X.X.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.X.O.OO.": {
      evaluation: "O",
      moveEvaluations: ".O.X.X..O"
    },
    "O-X.X.O.O.O": {
      evaluation: "O",
      moveEvaluations: ".D.X.X.O."
    },
    "O-X.X.O.O..": {
      evaluation: "D",
      moveEvaluations: ".D.X.X.XX"
    },
    "O-X.X.O..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "O-X.X.O..O.": {
      evaluation: "O",
      moveEvaluations: ".O.X.XX.X"
    },
    "O-X.X.O....": {
      evaluation: "D",
      moveEvaluations: ".D.X.XXXX"
    },
    "O-X.X...X.X": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.X."
    },
    "O-X.X...X.O": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.X."
    },
    "O-X.X...X..": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.XX"
    },
    "O-X.X...OXO": {
      evaluation: "D",
      moveEvaluations: ".D.XXX..."
    },
    "O-X.X...OX.": {
      evaluation: "X",
      moveEvaluations: ".X.XXX..X"
    },
    "O-X.X...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.X...OO.": {
      evaluation: "O",
      moveEvaluations: ".O.XXX..O"
    },
    "O-X.X...O.O": {
      evaluation: "O",
      moveEvaluations: ".D.XXX.O."
    },
    "O-X.X...O..": {
      evaluation: "X",
      moveEvaluations: ".X.XXX.XX"
    },
    "O-X.X....X.": {
      evaluation: "X",
      moveEvaluations: ".X.XXXX.X"
    },
    "O-X.X....O.": {
      evaluation: "X",
      moveEvaluations: ".X.XXXX.X"
    },
    "O-X.X......": {
      evaluation: "X",
      moveEvaluations: ".X.XXXXXX"
    },
    "O-X.O.XXOXO": {
      evaluation: "X",
      moveEvaluations: ".X.X....."
    },
    "O-X.O.XXOX.": {
      evaluation: "X",
      moveEvaluations: ".X.X....X"
    },
    "O-X.O.XXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XXOO.": {
      evaluation: "O",
      moveEvaluations: ".X.X....O"
    },
    "O-X.O.XXO.O": {
      evaluation: "O",
      moveEvaluations: ".X.D...O."
    },
    "O-X.O.XXO..": {
      evaluation: "X",
      moveEvaluations: ".X.X...XX"
    },
    "O-X.O.XX.XO": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.."
    },
    "O-X.O.XX.X.": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.X"
    },
    "O-X.O.XX.OO": {
      evaluation: "O",
      moveEvaluations: ".X.D..O.."
    },
    "O-X.O.XX.O.": {
      evaluation: "X",
      moveEvaluations: ".X.X..X.X"
    },
    "O-X.O.XX..O": {
      evaluation: "D",
      moveEvaluations: ".X.D..XX."
    },
    "O-X.O.XX...": {
      evaluation: "X",
      moveEvaluations: ".X.X..XXX"
    },
    "O-X.O.XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XOOO.": {
      evaluation: "O",
      moveEvaluations: ".X.X....O"
    },
    "O-X.O.XOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XOO..": {
      evaluation: "O",
      moveEvaluations: ".X.X...XO"
    },
    "O-X.O.XO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XO.X.": {
      evaluation: "O",
      moveEvaluations: ".X.X..X.O"
    },
    "O-X.O.XO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XO.O.": {
      evaluation: "O",
      moveEvaluations: ".X.X..X.O"
    },
    "O-X.O.XO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.XO...": {
      evaluation: "O",
      moveEvaluations: ".X.X..XXO"
    },
    "O-X.O.X.O.X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X.O.X.O.O": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.O."
    },
    "O-X.O.X.O..": {
      evaluation: "O",
      moveEvaluations: ".X.X.X.XO"
    },
    "O-X.O.X..XO": {
      evaluation: "O",
      moveEvaluations: ".D.X.OX.."
    },
    "O-X.O.X..X.": {
      evaluation: "X",
      moveEvaluations: ".X.X.XX.X"
    },
    "O-X.O.X..OO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "O-X.O.X..O.": {
      evaluation: "O",
      moveEvaluations: ".X.X.XX.O"
    },
    "O-X.O.X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X.O.X...O": {
      evaluation: "O",
      moveEvaluations: ".D.D.OOO."
    },
    "O-X.O.X....": {
      evaluation: "D",
      moveEvaluations: ".X.X.XXXD"
    },
    "O-X.O.OXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OX.XO": {
      evaluation: "O",
      moveEvaluations: ".D.D..O.."
    },
    "O-X.O.OX.X.": {
      evaluation: "O",
      moveEvaluations: ".X.D..O.D"
    },
    "O-X.O.OX.OO": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.."
    },
    "O-X.O.OX.O.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "O-X.O.OX..O": {
      evaluation: "O",
      moveEvaluations: ".O.D..OO."
    },
    "O-X.O.OX...": {
      evaluation: "O",
      moveEvaluations: ".O.D..OOD"
    },
    "O-X.O.OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OO.X.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "O-X.O.OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OO.O.": {
      evaluation: "O",
      moveEvaluations: ".O.O..O.O"
    },
    "O-X.O.OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.OO...": {
      evaluation: "O",
      moveEvaluations: ".O.O..OOO"
    },
    "O-X.O.O.O.X": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O.O..XO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "O-X.O.O..X.": {
      evaluation: "O",
      moveEvaluations: ".X.O.OO.O"
    },
    "O-X.O.O..OO": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.."
    },
    "O-X.O.O..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "O-X.O.O...X": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOO."
    },
    "O-X.O.O...O": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOO."
    },
    "O-X.O.O....": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOOO"
    },
    "O-X.O..XOXO": {
      evaluation: "O",
      moveEvaluations: ".D.DO...."
    },
    "O-X.O..XOX.": {
      evaluation: "O",
      moveEvaluations: ".X.XO...X"
    },
    "O-X.O..XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..XOO.": {
      evaluation: "O",
      moveEvaluations: ".O.OO...O"
    },
    "O-X.O..XO.O": {
      evaluation: "O",
      moveEvaluations: ".O.OO..O."
    },
    "O-X.O..XO..": {
      evaluation: "O",
      moveEvaluations: ".X.DO..OO"
    },
    "O-X.O..X.XO": {
      evaluation: "D",
      moveEvaluations: ".X.DD.X.."
    },
    "O-X.O..X.X.": {
      evaluation: "X",
      moveEvaluations: ".X.XX.X.X"
    },
    "O-X.O..X.OO": {
      evaluation: "O",
      moveEvaluations: ".O.DO.O.."
    },
    "O-X.O..X.O.": {
      evaluation: "O",
      moveEvaluations: ".X.DO.O.D"
    },
    "O-X.O..X..O": {
      evaluation: "O",
      moveEvaluations: ".X.DD.OD."
    },
    "O-X.O..X...": {
      evaluation: "D",
      moveEvaluations: ".X.DD.XXX"
    },
    "O-X.O..OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..OOO.": {
      evaluation: "O",
      moveEvaluations: ".O.OO...O"
    },
    "O-X.O..OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..OO..": {
      evaluation: "O",
      moveEvaluations: ".O.OO..OO"
    },
    "O-X.O..O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..O.X.": {
      evaluation: "O",
      moveEvaluations: ".X.OO.O.O"
    },
    "O-X.O..O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..O.O.": {
      evaluation: "O",
      moveEvaluations: ".O.OO.O.O"
    },
    "O-X.O..O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-X.O..O...": {
      evaluation: "O",
      moveEvaluations: ".O.OO.OOO"
    },
    "O-X.O...O.X": {
      evaluation: "O",
      moveEvaluations: ".X.XOX.X."
    },
    "O-X.O...O.O": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.O."
    },
    "O-X.O...O..": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.OO"
    },
    "O-X.O....XO": {
      evaluation: "O",
      moveEvaluations: ".D.DOOO.."
    },
    "O-X.O....X.": {
      evaluation: "D",
      moveEvaluations: ".X.XXXX.D"
    },
    "O-X.O....OO": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.."
    },
    "O-X.O....O.": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.O"
    },
    "O-X.O.....X": {
      evaluation: "X",
      moveEvaluations: ".X.XXXXX."
    },
    "O-X.O.....O": {
      evaluation: "O",
      moveEvaluations: ".O.OOOOO."
    },
    "O-X.O......": {
      evaluation: "O",
      moveEvaluations: ".X.DDOODO"
    },
    "O-X...XX.XO": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.."
    },
    "O-X...XX.X.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "O-X...XX.OO": {
      evaluation: "O",
      moveEvaluations: ".XXD..O.."
    },
    "O-X...XX.O.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "O-X...XX..O": {
      evaluation: "X",
      moveEvaluations: ".XXX..XX."
    },
    "O-X...XX...": {
      evaluation: "X",
      moveEvaluations: ".XXX..XXX"
    },
    "O-X...XO.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "O-X...XO.O.": {
      evaluation: "O",
      moveEvaluations: ".XXX..X.O"
    },
    "O-X...XO..O": {
      evaluation: "O",
      moveEvaluations: ".DOX..OO."
    },
    "O-X...XO...": {
      evaluation: "X",
      moveEvaluations: ".XXX..XXX"
    },
    "O-X...X...X": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-X...X...O": {
      evaluation: "D",
      moveEvaluations: ".XDX.XDX."
    },
    "O-X...X....": {
      evaluation: "X",
      moveEvaluations: ".XXX.XXXX"
    },
    "O-X...OX.XO": {
      evaluation: "D",
      moveEvaluations: ".DDD..D.."
    },
    "O-X...OX.X.": {
      evaluation: "D",
      moveEvaluations: ".XXX..X.D"
    },
    "O-X...OX.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "O-X...OX.O.": {
      evaluation: "O",
      moveEvaluations: ".OOD..O.O"
    },
    "O-X...OX..O": {
      evaluation: "O",
      moveEvaluations: ".DDD..OO."
    },
    "O-X...OX...": {
      evaluation: "D",
      moveEvaluations: ".DDX..XDD"
    },
    "O-X...OO.OO": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.."
    },
    "O-X...OO.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "O-X...OO..O": {
      evaluation: "O",
      moveEvaluations: ".OOO..OO."
    },
    "O-X...OO...": {
      evaluation: "O",
      moveEvaluations: ".OOO..OOO"
    },
    "O-X...O...X": {
      evaluation: "D",
      moveEvaluations: ".DXD.DXD."
    },
    "O-X...O...O": {
      evaluation: "O",
      moveEvaluations: ".OOO.OOO."
    },
    "O-X...O....": {
      evaluation: "D",
      moveEvaluations: ".DDD.DDDD"
    },
    "O-X....X.XO": {
      evaluation: "D",
      moveEvaluations: ".XXXD.X.."
    },
    "O-X....X.X.": {
      evaluation: "X",
      moveEvaluations: ".XXXX.X.X"
    },
    "O-X....X.OO": {
      evaluation: "O",
      moveEvaluations: ".ODDO.O.."
    },
    "O-X....X.O.": {
      evaluation: "D",
      moveEvaluations: ".XXXD.X.X"
    },
    "O-X....X..O": {
      evaluation: "D",
      moveEvaluations: ".XXDD.DX."
    },
    "O-X....X...": {
      evaluation: "X",
      moveEvaluations: ".XXXX.XXX"
    },
    "O-X....O.OO": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.."
    },
    "O-X....O.O.": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.O"
    },
    "O-X....O..O": {
      evaluation: "O",
      moveEvaluations: ".OOOO.OO."
    },
    "O-X....O...": {
      evaluation: "O",
      moveEvaluations: ".XOXD.DXX"
    },
    "O-X.......X": {
      evaluation: "X",
      moveEvaluations: ".XXXXXXX."
    },
    "O-X.......O": {
      evaluation: "O",
      moveEvaluations: ".DODDXOX."
    },
    "O-X........": {
      evaluation: "D",
      moveEvaluations: ".XXXDXXXX"
    },
    "O-OXOXXXOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXXOOO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXXOO.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXXO.O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXXO..": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXXOOO.": {
      evaluation: "O",
      moveEvaluations: "........O"
    },
    "O-OXOXXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXXOO..": {
      evaluation: "O",
      moveEvaluations: ".......DO"
    },
    "O-OXOXXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXXO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXXO.O.": {
      evaluation: "O",
      moveEvaluations: "......D.O"
    },
    "O-OXOXXO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXXO...": {
      evaluation: "O",
      moveEvaluations: "......XDO"
    },
    "O-OXOXX.O.O": {
      evaluation: "O",
      moveEvaluations: ".....O.O."
    },
    "O-OXOXX.O..": {
      evaluation: "X",
      moveEvaluations: ".....X.XX"
    },
    "O-OXOXX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOXX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-OXOXX..O.": {
      evaluation: "D",
      moveEvaluations: ".....DX.X"
    },
    "O-OXOXX...O": {
      evaluation: "O",
      moveEvaluations: ".....OXX."
    },
    "O-OXOXX....": {
      evaluation: "X",
      moveEvaluations: ".....XXXX"
    },
    "O-OXOXOXOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOX.X.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-OXOXOX.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-OXOXOX...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "O-OXOXOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOO.X.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-OXOXOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOO.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-OXOXOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXOO...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "O-OXOXO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-OXOXO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-OXOXO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOXO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "O-OXOX.XOXO": {
      evaluation: "O",
      moveEvaluations: "....O...."
    },
    "O-OXOX.XOX.": {
      evaluation: "O",
      moveEvaluations: "....O...X"
    },
    "O-OXOX.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.XOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-OXOX.XO.O": {
      evaluation: "O",
      moveEvaluations: "....O..O."
    },
    "O-OXOX.XO..": {
      evaluation: "O",
      moveEvaluations: "....O..XX"
    },
    "O-OXOX.X.X.": {
      evaluation: "O",
      moveEvaluations: "....O.X.X"
    },
    "O-OXOX.X.O.": {
      evaluation: "O",
      moveEvaluations: "....O.X.X"
    },
    "O-OXOX.X...": {
      evaluation: "O",
      moveEvaluations: "....O.XXX"
    },
    "O-OXOX.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.OOO.": {
      evaluation: "O",
      moveEvaluations: "....O...O"
    },
    "O-OXOX.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.OO..": {
      evaluation: "O",
      moveEvaluations: "....O..OO"
    },
    "O-OXOX.O.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.X.O"
    },
    "O-OXOX.O.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-OXOX.O..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOX.O...": {
      evaluation: "O",
      moveEvaluations: "....O.ODO"
    },
    "O-OXOX..O.O": {
      evaluation: "O",
      moveEvaluations: "....OO.O."
    },
    "O-OXOX..O..": {
      evaluation: "O",
      moveEvaluations: "....OO.OO"
    },
    "O-OXOX...XO": {
      evaluation: "O",
      moveEvaluations: "....OOX.."
    },
    "O-OXOX...X.": {
      evaluation: "O",
      moveEvaluations: "....OXX.X"
    },
    "O-OXOX...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-OXOX...O.": {
      evaluation: "O",
      moveEvaluations: "....ODO.O"
    },
    "O-OXOX....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "O-OXOX.....": {
      evaluation: "O",
      moveEvaluations: "....ODXDO"
    },
    "O-OXOOXOOXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "......O.O"
    },
    "O-OXOOXO...": {
      evaluation: "O",
      moveEvaluations: "......OOO"
    },
    "O-OXOOX.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOX.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXOOX..OO": {
      evaluation: "O",
      moveEvaluations: ".....OO.."
    },
    "O-OXOOX..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-OXOOX...O": {
      evaluation: "O",
      moveEvaluations: ".....OOO."
    },
    "O-OXOOX....": {
      evaluation: "O",
      moveEvaluations: ".....XODX"
    },
    "O-OXOOOOOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO..X.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-OXOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO..O.": {
      evaluation: "O",
      moveEvaluations: ".....OO.O"
    },
    "O-OXOOO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOOO....": {
      evaluation: "O",
      moveEvaluations: ".....OOOO"
    },
    "O-OXOO.OOXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.OOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-OXOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "....O.O.O"
    },
    "O-OXOO.O...": {
      evaluation: "O",
      moveEvaluations: "....O.OOO"
    },
    "O-OXOO..OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO..OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO..OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXOO...XO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-OXOO...X.": {
      evaluation: "O",
      moveEvaluations: "....OXO.X"
    },
    "O-OXOO...OO": {
      evaluation: "O",
      moveEvaluations: "....OOO.."
    },
    "O-OXOO...O.": {
      evaluation: "O",
      moveEvaluations: "....OOO.O"
    },
    "O-OXOO....O": {
      evaluation: "O",
      moveEvaluations: "....OOOO."
    },
    "O-OXOO.....": {
      evaluation: "O",
      moveEvaluations: "....OOOOO"
    },
    "O-OXO.X.OXO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXO.X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "...O.O..O"
    },
    "O-OXO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "...O.O.O."
    },
    "O-OXO.X.O..": {
      evaluation: "O",
      moveEvaluations: "...O.X.OX"
    },
    "O-OXO.X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OXO.X..O.": {
      evaluation: "O",
      moveEvaluations: "...D.DO.O"
    },
    "O-OXO.X....": {
      evaluation: "D",
      moveEvaluations: "...X.XXDX"
    },
    "O-OXO.O.OXO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO.O..X.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "O-OXO.O..O.": {
      evaluation: "O",
      moveEvaluations: "...O.OO.O"
    },
    "O-OXO.O....": {
      evaluation: "O",
      moveEvaluations: "...O.OOOO"
    },
    "O-OXO...OXO": {
      evaluation: "O",
      moveEvaluations: "...OOO..."
    },
    "O-OXO...OX.": {
      evaluation: "O",
      moveEvaluations: "...OOX..X"
    },
    "O-OXO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OXO...OO.": {
      evaluation: "O",
      moveEvaluations: "...OOO..O"
    },
    "O-OXO...O.O": {
      evaluation: "O",
      moveEvaluations: "...OOO.O."
    },
    "O-OXO...O..": {
      evaluation: "O",
      moveEvaluations: "...OOO.OO"
    },
    "O-OXO....X.": {
      evaluation: "O",
      moveEvaluations: "...XOXX.X"
    },
    "O-OXO....O.": {
      evaluation: "O",
      moveEvaluations: "...OOOO.O"
    },
    "O-OXO......": {
      evaluation: "O",
      moveEvaluations: "...OOOOOO"
    },
    "O-OX.XXX.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXX.OO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXX..O": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.XXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-OX.XXO.O.": {
      evaluation: "O",
      moveEvaluations: "..D...D.O"
    },
    "O-OX.XXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...XO."
    },
    "O-OX.XXO...": {
      evaluation: "D",
      moveEvaluations: "..X...XDX"
    },
    "O-OX.XX...O": {
      evaluation: "X",
      moveEvaluations: "..X..XXX."
    },
    "O-OX.XX....": {
      evaluation: "X",
      moveEvaluations: "..X..XXXX"
    },
    "O-OX.XOX.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XOX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.XOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XOX.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.XOX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XOX...": {
      evaluation: "O",
      moveEvaluations: "..O...ODO"
    },
    "O-OX.XOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XOO.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.XOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XOO...": {
      evaluation: "O",
      moveEvaluations: "..O...ODO"
    },
    "O-OX.XO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.XO....": {
      evaluation: "O",
      moveEvaluations: "..O..DODO"
    },
    "O-OX.X.X.XO": {
      evaluation: "O",
      moveEvaluations: "..X.O.X.."
    },
    "O-OX.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "..X.X.X.X"
    },
    "O-OX.X.X.OO": {
      evaluation: "O",
      moveEvaluations: "..X.O.O.."
    },
    "O-OX.X.X.O.": {
      evaluation: "D",
      moveEvaluations: "..X.D.X.X"
    },
    "O-OX.X.X..O": {
      evaluation: "O",
      moveEvaluations: "..X.O.XX."
    },
    "O-OX.X.X...": {
      evaluation: "D",
      moveEvaluations: "..X.D.XXX"
    },
    "O-OX.X.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-OX.X.O.O.": {
      evaluation: "O",
      moveEvaluations: "..D.D.D.O"
    },
    "O-OX.X.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "O-OX.X.O...": {
      evaluation: "O",
      moveEvaluations: "..D.D.DDO"
    },
    "O-OX.X....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "O-OX.X.....": {
      evaluation: "D",
      moveEvaluations: "..X.DDXDX"
    },
    "O-OX.OXXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OXXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OXX.OO": {
      evaluation: "O",
      moveEvaluations: "..D...O.."
    },
    "O-OX.OXX.O.": {
      evaluation: "O",
      moveEvaluations: "..D...O.D"
    },
    "O-OX.OXX..O": {
      evaluation: "O",
      moveEvaluations: "..X...OD."
    },
    "O-OX.OXX...": {
      evaluation: "O",
      moveEvaluations: "..X...ODX"
    },
    "O-OX.OXOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OXO.XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-OX.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.OXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...OO."
    },
    "O-OX.OXO...": {
      evaluation: "O",
      moveEvaluations: "..X...ODX"
    },
    "O-OX.OX.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OX.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OX.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OX..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX.OX..OO": {
      evaluation: "O",
      moveEvaluations: "..O..OO.."
    },
    "O-OX.OX..O.": {
      evaluation: "O",
      moveEvaluations: "..D..DO.D"
    },
    "O-OX.OX...O": {
      evaluation: "O",
      moveEvaluations: "..X..XOD."
    },
    "O-OX.OX....": {
      evaluation: "O",
      moveEvaluations: "..X..XODX"
    },
    "O-OX.OOXOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOXOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOXO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.OOX.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OX.OOX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "O-OX.OOOOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO.XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO.OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO..X.": {
      evaluation: "O",
      moveEvaluations: "..O..OO.O"
    },
    "O-OX.OO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO..O.": {
      evaluation: "O",
      moveEvaluations: "..O..OO.O"
    },
    "O-OX.OO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "O-OX.O.XOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.XOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.XOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.XO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.XO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.X.X.": {
      evaluation: "O",
      moveEvaluations: "..X.O.O.X"
    },
    "O-OX.O.X.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-OX.O.X.O.": {
      evaluation: "O",
      moveEvaluations: "..D.O.O.O"
    },
    "O-OX.O.X..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "O-OX.O.X...": {
      evaluation: "O",
      moveEvaluations: "..D.O.ODO"
    },
    "O-OX.O.OOX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O.O.XO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-OX.O.O.X.": {
      evaluation: "O",
      moveEvaluations: "..X.O.O.X"
    },
    "O-OX.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-OX.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "O-OX.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "O-OX.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "O-OX.O..OX.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O..OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O..OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX.O...XO": {
      evaluation: "O",
      moveEvaluations: "..X.OXO.."
    },
    "O-OX.O...X.": {
      evaluation: "O",
      moveEvaluations: "..X.OXO.X"
    },
    "O-OX.O...OO": {
      evaluation: "O",
      moveEvaluations: "..O.OOO.."
    },
    "O-OX.O...O.": {
      evaluation: "O",
      moveEvaluations: "..O.OOO.O"
    },
    "O-OX.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "O-OX.O.....": {
      evaluation: "O",
      moveEvaluations: "..O.OOOOO"
    },
    "O-OX..XXOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..XXOO.": {
      evaluation: "O",
      moveEvaluations: "..XO....O"
    },
    "O-OX..XXO.O": {
      evaluation: "O",
      moveEvaluations: "..XO...O."
    },
    "O-OX..XXO..": {
      evaluation: "O",
      moveEvaluations: "..XO...XX"
    },
    "O-OX..XX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..XX.O.": {
      evaluation: "D",
      moveEvaluations: "..XD..X.X"
    },
    "O-OX..XX..O": {
      evaluation: "X",
      moveEvaluations: "..XX..XX."
    },
    "O-OX..XX...": {
      evaluation: "X",
      moveEvaluations: "..XX..XXX"
    },
    "O-OX..XOOX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..XOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OX..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-OX..XOO..": {
      evaluation: "O",
      moveEvaluations: "..XO...OX"
    },
    "O-OX..XO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..XO.OO": {
      evaluation: "O",
      moveEvaluations: "..OO..O.."
    },
    "O-OX..XO.O.": {
      evaluation: "O",
      moveEvaluations: "..DD..O.O"
    },
    "O-OX..XO..O": {
      evaluation: "O",
      moveEvaluations: "..OX..XO."
    },
    "O-OX..XO...": {
      evaluation: "D",
      moveEvaluations: "..XX..XDX"
    },
    "O-OX..X.OX.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "O-OX..X.O.O": {
      evaluation: "O",
      moveEvaluations: "..XO.X.O."
    },
    "O-OX..X.O..": {
      evaluation: "O",
      moveEvaluations: "..XO.X.OX"
    },
    "O-OX..X..XO": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-OX..X..OO": {
      evaluation: "O",
      moveEvaluations: "..OD.OO.."
    },
    "O-OX..X..O.": {
      evaluation: "O",
      moveEvaluations: "..DD.DO.D"
    },
    "O-OX..X...O": {
      evaluation: "D",
      moveEvaluations: "..XX.XXD."
    },
    "O-OX..X....": {
      evaluation: "D",
      moveEvaluations: "..XX.XXDX"
    },
    "O-OX..OXOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OX..OXOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OX..OXO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-OX..OX.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OX..OX.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OX..OX..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OX...": {
      evaluation: "O",
      moveEvaluations: "..OO..ODO"
    },
    "O-OX..OOOX.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OX..OOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OX..OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-OX..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OX..OO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OO.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OX..OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "O-OX..O.OX.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "O-OX..O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..O.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "O-OX..O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "O-OX..O..XO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..O..X.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "O-OX..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..O..O.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "O-OX..O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX..O....": {
      evaluation: "O",
      moveEvaluations: "..OO.OOOO"
    },
    "O-OX...XOX.": {
      evaluation: "O",
      moveEvaluations: "..XOO...X"
    },
    "O-OX...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-OX...XO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "O-OX...XO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "O-OX...X.X.": {
      evaluation: "X",
      moveEvaluations: "..XXX.X.X"
    },
    "O-OX...X.O.": {
      evaluation: "O",
      moveEvaluations: "..DDD.O.O"
    },
    "O-OX...X..O": {
      evaluation: "O",
      moveEvaluations: "..XOO.OO."
    },
    "O-OX...X...": {
      evaluation: "O",
      moveEvaluations: "..XXD.ODX"
    },
    "O-OX...OOX.": {
      evaluation: "O",
      moveEvaluations: "..XOO...X"
    },
    "O-OX...OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-OX...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "O-OX...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "O-OX...O.X.": {
      evaluation: "O",
      moveEvaluations: "..XXO.X.X"
    },
    "O-OX...O.OO": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.."
    },
    "O-OX...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-OX...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "O-OX...O...": {
      evaluation: "O",
      moveEvaluations: "..OOO.OOO"
    },
    "O-OX....OX.": {
      evaluation: "O",
      moveEvaluations: "..XOOX..X"
    },
    "O-OX....OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OX....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "O-OX....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "O-OX....O..": {
      evaluation: "O",
      moveEvaluations: "..OOOO.OO"
    },
    "O-OX.....XO": {
      evaluation: "O",
      moveEvaluations: "..XXOXX.."
    },
    "O-OX.....X.": {
      evaluation: "O",
      moveEvaluations: "..XXOXX.X"
    },
    "O-OX.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "O-OX.....O.": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.O"
    },
    "O-OX......O": {
      evaluation: "O",
      moveEvaluations: "..OOOOOO."
    },
    "O-OX.......": {
      evaluation: "O",
      moveEvaluations: "..DOODODD"
    },
    "O-OOOOXOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOXO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOX....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOOOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOOO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOOO....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.OOOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.OOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.OO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.OO..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.O.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.O.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.O...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO..O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO..O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO...X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO...OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO...O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO....O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOOO.....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.X....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O.OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O..X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO.O....": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO...OOO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO...OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO...O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO...O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO....X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO....O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OOO......": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OXX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OO.OXX.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OO.OXX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "O-OO.OXO.OO": {
      evaluation: "O",
      moveEvaluations: "..O...O.."
    },
    "O-OO.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OO.OXO..O": {
      evaluation: "O",
      moveEvaluations: "..O...OO."
    },
    "O-OO.OXO...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "O-OO.OX...O": {
      evaluation: "O",
      moveEvaluations: "..O..OOO."
    },
    "O-OO.OX....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "O-OO.OOX.X.": {
      evaluation: "O",
      moveEvaluations: "..O...O.O"
    },
    "O-OO.OOX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OOX...": {
      evaluation: "O",
      moveEvaluations: "..O...OOO"
    },
    "O-OO.OOO.OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OOO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OO...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO.OO....": {
      evaluation: "O",
      moveEvaluations: "..O..OOOO"
    },
    "O-OO.O.X.X.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "O-OO.O.X.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "O-OO.O.X...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "O-OO.O.O.OO": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.."
    },
    "O-OO.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "..O.O.O.O"
    },
    "O-OO.O.O..O": {
      evaluation: "O",
      moveEvaluations: "..O.O.OO."
    },
    "O-OO.O.O...": {
      evaluation: "O",
      moveEvaluations: "..O.O.OOO"
    },
    "O-OO.O....O": {
      evaluation: "O",
      moveEvaluations: "..O.OOOO."
    },
    "O-OO.O.....": {
      evaluation: "O",
      moveEvaluations: "..O.OOOOO"
    },
    "O-OO..XXOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OO..XXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...XX"
    },
    "O-OO..XX.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..X.X"
    },
    "O-OO..XX.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..X.X"
    },
    "O-OO..XX...": {
      evaluation: "O",
      moveEvaluations: "..OO..XXX"
    },
    "O-OO..XOOO.": {
      evaluation: "O",
      moveEvaluations: "..OO....O"
    },
    "O-OO..XOO.O": {
      evaluation: "O",
      moveEvaluations: "..OO...O."
    },
    "O-OO..XOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-OO..XO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.D"
    },
    "O-OO..XO.O.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OO..XO..O": {
      evaluation: "O",
      moveEvaluations: "..OO..OO."
    },
    "O-OO..XO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "O-OO..X.OO.": {
      evaluation: "O",
      moveEvaluations: "..OO.O..O"
    },
    "O-OO..X.O.O": {
      evaluation: "O",
      moveEvaluations: "..OO.O.O."
    },
    "O-OO..X.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "O-OO..X..X.": {
      evaluation: "O",
      moveEvaluations: "..OO.DO.D"
    },
    "O-OO..X..OO": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.."
    },
    "O-OO..X..O.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "O-OO..X...O": {
      evaluation: "O",
      moveEvaluations: "..OO.OOO."
    },
    "O-OO..X....": {
      evaluation: "O",
      moveEvaluations: "..OO.DOOO"
    },
    "O-OO..OXOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OXO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-OO..OX.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OO..OX.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OX...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "O-OO..OOOO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OOO.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OOO..": {
      evaluation: "O",
      moveEvaluations: "..OO...OO"
    },
    "O-OO..OO.X.": {
      evaluation: "O",
      moveEvaluations: "..OO..O.O"
    },
    "O-OO..OO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OO..O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..OO...": {
      evaluation: "O",
      moveEvaluations: "..OO..OOO"
    },
    "O-OO..O.OO.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..O.O..": {
      evaluation: "O",
      moveEvaluations: "..OO.O.OO"
    },
    "O-OO..O..X.": {
      evaluation: "O",
      moveEvaluations: "..OO.OO.O"
    },
    "O-OO..O..OO": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-OO..O....": {
      evaluation: "O",
      moveEvaluations: "..OO.OOOO"
    },
    "O-OO...XOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-OO...XO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "O-OO...X.X.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-OO...X.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-OO...X...": {
      evaluation: "O",
      moveEvaluations: "..OOO.OOO"
    },
    "O-OO...OOO.": {
      evaluation: "O",
      moveEvaluations: "..OOO...O"
    },
    "O-OO...OO.O": {
      evaluation: "O",
      moveEvaluations: "..OOO..O."
    },
    "O-OO...OO..": {
      evaluation: "O",
      moveEvaluations: "..OOO..OO"
    },
    "O-OO...O.X.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-OO...O.O.": {
      evaluation: "O",
      moveEvaluations: "..OOO.O.O"
    },
    "O-OO...O..O": {
      evaluation: "O",
      moveEvaluations: "..OOO.OO."
    },
    "O-OO...O...": {
      evaluation: "O",
      moveEvaluations: "..OOO.OOO"
    },
    "O-OO....OO.": {
      evaluation: "O",
      moveEvaluations: "..OOOO..O"
    },
    "O-OO....O.O": {
      evaluation: "O",
      moveEvaluations: "..OOOO.O."
    },
    "O-OO....O..": {
      evaluation: "O",
      moveEvaluations: "..OOOO.OO"
    },
    "O-OO.....X.": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.O"
    },
    "O-OO.....OO": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.."
    },
    "O-OO.....O.": {
      evaluation: "O",
      moveEvaluations: "..OOOOO.O"
    },
    "O-OO......O": {
      evaluation: "O",
      moveEvaluations: "..OOOOOO."
    },
    "O-OO.......": {
      evaluation: "O",
      moveEvaluations: "..OOOOOOO"
    },
    "O-O.O.X.O.O": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.O."
    },
    "O-O.O.X.O..": {
      evaluation: "O",
      moveEvaluations: ".O.O.O.OO"
    },
    "O-O.O.X..X.": {
      evaluation: "O",
      moveEvaluations: ".O.X.XX.X"
    },
    "O-O.O.X..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "O-O.O.X....": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOOO"
    },
    "O-O.O.O.O.O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-O.O.O.O..": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-O.O.O..X.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "O-O.O.O..O.": {
      evaluation: "O",
      moveEvaluations: ".O.O.OO.O"
    },
    "O-O.O.O....": {
      evaluation: "O",
      moveEvaluations: ".O.O.OOOO"
    },
    "O-O.O...O.O": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.O."
    },
    "O-O.O...O..": {
      evaluation: "O",
      moveEvaluations: ".O.OOO.OO"
    },
    "O-O.O....X.": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.O"
    },
    "O-O.O....O.": {
      evaluation: "O",
      moveEvaluations: ".O.OOOO.O"
    },
    "O-O.O......": {
      evaluation: "O",
      moveEvaluations: ".O.OOOOOO"
    },
    "O-O...XX.X.": {
      evaluation: "X",
      moveEvaluations: ".XXX..X.X"
    },
    "O-O...XX.O.": {
      evaluation: "D",
      moveEvaluations: ".XXD..X.X"
    },
    "O-O...XX...": {
      evaluation: "D",
      moveEvaluations: ".XXD..XXX"
    },
    "O-O...XO.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "O-O...XO...": {
      evaluation: "O",
      moveEvaluations: ".DOO..ODO"
    },
    "O-O...X...O": {
      evaluation: "O",
      moveEvaluations: ".OOO.OOO."
    },
    "O-O...X....": {
      evaluation: "D",
      moveEvaluations: ".DDD.DDDD"
    },
    "O-O...OX.X.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "O-O...OX.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "O-O...OX...": {
      evaluation: "O",
      moveEvaluations: ".OOO..OOO"
    },
    "O-O...OO.O.": {
      evaluation: "O",
      moveEvaluations: ".OOO..O.O"
    },
    "O-O...OO...": {
      evaluation: "O",
      moveEvaluations: ".OOO..OOO"
    },
    "O-O...O...O": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-O...O....": {
      evaluation: "O",
      moveEvaluations: ".OOO.OOOO"
    },
    "O-O....X.X.": {
      evaluation: "O",
      moveEvaluations: ".XOXX.O.X"
    },
    "O-O....X.O.": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.O"
    },
    "O-O....X...": {
      evaluation: "O",
      moveEvaluations: ".XODO.ODD"
    },
    "O-O....O.O.": {
      evaluation: "O",
      moveEvaluations: ".OOOO.O.O"
    },
    "O-O....O...": {
      evaluation: "O",
      moveEvaluations: ".OOOO.OOO"
    },
    "O-O.......O": {
      evaluation: "O",
      moveEvaluations: ".OOOOOOO."
    },
    "O-O........": {
      evaluation: "O",
      moveEvaluations: ".OOOOOOOO"
    },
    "O-.X.XXX.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X.XXX.O.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X.XXX...": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X.XXO.O.": {
      evaluation: "O",
      moveEvaluations: "D.D...D.O"
    },
    "O-.X.XXO...": {
      evaluation: "X",
      moveEvaluations: "X.X...XXX"
    },
    "O-.X.XX....": {
      evaluation: "X",
      moveEvaluations: "X.X..XXXX"
    },
    "O-.X.XOX.X.": {
      evaluation: "X",
      moveEvaluations: "X.X...X.X"
    },
    "O-.X.XOX.O.": {
      evaluation: "O",
      moveEvaluations: "D.D...O.O"
    },
    "O-.X.XOX...": {
      evaluation: "D",
      moveEvaluations: "D.D...XXX"
    },
    "O-.X.XOO.O.": {
      evaluation: "O",
      moveEvaluations: "D.O...O.O"
    },
    "O-.X.XOO...": {
      evaluation: "O",
      moveEvaluations: "D.O...DXO"
    },
    "O-.X.XO....": {
      evaluation: "D",
      moveEvaluations: "D.D..XDXX"
    },
    "O-.X.X.X.X.": {
      evaluation: "X",
      moveEvaluations: "X.X.X.X.X"
    },
    "O-.X.X.X.O.": {
      evaluation: "X",
      moveEvaluations: "X.X.X.X.X"
    },
    "O-.X.X.X...": {
      evaluation: "X",
      moveEvaluations: "X.X.X.XXX"
    },
    "O-.X.X.O.O.": {
      evaluation: "O",
      moveEvaluations: "D.D.X.D.O"
    },
    "O-.X.X.O...": {
      evaluation: "D",
      moveEvaluations: "D.X.X.DXX"
    },
    "O-.X.X.....": {
      evaluation: "X",
      moveEvaluations: "X.X.XXXXX"
    },
    "O-.X.OXO.X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "D.D...O.O"
    },
    "O-.X.OXO...": {
      evaluation: "X",
      moveEvaluations: "X.X...XXX"
    },
    "O-.X.OX..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X.OX..O.": {
      evaluation: "O",
      moveEvaluations: "D.D..XO.D"
    },
    "O-.X.OX....": {
      evaluation: "X",
      moveEvaluations: "X.X..XXXX"
    },
    "O-.X.OOO.X.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.X.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.X.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.X.OO..X.": {
      evaluation: "O",
      moveEvaluations: "O.O..OO.O"
    },
    "O-.X.OO..O.": {
      evaluation: "O",
      moveEvaluations: "O.O..OO.O"
    },
    "O-.X.OO....": {
      evaluation: "O",
      moveEvaluations: "O.O..OOOO"
    },
    "O-.X.O.O.X.": {
      evaluation: "O",
      moveEvaluations: "X.X.O.X.X"
    },
    "O-.X.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "O.O.O.O.O"
    },
    "O-.X.O.O...": {
      evaluation: "O",
      moveEvaluations: "O.O.O.OOO"
    },
    "O-.X.O...X.": {
      evaluation: "O",
      moveEvaluations: "X.X.OXX.X"
    },
    "O-.X.O...O.": {
      evaluation: "O",
      moveEvaluations: "O.O.OOO.O"
    },
    "O-.X.O.....": {
      evaluation: "O",
      moveEvaluations: "O.D.OXXDD"
    },
    "O-.X..X..X.": {
      evaluation: "X",
      moveEvaluations: "........."
    },
    "O-.X..X..O.": {
      evaluation: "D",
      moveEvaluations: "D.DX.XD.D"
    },
    "O-.X..X....": {
      evaluation: "X",
      moveEvaluations: "X.XX.XXXX"
    },
    "O-.X..O..X.": {
      evaluation: "O",
      moveEvaluations: "O.OO.OO.O"
    },
    "O-.X..O..O.": {
      evaluation: "O",
      moveEvaluations: "O.OO.OO.O"
    },
    "O-.X..O....": {
      evaluation: "O",
      moveEvaluations: "O.OO.OODO"
    },
    "O-.X.....X.": {
      evaluation: "X",
      moveEvaluations: "X.XXXXX.X"
    },
    "O-.X.....O.": {
      evaluation: "D",
      moveEvaluations: "D.DDDDD.D"
    },
    "O-.X.......": {
      evaluation: "D",
      moveEvaluations: "D.DXDXXDX"
    },
    "O-.O.OXO.O.": {
      evaluation: "O",
      moveEvaluations: "O.O...O.O"
    },
    "O-.O.OXO...": {
      evaluation: "O",
      moveEvaluations: "O.O...OOO"
    },
    "O-.O.OX....": {
      evaluation: "O",
      moveEvaluations: "O.D..DDDD"
    },
    "O-.O.OOO.O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.O.OOO...": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.O.OO....": {
      evaluation: "O",
      moveEvaluations: "O.O..OOOO"
    },
    "O-.O.O.O.O.": {
      evaluation: "O",
      moveEvaluations: "O.O.O.O.O"
    },
    "O-.O.O.O...": {
      evaluation: "O",
      moveEvaluations: "O.O.O.OOO"
    },
    "O-.O.O.....": {
      evaluation: "O",
      moveEvaluations: "O.O.OOOOO"
    },
    "O-.O..X..O.": {
      evaluation: "O",
      moveEvaluations: "O.OD.DO.O"
    },
    "O-.O..X....": {
      evaluation: "D",
      moveEvaluations: "D.DD.DDXD"
    },
    "O-.O..O..O.": {
      evaluation: "O",
      moveEvaluations: "........."
    },
    "O-.O..O....": {
      evaluation: "O",
      moveEvaluations: "O.OO.OOOO"
    },
    "O-.O.....O.": {
      evaluation: "O",
      moveEvaluations: "O.OOOOO.O"
    },
    "O-.O.......": {
      evaluation: "O",
      moveEvaluations: "O.OOOOOOO"
    },
    "O-....X....": {
      evaluation: "D",
      moveEvaluations: "DXDX.XDXD"
    },
    "O-....O....": {
      evaluation: "O",
      moveEvaluations: "OOOO.OOOO"
    },
    "O-.........": {
      evaluation: "D",
      moveEvaluations: "DDDDDDDDD"
    }
  };

  // position-transformations.ts
  function getPositionValue(boardState) {
    return Number(boardState.map((cell) => cell === "X" ? 2 : cell === "O" ? 1 : 0).join(""));
  }
  function getRotations(b) {
    return [
      [b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
      [b[2], b[5], b[8], b[1], b[4], b[7], b[0], b[3], b[6]],
      [b[8], b[7], b[6], b[5], b[4], b[3], b[2], b[1], b[0]],
      [b[6], b[3], b[0], b[7], b[4], b[1], b[8], b[5], b[2]]
    ];
  }
  function getMirrors(b) {
    return [
      [b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
      [b[2], b[1], b[0], b[5], b[4], b[3], b[8], b[7], b[6]]
    ];
  }
  function findIdealPosition(boardState) {
    const mirrors = getMirrors(boardState);
    const rotations = [...getRotations(mirrors[0]), ...getRotations(mirrors[1])];
    let maxValue = 0;
    let bestPosition = boardState;
    for (let position of rotations) {
      if (getPositionValue(position) > maxValue) {
        maxValue = getPositionValue(position);
        bestPosition = position;
      }
    }
    const index = rotations.indexOf(bestPosition);
    return { position: bestPosition, mirror: index < 4 ? false : true, rotation: (index + 1) % 4 - 1 };
  }

  // evaluation.ts
  function checkWinner(boardState) {
    const bswn = boardState.map((e) => e === "." ? "G" : e);
    const across = bswn.map((p, i) => p + ((i + 1) % 3 === 0 ? "-" : "")).join("");
    const down = bswn[0] + bswn[3] + bswn[6] + "-" + bswn[1] + bswn[4] + bswn[7] + "-" + bswn[2] + bswn[5] + bswn[8];
    const cross = bswn[0] + bswn[4] + bswn[8] + "-" + bswn[2] + bswn[4] + bswn[6];
    const amalgamation = across + "-" + down + "-" + cross;
    return amalgamation.includes("XXX") ? "X" : amalgamation.includes("OOO") ? "O" : amalgamation.includes("G") ? null : "D";
  }
  function lookupEvaluation(boardState, turn) {
    const { position, mirror, rotation } = findIdealPosition(boardState);
    const lookupKey = turn + "-" + position.join("");
    const lookupResult = lookup_table_default[lookupKey];
    const rotatedResult = getRotations(lookupResult.moveEvaluations.split(""))[(4 - rotation) % 4];
    const mirroredResult = getMirrors(rotatedResult)[mirror ? 1 : 0];
    if (!lookupResult) {
      throw new Error("Position not found in lookup table: " + lookupKey);
    }
    return {
      bestEval: lookupResult.evaluation,
      evaluations: mirroredResult.map((evalChar, index) => ({
        move: index,
        eval: evalChar
      })).filter((e) => e.eval !== ".")
    };
  }

  // bot.ts
  var botType = "X";
  var switchBotType = () => {
    botType = botType === "X" ? "O" : "X";
    resetBoardState();
  };
  function makeBotMove() {
    if (window.boardState) {
      const { bestEval, evaluations } = lookupEvaluation(window.boardState, botType);
      const bestMoves = evaluations.filter((e) => e.eval === bestEval);
      if (bestEval === botType) {
        showMsg("lose");
      }
      if (bestMoves.length > 0) {
        const randomBestMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];
        makeMove(randomBestMove.move, botType);
      }
    }
  }

  // html-connector.ts
  function showMsg(msg) {
    const element = document.getElementById(msg + "-msg");
    if (element) {
      element.style.display = "block";
    }
  }
  function initializeBoard() {
    const botSwitchElement = document.getElementById("bot-switch-type");
    if (botSwitchElement) {
      botSwitchElement.addEventListener("click", () => {
        switchBotType();
        const botTypeElement2 = document.getElementById("bot-type");
        if (botTypeElement2) {
          botTypeElement2.textContent = botType;
        }
        if (botType === "X") {
          makeBotMove();
        }
      });
    }
    const botTypeElement = document.getElementById("bot-type");
    if (botTypeElement) {
      botTypeElement.textContent = botType;
    }
    if (botSwitchElement && botType === "X") {
      makeBotMove();
    }
    const boardElement = document.getElementById("board");
    if (boardElement) {
      const cells = boardElement.querySelectorAll(".cell");
      cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
          makeMove(index);
          if (botSwitchElement) {
            makeBotMove();
          }
        });
      });
    }
  }
  function updateBoard(boardState, moveEvals) {
    const boardElement = document.getElementById("board");
    if (!boardElement) {
      throw new Error("Missing board element");
    }
    const cells = boardElement.querySelectorAll(".cell");
    for (let index = 0;index < cells.length; index += 1) {
      const value = boardState[index] ?? ".";
      const cell = cells[index];
      const moveEvaluation = moveEvals.find((entry) => entry.move === index)?.eval ?? null;
      const isFilled = value !== ".";
      const hasEvaluation = moveEvaluation !== null;
      cell.textContent = isFilled ? value : hasEvaluation ? moveEvaluation : "";
      cell.style.backgroundColor = isFilled ? value === "X" ? "red" : "blue" : moveEvaluation === "X" ? "#ffcccc" : moveEvaluation === "O" ? "#cce0ff" : moveEvaluation === "D" ? "#d9d9d9" : "transparent";
      cell.style.color = hasEvaluation && !isFilled ? "#777" : "black";
    }
  }
  function updateEvaluation(boardEval) {
    const evaluationElement = document.getElementById("evaluation");
    if (!evaluationElement) {
      return;
    }
    evaluationElement.innerHTML = boardEval ?? "??";
  }

  // main.ts
  var boardState = Array(9).fill(".");
  var turn = "X";
  var moveEvals = [];
  var boardEval = null;
  function switchTurn() {
    turn = turn === "X" ? "O" : "X";
  }
  function resetBoardState() {
    for (let i = 0;i < boardState.length; i++) {
      boardState[i] = ".";
    }
    turn = "X";
    moveEvals = [];
    boardEval = null;
    updateBoard(boardState, moveEvals);
    updateEvaluation(boardEval);
    const loseMessage = document.getElementById("lose-msg");
    if (loseMessage) {
      loseMessage.style.display = "none";
    }
    const endMessage = document.getElementById("end-msg");
    if (endMessage) {
      endMessage.style.display = "none";
    }
  }
  function makeMove(move, player) {
    if (checkWinner(boardState) !== null) {
      showMsg("end");
      return;
    }
    if (boardState[move] === ".") {
      boardState[move] = player ?? turn;
      moveEvals = [];
      switchTurn();
    }
    if (document.getElementById("evaluation")) {
      const { bestEval, evaluations } = lookupEvaluation(boardState, turn);
      boardEval = bestEval;
      moveEvals = evaluations;
      updateEvaluation(boardEval);
    }
    updateBoard(boardState, moveEvals);
    if (checkWinner(boardState) !== null) {
      showMsg("end");
    }
  }
  if (typeof window !== "undefined") {
    window.initializeBoard = initializeBoard;
    window.boardState = boardState;
  }
})();

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
    initializeBoard: () => initializeBoard,
    evaluatePosition: () => evaluatePosition,
    evaluateMove: () => evaluateMove,
    boardState: () => boardState
  });
  var boardState = Array(9).fill(".");
  var turn = "X";
  var evaluation = [];
  function switchTurn() {
    turn = turn === "X" ? "O" : "X";
  }
  function updateBoard() {
    const boardElement = document.getElementById("board");
    if (!boardElement) {
      throw new Error("Missing board element");
    }
    const cells = boardElement.querySelectorAll(".cell");
    for (let index = 0;index < cells.length; index += 1) {
      const value = boardState[index] ?? ".";
      const cell = cells[index];
      const moveEvaluation = evaluation.find((entry) => entry.move === index)?.eval ?? null;
      const isFilled = value !== ".";
      const hasEvaluation = moveEvaluation !== null;
      cell.textContent = isFilled ? value : hasEvaluation ? moveEvaluation : "";
      cell.style.backgroundColor = isFilled ? value === "X" ? "red" : "blue" : moveEvaluation === "+" ? "#ffcccc" : moveEvaluation === "-" ? "#cce0ff" : moveEvaluation === "D" ? "#d9d9d9" : "transparent";
      cell.style.color = hasEvaluation && !isFilled ? "#777" : "black";
    }
  }
  function updateEvaluation() {
    const evaluationElement = document.getElementById("evaluation");
    const moveEvalsElement = document.getElementById("move-evals");
    if (!evaluationElement || !moveEvalsElement) {
      throw new Error("Missing evaluation elements");
    }
    const findRelevantEvaluation = turn === "X" ? evaluation.some((e) => e.eval === "+") ? "+" : evaluation.some((e) => e.eval === "D") ? "D" : "+" : evaluation.some((e) => e.eval === "-") ? "-" : evaluation.some((e) => e.eval === "D") ? "D" : "+";
    evaluationElement.innerHTML = findRelevantEvaluation;
    moveEvalsElement.innerHTML = "";
    evaluation.forEach(({ move, eval: evaluation2 }) => {
      const moveEval = document.createElement("div");
      moveEval.textContent = `${move + 1}: ${evaluation2}`;
      moveEvalsElement.appendChild(moveEval);
    });
  }
  function checkWinner(boardState2, player) {
    const bswn = boardState2.map((e) => e === "." ? "G" : e);
    const across = bswn.map((p, i) => p + ((i + 1) % 3 === 0 ? "-" : "")).join("");
    const down = bswn[0] + bswn[3] + bswn[6] + "-" + bswn[1] + bswn[4] + bswn[7] + "-" + bswn[2] + bswn[5] + bswn[8];
    const cross = bswn[0] + bswn[4] + bswn[8] + "-" + bswn[2] + bswn[4] + bswn[6];
    const amalgamation = across + "-" + down + "-" + cross;
    return amalgamation.includes("XXX") ? "+" : amalgamation.includes("OOO") ? "-" : amalgamation.includes("G") ? null : "D";
  }
  function evaluatePosition(boardState2, turn2, store = false) {
    const evaluations = [];
    if (checkWinner(boardState2, turn2) !== null) {
      return { bestEval: checkWinner(boardState2, turn2), evaluations: [] };
    }
    for (let move = 0;move < 9; move++) {
      if (boardState2[move] !== ".") {
        continue;
      } else {
        evaluations.push({ move, eval: evaluateMove(boardState2, move, turn2) });
      }
    }
    if (store) {
      evaluation = evaluations;
    }
    const bestEval = evaluations.length === 0 ? "D" : turn2 === "X" ? evaluations.some((e) => e.eval === "+") ? "+" : evaluations.some((e) => e.eval === "D") ? "D" : "-" : evaluations.some((e) => e.eval === "-") ? "-" : evaluations.some((e) => e.eval === "D") ? "D" : "+";
    return { bestEval, evaluations };
  }
  function evaluateMove(boardState2, move, turn2) {
    const nextBoardState = boardState2.slice();
    nextBoardState[move] = turn2;
    return evaluatePosition(nextBoardState, turn2 === "X" ? "O" : "X").bestEval;
  }
  function initializeBoard() {
    const boardElement = document.getElementById("board");
    if (!boardElement) {
      throw new Error("Missing board element");
    }
    const cells = boardElement.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (boardState[index] === ".") {
          boardState[index] = turn;
          evaluation = [];
          switchTurn();
          updateBoard();
        }
      });
    });
    const evalbutton = document.getElementById("evalbutton");
    evalbutton?.addEventListener("click", () => {
      evaluatePosition(boardState, turn, true);
      updateEvaluation();
      updateBoard();
    });
  }
})();

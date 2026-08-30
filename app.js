(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const publicNoTradeMode = typeof window !== "undefined"
    && /^https?:$/.test(window.location.protocol)
    && /\/(?:boardreadtools\/software|boardreadtools-demo)(?:\/|$)/.test(window.location.pathname);
  if (publicNoTradeMode) document.documentElement.classList.add("public-no-trading");

  const els = {
    fileInput: $("#fileInput"),
    demoReloadButton: $("#demoReloadButton"),
    demoInfo: $("#demoInfo"),
    orderCsvInput: $("#orderCsvInput"),
    symbolSelect: $("#symbolSelect"),
    intervalSelect: $("#intervalSelect"),
    openIntervalModalButton: $("#openIntervalModalButton"),
    verifyButton: $("#verifyButton"),
    prevButton: $("#prevButton"),
    nextButton: $("#nextButton"),
    widePrevButton: $("#widePrevButton"),
    wideNextButton: $("#wideNextButton"),
    tickStepInput: $("#tickStepInput"),
    playButton: $("#playButton"),
    boardDisplaySelect: $("#boardDisplaySelect"),
    boardLayoutSelect: $("#boardLayoutSelect"),
    boardDepthSelect: $("#boardDepthSelect"),
    settingsButton: $("#settingsButton"),
    currentAnchorButton: $("#currentAnchorButton"),
    flashToggle: $("#flashToggle"),
    cursorInfoToggle: $("#cursorInfoToggle"),
    horizontalTool: $("#horizontalTool"),
    rayTool: $("#rayTool"),
    rrTool: $("#rrTool"),
    entryTool: $("#entryTool"),
    lcTool: $("#lcTool"),
    tpTool: $("#tpTool"),
    arrowUpTool: $("#arrowUpTool"),
    arrowDownTool: $("#arrowDownTool"),
    eraseTool: $("#eraseTool"),
    clearLinesButton: $("#clearLinesButton"),
    lineColor: $("#lineColor"),
    drawingHint: $("#drawingHint"),
    statusText: $("#statusText"),
    progressText: $("#progressText"),
    progressBar: $("#progressBar"),
    fileInfo: $("#fileInfo"),
    orderCsvInfo: $("#orderCsvInfo"),
    statSymbol: $("#statSymbol"),
    statTimeframe: $("#statTimeframe"),
    statPoints: $("#statPoints"),
    statTime: $("#statTime"),
    statPrice: $("#statPrice"),
    statVolume: $("#statVolume"),
    statVwap: $("#statVwap"),
    statOpen: $("#statOpen"),
    statRange: $("#statRange"),
    statTickSize: $("#statTickSize"),
    chart: $("#priceChart"),
    chartHint: $("#chartHint"),
    chartCursor: $("#chartCursor"),
    timeSlider: $("#timeSlider"),
    timelineStart: $("#timelineStart"),
    timelineEnd: $("#timelineEnd"),
    timelineCaption: $("#timelineCaption"),
    boardMeta: $("#boardMeta"),
    quoteLabel: $("#quoteLabel"),
    bookWrap: $("#bookWrap"),
    boardTopAnchorSpacer: $("#boardTopAnchorSpacer"),
    boardBottomAnchorSpacer: $("#boardBottomAnchorSpacer"),
    sellRows: $("#sellRows"),
    buyRows: $("#buyRows"),
    bookLayout2: $("#bookLayout2"),
    bookLayout1: $("#bookLayout1"),
    bookLayout3: $("#bookLayout3"),
    bookLayout4: $("#bookLayout4"),
    layout1SellRows: $("#layout1SellRows"),
    layout1BuyRows: $("#layout1BuyRows"),
    layout3Rows: $("#layout3Rows"),
    layout4Rows: $("#layout4Rows"),
    currentRow: $("#currentRow"),
    currentRowLayout1: $("#currentRowLayout1"),
    currentRowLayout3: null,
    currentRowLayout4: null,
    currentPrice: $("#currentPrice"),
    currentPriceLayout1: $("#currentPriceLayout1"),
    currentExecution: $("#currentExecution"),
    currentExecutionLayout1: $("#currentExecutionLayout1"),
    currentTime: $("#currentTime"),
    currentTimeLayout1: $("#currentTimeLayout1"),
    tapeScroll: $("#tapeScroll"),
    tapeRows: $("#tapeRows"),
    tapeCount: $("#tapeCount"),
    intervalModalBackdrop: $("#intervalModalBackdrop"),
    intervalModalInput: $("#intervalModalInput"),
    intervalModalCancel: $("#intervalModalCancel"),
    intervalModalApply: $("#intervalModalApply"),
    settingsModalBackdrop: $("#settingsModalBackdrop"),
    settingsBoardDisplaySelect: $("#settingsBoardDisplaySelect"),
    settingsBoardLayoutSelect: $("#settingsBoardLayoutSelect"),
    settingsBoardDepthSelect: $("#settingsBoardDepthSelect"),
    settingsCurrentAnchorSelect: $("#settingsCurrentAnchorSelect"),
    settingsPriceFollowSelect: $("#settingsPriceFollowSelect"),
    settingsCrosshairSelect: $("#settingsCrosshairSelect"),
    settingsTimeZoomSelect: $("#settingsTimeZoomSelect"),
    settingsCompactUiSelect: $("#settingsCompactUiSelect"),
    settingsHorizontalColorInput: $("#settingsHorizontalColorInput"),
    settingsRayColorInput: $("#settingsRayColorInput"),
    settingsTickTableSelect: $("#settingsTickTableSelect"),
    settingsHypothesisAgeSelect: $("#settingsHypothesisAgeSelect"),
    boardHeightRange: $("#boardHeightRange"),
    boardHeightValue: $("#boardHeightValue"),
    volumeProfileToggle: $("#volumeProfileToggle"),
    volumeProfileToggleLabel: $("#volumeProfileToggleLabel"),
    chartProfileToggle: $("#chartProfileToggle"),
    chartProfileToggleLabel: $("#chartProfileToggleLabel"),
    settingsFlashToggle: $("#settingsFlashToggle"),
    settingsVolumeProfileToggle: $("#settingsVolumeProfileToggle"),
    settingsChartProfileToggle: $("#settingsChartProfileToggle"),
    settingsVolumeProfileShortcutInput: $("#settingsVolumeProfileShortcutInput"),
    settingsChartProfileShortcutInput: $("#settingsChartProfileShortcutInput"),
    settingsVolumeProfileColorInput: $("#settingsVolumeProfileColorInput"),
    settingsVolumeProfileTransparencyRange: $("#settingsVolumeProfileTransparencyRange"),
    settingsVolumeProfileTransparencyValue: $("#settingsVolumeProfileTransparencyValue"),
    settingsChartProfileColorInput: $("#settingsChartProfileColorInput"),
    settingsChartProfileTransparencyRange: $("#settingsChartProfileTransparencyRange"),
    settingsChartProfileTransparencyValue: $("#settingsChartProfileTransparencyValue"),
    settingsCloseButton: $("#settingsCloseButton"),
    settingsApplyButton: $("#settingsApplyButton")
  };

  const STORAGE = {
    boardDisplay: "boardreadtools.board-display.v2",
    boardLayout: "boardreadtools.board-layout.v2",
    volumeProfile: "boardreadtools.volume-profile.v1",
    volumeProfileShortcut: "boardreadtools.volume-profile-shortcut.v1",
    volumeProfileColor: "boardreadtools.volume-profile-color.v1",
    volumeProfileTransparency: "boardreadtools.volume-profile-transparency.v1",
    chartProfile: "boardreadtools.chart-profile.v1",
    chartProfileShortcut: "boardreadtools.chart-profile-shortcut.v1",
    chartProfileColor: "boardreadtools.chart-profile-color.v1",
    chartProfileTransparency: "boardreadtools.chart-profile-transparency.v1",
    boardDepth: "boardreadtools.board-depth.v2",
    currentAnchor: "boardreadtools.current-anchor.v2",
    hypothesisAge: "boardreadtools.hypothesis-age.v2",
    boardHeight: "boardreadtools.board-height.v3",
    flash: "boardreadtools.flash.v2",
    priceFollow: "boardreadtools.price-follow.v1",
    crosshair: "boardreadtools.crosshair.v1",
    timeZoomLatest: "boardreadtools.time-zoom-latest.v1",
    compactUi: "boardreadtools.compact-ui.v1",
    horizontalColor: "boardreadtools.horizontal-color.v1",
    rayColor: "boardreadtools.ray-color.v1",
    tickTablePrefix: "boardreadtools.tick-table.v1."
  };

  const fallbackNames = {
    "1321": "NF日経225",
    "285A": "キオクシアHD",
    "7203": "トヨタ自動車",
    "6857": "アドバンテスト",
    "9984": "ソフトバンクG",
    "6976": "太陽誘電",
    "6981": "村田製作所",
    "5803": "フジクラ",
    "5802": "住友電工",
    "5801": "古河電工",
    "6963": "ローム",
    "7974": "任天堂",
    "5016": "JX金属",
    "6762": "TDK",
    "6752": "パナソニックHD",
    "3697": "SHIFT"
  };

  const DEMO_ASSETS = {
    data: "demo-data/boardreadtools_demo_20260828_6976-7974.jsonl.gz",
    dataFileName: "boardreadtools_demo_20260828_6976-7974.jsonl.gz",
    orders: "demo-data/stockorder_20260828.csv",
    ordersFileName: "stockorder_20260828.csv"
  };

  // JPX「内国株の売買制度／呼値の単位」の価格帯別テーブル。
  // TOPIX500 は TOPIX100・TOPIX Mid400 構成銘柄に適用される。
  const TICK_TABLES = {
    topix500: [[1000, .1], [3000, .5], [5000, 1], [10000, 1], [30000, 5], [50000, 10], [100000, 10], [300000, 50], [500000, 100], [1000000, 100], [3000000, 500], [5000000, 1000], [10000000, 1000], [30000000, 5000], [50000000, 10000], [Infinity, 10000]],
    etf1: [[1000, 1], [3000, 1], [5000, 1], [10000, 1], [30000, 5], [50000, 10], [100000, 10], [300000, 50], [500000, 100], [1000000, 100], [3000000, 500], [5000000, 1000], [10000000, 1000], [30000000, 5000], [Infinity, 10000]],
    other: [[1000, 1], [3000, 1], [5000, 5], [10000, 10], [30000, 10], [50000, 50], [100000, 100], [300000, 100], [500000, 500], [1000000, 1000], [3000000, 1000], [5000000, 5000], [10000000, 10000], [30000000, 10000], [50000000, 50000], [Infinity, 100000]]
  };
  const TICK_TABLE_LABELS = { topix500: "TOPIX500", etf1: "ETF等（1口）", other: "その他の内国株" };
  const KNOWN_TOPIX500_CODES = new Set(["7203", "6857", "9984", "6976", "6981", "5803", "5802", "5801", "6963", "7974", "6752"]);
  const RESERVED_REPLAY_KEYS = new Set(["Z", "X", "A", "S"]);

  const toolButtons = {
    horizontal: els.horizontalTool,
    ray: els.rayTool,
    RR: els.rrTool,
    ENTRY: els.entryTool,
    LC: els.lcTool,
    TP: els.tpTool,
    arrowUp: els.arrowUpTool,
    arrowDown: els.arrowDownTool,
    erase: els.eraseTool
  };

  const DEFAULT_DRAWING_COLORS = {
    horizontal: "#f4c95d",
    ray: "#65d6ff"
  };

  const state = {
    symbols: new Map(),
    selectedSymbol: "6976",
    intervalMs: 15000,
    cursorIndex: 0,
    verificationMode: true,
    playTimer: null,
    importing: false,
    sourceRecordCount: 0,
    sourceBytesRead: 0,
    sourceFiles: [],
    sourceError: "",
    orderEntries: [],
    orderCsvFileName: "",
    boardDisplayMode: safeGet(STORAGE.boardDisplay, "hypothesis") === "live" ? "live" : "hypothesis",
    boardLayout: validBoardLayout(safeGet(STORAGE.boardLayout, "layout3")),
    boardDepth: validDepth(Number(safeGet(STORAGE.boardDepth, "40"))),
    currentAnchorMode: safeGet(STORAGE.currentAnchor, "true") !== "false",
    hypothesisAgeMs: validHypothesisAge(Number(safeGet(STORAGE.hypothesisAge, "180000"))),
    boardHeightVh: Math.max(48, Math.min(100, Number(safeGet(STORAGE.boardHeight, "92")) || 92)),
    flashEnabled: safeGet(STORAGE.flash, "true") !== "false",
    volumeProfileEnabled: safeGet(STORAGE.volumeProfile, "true") !== "false",
    volumeProfileShortcut: storedShortcut(STORAGE.volumeProfileShortcut, "B"),
    volumeProfileColor: storedColor(STORAGE.volumeProfileColor, "#f4c95d"),
    volumeProfileTransparency: validTransparency(Number(safeGet(STORAGE.volumeProfileTransparency, "55"))),
    chartProfileEnabled: safeGet(STORAGE.chartProfile, "true") !== "false",
    chartProfileShortcut: storedShortcut(STORAGE.chartProfileShortcut, "V"),
    chartProfileColor: storedColor(STORAGE.chartProfileColor, "#b7b16d"),
    chartProfileTransparency: validTransparency(Number(safeGet(STORAGE.chartProfileTransparency, "55"))),
    priceFollowMode: safeGet(STORAGE.priceFollow, "true") !== "false",
    crosshairEnabled: safeGet(STORAGE.crosshair, "true") !== "false",
    timeZoomLatest: safeGet(STORAGE.timeZoomLatest, "true") !== "false",
    compactUi: safeGet(STORAGE.compactUi, "true") !== "false",
    toolColors: {
      horizontal: storedColor(STORAGE.horizontalColor, DEFAULT_DRAWING_COLORS.horizontal),
      ray: storedColor(STORAGE.rayColor, DEFAULT_DRAWING_COLORS.ray)
    },
    crosshair: null,
    chartView: { timeSpanMs: 0, timeOffsetMs: 0, priceSpan: 0, priceCenter: null },
    chartScaleDrag: null,
    chartScaleIgnoreClick: false,
    drawingTool: "cursor",
    drawings: [],
    rrRoleIndex: 0,
    chartGeometry: null,
    renderContext: null,
    redrawFrame: 0,
    flashTimer: null,
    anchorFrame: 0,
    draggingDrawingIndex: -1,
    hoveredDrawingIndex: -1
  };

  function safeGet(key, fallback) {
    try {
      return localStorage.getItem(key) ?? fallback;
    } catch (_) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch (_) {
      // ローカルストレージが許可されない環境では、この起動中だけ設定を使う。
    }
  }

  function storedColor(key, fallback) {
    const value = safeGet(key, fallback);
    return /^#[0-9a-f]{6}$/i.test(String(value)) ? String(value) : fallback;
  }

  function colorInputValue(input, fallback) {
    const value = input?.value;
    return /^#[0-9a-f]{6}$/i.test(String(value)) ? String(value) : fallback;
  }

  function validShortcutKey(value, fallback) {
    const normalized = String(value || "").trim().toUpperCase();
    if (!/^[A-Z0-9]$/.test(normalized) || RESERVED_REPLAY_KEYS.has(normalized)) return fallback;
    return normalized;
  }

  function storedShortcut(key, fallback) {
    return validShortcutKey(safeGet(key, fallback), fallback);
  }

  function shortcutInputValue(input, fallback) {
    return validShortcutKey(input?.value, fallback);
  }

  function validDepth(value) {
    return [20, 40, 60, 80].includes(value) ? value : 40;
  }

  function validTransparency(value) {
    return Number.isFinite(value) ? Math.max(0, Math.min(100, Math.round(value))) : 55;
  }

  function validBoardLayout(value) {
    return ["layout1", "layout2", "layout3", "layout4", "layout5"].includes(value) ? value : "layout3";
  }

  function validHypothesisAge(value) {
    return [60000, 180000, 300000].includes(value) ? value : 180000;
  }

  function numberOrNull(value) {
    if (value === null || value === undefined || value === "") return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function parseTimeValue(value) {
    if (!value) return 0;
    let text = String(value).trim();
    if (!text) return 0;
    // データ内の observed_at はタイムゾーンなしの日本時間なので明示する。
    if (/^\d{4}-\d{2}-\d{2}T/.test(text) && !/(Z|[+-]\d{2}:?\d{2})$/i.test(text)) text += "+09:00";
    const epoch = Date.parse(text);
    return Number.isFinite(epoch) ? epoch : 0;
  }

  function parseCsvLine(line) {
    const values = [];
    let value = "";
    let quoted = false;
    for (let index = 0; index < line.length; index += 1) {
      const character = line[index];
      if (character === '"') {
        if (quoted && line[index + 1] === '"') {
          value += '"';
          index += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === "," && !quoted) {
        values.push(value);
        value = "";
      } else {
        value += character;
      }
    }
    values.push(value);
    return values;
  }

  function csvNumber(value) {
    const text = String(value ?? "")
      .replace(/[\uFEFF,\s]/g, "")
      .replace(/[－―ー]/g, "-");
    if (!text || text === "-" || text === "—") return null;
    return numberOrNull(text);
  }

  function parseOrderEpoch(dateValue, timeValue) {
    const dateMatch = String(dateValue || "").match(/(\d{2,4})[./-](\d{1,2})[./-](\d{1,2})/);
    const timeMatch = String(timeValue || "").match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (!dateMatch || !timeMatch) return 0;
    let year = Number(dateMatch[1]);
    if (year < 100) year += 2000;
    const month = Number(dateMatch[2]);
    const day = Number(dateMatch[3]);
    const hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2]);
    const second = Number(timeMatch[3] || 0);
    const epoch = Date.parse(`${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}+09:00`);
    return Number.isFinite(epoch) ? epoch : 0;
  }

  function parseOrderCsv(text) {
    const lines = String(text || "").split(/\r?\n/).filter((line) => line.trim());
    const entries = [];
    for (const line of lines.slice(1)) {
      const columns = parseCsvLine(line);
      // 楽天証券の注文CSVは同じ見出し名が複数あるため、列位置を固定して読む。
      // 0:状態 / 1:銘柄名 / 2:銘柄コード / 5:取引区分 / 7:売買 /
      // 12:受付日時 / 18:約定数 / 19:約定単価 / 20:約定時間
      if (columns[0]?.trim() !== "約定済" || !String(columns[5] || "").includes("新規")) continue;
      const code = String(columns[2] || "").trim();
      const side = String(columns[7] || "").trim();
      const quantity = csvNumber(columns[18]);
      const price = csvNumber(columns[19]);
      const epoch = parseOrderEpoch(columns[12], columns[20]);
      if (!code || !["買", "売"].includes(side) || quantity === null || quantity <= 0 || price === null || epoch <= 0) continue;
      entries.push({
        code,
        name: String(columns[1] || code).trim(),
        side,
        quantity,
        price,
        epoch,
        orderTime: String(columns[12] || "").trim(),
        executionTime: String(columns[20] || "").trim()
      });
    }
    return entries.sort((left, right) => left.epoch - right.epoch || left.code.localeCompare(right.code) || left.price - right.price);
  }

  function recordTime(record) {
    return parseTimeValue(record?.observed_at);
  }

  function jstClock(epoch) {
    const date = new Date(epoch + 9 * 60 * 60 * 1000);
    return {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
      dateKey: date.toISOString().slice(0, 10)
    };
  }

  function isAfterOpening(epoch) {
    if (!Number.isFinite(epoch) || epoch <= 0) return false;
    const clock = jstClock(epoch);
    return clock.hour * 60 + clock.minute >= 9 * 60;
  }

  function regularSessionStartEpoch(data) {
    const reference = data?.firstTime || data?.pricePoints?.[0]?.t || data?.apiOpeningTime || 0;
    if (!Number.isFinite(reference) || reference <= 0) return 0;
    const dateKey = jstClock(reference).dateKey;
    const epoch = Date.parse(`${dateKey}T09:00:00+09:00`);
    return Number.isFinite(epoch) ? epoch : 0;
  }

  function sessionStartEpoch(data) {
    const regular = regularSessionStartEpoch(data);
    const apiOpening = Number.isFinite(data?.apiOpeningTime) && data.apiOpeningTime > 0
      ? data.apiOpeningTime
      : 0;
    // APIの始値時刻が9:03や9:06などの寄り付き時刻を示す場合は、それを起点にする。
    // API時刻がない場合は通常の9:00を起点にし、後段で最初の有効Tickへ寄せる。
    return Math.max(regular, apiOpening);
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "-";
    const units = ["B", "KB", "MB", "GB", "TB"];
    let value = bytes;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
      value /= 1024;
      index += 1;
    }
    return `${value.toFixed(index === 0 ? 0 : value >= 100 ? 0 : 1)} ${units[index]}`;
  }

  function formatNumber(value, digits = 0) {
    const number = numberOrNull(value);
    return number === null ? "-" : number.toLocaleString("ja-JP", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }

  function tickTableStorageKey(code) {
    return `${STORAGE.tickTablePrefix}${String(code || "").trim()}`;
  }

  function tickStepForTable(table, price) {
    const number = numberOrNull(price);
    const rows = TICK_TABLES[table] || TICK_TABLES.other;
    const target = number === null ? 0 : number;
    return rows.find(([upper]) => target <= upper)?.[1] || rows[rows.length - 1][1];
  }

  function tickMatches(price, step) {
    if (!Number.isFinite(price) || !Number.isFinite(step) || step <= 0) return false;
    return Math.abs(price / step - Math.round(price / step)) < 1e-6;
  }

  function samplePrices(data) {
    const sampled = [];
    const pointStride = Math.max(1, Math.floor(data.pricePoints.length / 320));
    const snapshotStride = Math.max(1, Math.floor(data.snapshots.length / 160));
    for (let index = data.firstSessionPointIndex; index < data.pricePoints.length; index += pointStride) sampled.push(data.pricePoints[index].p);
    for (let index = data.firstSessionSnapshotIndex; index < data.snapshots.length; index += snapshotStride) {
      const snapshot = data.snapshots[index];
      for (const row of [...snapshot.sell, ...snapshot.buy]) sampled.push(row[0]);
    }
    return sampled.filter(Number.isFinite);
  }

  function inferTickTable(data) {
    if (KNOWN_TOPIX500_CODES.has(data.code)) return { table: "topix500", source: "登録済み" };
    const name = String(data.name || "");
    const likelyEtf = /ETF|ETN|上場投信|ＮＦ|NF/.test(name);
    const prices = samplePrices(data);
    const candidates = likelyEtf ? ["etf1", "topix500", "other"] : ["topix500", "other"];
    const scores = candidates.map((table) => ({
      table,
      invalid: prices.reduce((count, price) => count + (tickMatches(price, tickStepForTable(table, price)) ? 0 : 1), 0)
    })).sort((left, right) => left.invalid - right.invalid || (left.table === "other" ? -1 : 1));
    const best = scores[0] || { table: "other", invalid: 0 };
    return { table: best.table, source: best.invalid === 0 ? "観測値" : "既定値" };
  }

  function resolveTickTable(data) {
    if (!data) return { table: "other", source: "既定値" };
    const override = safeGet(tickTableStorageKey(data.code), "auto");
    if (["topix500", "etf1", "other"].includes(override)) return { table: override, source: "手動登録" };
    return inferTickTable(data);
  }

  function tickStepForPrice(data, price) {
    return tickStepForTable(data?.tickTable || "other", price);
  }

  function tickDigits(step) {
    return step < 1 ? 1 : 0;
  }

  function alignPriceToTick(data, price) {
    const number = numberOrNull(price);
    if (number === null) return null;
    const step = tickStepForPrice(data, number);
    return Math.round(number / step) * step;
  }

  function formatPrice(value, data = activeData()) {
    const number = numberOrNull(value);
    if (number === null) return "-";
    const step = tickStepForPrice(data, number);
    return formatNumber(number, Math.max(tickDigits(step), Number.isInteger(number) ? 0 : 1));
  }

  function formatTime(epoch) {
    if (!Number.isFinite(epoch) || epoch <= 0) return "-";
    const clock = jstClock(epoch);
    return `${String(clock.hour).padStart(2, "0")}:${String(clock.minute).padStart(2, "0")}:${String(clock.second).padStart(2, "0")}`;
  }

  function formatDateTime(epoch) {
    if (!Number.isFinite(epoch) || epoch <= 0) return "-";
    const date = new Date(epoch + 9 * 60 * 60 * 1000);
    const dateText = `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
    return `${dateText} ${formatTime(epoch)}`;
  }

  function formatShortDateTime(epoch) {
    if (!Number.isFinite(epoch) || epoch <= 0) return "-";
    const date = new Date(epoch + 9 * 60 * 60 * 1000);
    return `${String(date.getUTCMonth() + 1).padStart(2, "0")}/${String(date.getUTCDate()).padStart(2, "0")} ${formatTime(epoch)}`;
  }

  function formatIntervalLabel(intervalMs) {
    const seconds = Math.max(1, Math.round(Number(intervalMs) / 1000));
    if (seconds < 60) return `${seconds}秒足`;
    if (seconds % 86400 === 0) return `${seconds / 86400}日足`;
    if (seconds % 3600 === 0) return `${seconds / 3600}時間足`;
    return `${seconds / 60}分足`;
  }

  function parseIntervalCommand(value) {
    const text = String(value || "").trim().toUpperCase();
    if (!text) return 0;
    if (text.endsWith("S")) return Math.max(1, Number.parseInt(text.slice(0, -1), 10) || 0) * 1000;
    if (text.endsWith("H")) return Math.max(1, Number.parseInt(text.slice(0, -1), 10) || 0) * 60 * 60 * 1000;
    if (text.endsWith("D")) return Math.max(1, Number.parseInt(text.slice(0, -1), 10) || 0) * 24 * 60 * 60 * 1000;
    return Math.max(1, Number.parseInt(text, 10) || 0) * 60 * 1000;
  }

  function percentile(values, ratio) {
    if (!values.length) return 0;
    const index = Math.max(0, Math.min(values.length - 1, Math.floor((values.length - 1) * ratio)));
    return values[index];
  }

  function upperBound(items, value, key = "t") {
    let low = 0;
    let high = items.length;
    while (low < high) {
      const middle = (low + high) >> 1;
      if (Number(items[middle][key]) <= value) low = middle + 1;
      else high = middle;
    }
    return low;
  }

  function firstAtOrAfter(items, value, key = "t") {
    let low = 0;
    let high = items.length;
    while (low < high) {
      const middle = (low + high) >> 1;
      if (Number(items[middle][key]) < value) low = middle + 1;
      else high = middle;
    }
    return low;
  }

  function setStatus(message, kind = "") {
    els.statusText.textContent = message;
    els.statusText.className = `status-text ${kind}`.trim();
  }

  function updateProgress(fraction, message = "") {
    const ratio = Math.max(0, Math.min(1, Number(fraction) || 0));
    els.progressBar.style.width = `${ratio * 100}%`;
    els.progressText.textContent = message;
  }

  function createSymbol(code, name = "") {
    const normalizedCode = String(code || "").trim();
    if (!normalizedCode) return null;
    if (!state.symbols.has(normalizedCode)) {
      state.symbols.set(normalizedCode, {
        code: normalizedCode,
        name: name || fallbackNames[normalizedCode] || normalizedCode,
        records: 0,
        pricePoints: [],
        snapshots: [],
        tape: [],
        priceExecutionByPrice: new Map(),
        candleCache: new Map(),
        lastBoardSignature: "",
        firstTime: 0,
        lastTime: 0,
        firstSessionPointIndex: 0,
        firstSessionSnapshotIndex: 0,
        sessionStartTime: 0,
        openingPrice: null,
        openingTime: 0,
        openingSource: "未確定",
        apiOpeningPrice: null,
        apiOpeningTime: 0,
        tradeLargeThreshold: 0,
        tradeHugeThreshold: 0,
        boardTypicalQty: 0,
        tickTable: "other",
        tickTableSource: "既定値",
        hasAfternoon: false
      });
    }
    const data = state.symbols.get(normalizedCode);
    if (name && data.name === (fallbackNames[normalizedCode] || normalizedCode)) data.name = name;
    return data;
  }

  // 注文件数はデータ提供元によってフィールド名が異なる。
  // KabuステーションAPIの通常の板レスポンスは Price / Qty までで、
  // 件数が付いているエクスポートでは OrderCount や o などが使われる。
  // 約定件数や数量から推測することはしない。
  function readOrderCountValue(value) {
    if (value === null || value === undefined || value === "") return null;
    if (typeof value !== "object") return numberOrNull(value);
    return numberOrNull(
      value.OrderCount
      ?? value.OrderNum
      ?? value.OrderNumber
      ?? value.Count
      ?? value.Num
      ?? value.Orders
      ?? value.orderCount
      ?? value.order_count
      ?? value.orderNumber
      ?? value.order_num
      ?? value.count
      ?? value.num
      ?? value.orders
      ?? value.Order
      ?? value.order
      ?? value.o
    );
  }

  function readSideOrderCount(raw, prefix, level) {
    const candidates = [
      `${prefix}${level}OrderCount`,
      `${prefix}${level}OrderNum`,
      `${prefix}${level}OrderNumber`,
      `${prefix}${level}Count`,
      `${prefix}${level}Num`,
      `${prefix}${level}Orders`,
      `${prefix}${level}Order`,
      `${prefix}OrderCount${level}`,
      `${prefix}OrderNum${level}`,
      `${prefix}OrderNumber${level}`,
      `${prefix}Count${level}`,
      `${prefix}Num${level}`,
      `${prefix}Orders${level}`,
      `${prefix}Order${level}`
    ];
    for (const key of candidates) {
      const count = readOrderCountValue(raw?.[key]);
      if (count !== null) return count;
    }
    return null;
  }

  function readLevels(raw, prefix) {
    if (!raw || typeof raw !== "object") return [];
    const rows = [];
    for (let level = 1; level <= 10; level += 1) {
      const entry = raw[`${prefix}${level}`];
      if (!entry || typeof entry !== "object") continue;
      const price = numberOrNull(entry.Price);
      const quantity = numberOrNull(entry.Qty);
      // KabuStationAPIの取得設定によっては注文件数が入る。現行の保存データに
      // ない場合はnullのままにし、約定件数を注文件数として代用しない。
      const orderCount = readOrderCountValue(entry) ?? readSideOrderCount(raw, prefix, level);
      if (price === null) continue;
      rows.push([price, quantity ?? 0, level, orderCount]);
    }
    return rows;
  }

  function boardSignature(sell, buy, price, volume) {
    return `${price ?? ""}|${volume ?? ""}|${sell.flat().join(",")}|${buy.flat().join(",")}`;
  }

  function processRegister(record) {
    const list = record?.raw?.RegistList;
    if (!Array.isArray(list)) return;
    for (const item of list) {
      if (item?.Symbol) createSymbol(item.Symbol, fallbackNames[item.Symbol] || item.Symbol);
    }
  }

  function processRecord(record) {
    state.sourceRecordCount += 1;
    if (record?.source === "REGISTER") processRegister(record);

    const code = String(record?.symbol || record?.compact?.symbol || record?.raw?.Symbol || "").trim();
    if (!code) return;
    const compact = record.compact && typeof record.compact === "object" ? record.compact : {};
    const raw = record.raw && !Array.isArray(record.raw) && typeof record.raw === "object" ? record.raw : null;
    const name = compact.symbol_name || raw?.SymbolName || fallbackNames[code] || code;
    const data = createSymbol(code, name);
    if (!data) return;
    data.records += 1;

    const observedTime = recordTime(record);
    if (!data.firstTime && observedTime) data.firstTime = observedTime;
    if (observedTime) data.lastTime = observedTime;

    const openingPrice = numberOrNull(raw?.OpeningPrice ?? compact.opening_price);
    const openingTime = parseTimeValue(raw?.OpeningPriceTime ?? compact.opening_price_time);
    if (openingPrice !== null && data.apiOpeningPrice === null) {
      data.apiOpeningPrice = openingPrice;
      data.apiOpeningTime = openingTime;
      data.openingSource = "API始値";
    }

    const price = numberOrNull(compact.current_price ?? raw?.CurrentPrice);
    const volume = numberOrNull(compact.trading_volume ?? raw?.TradingVolume);
    const vwap = numberOrNull(compact.vwap ?? raw?.VWAP);
    const high = numberOrNull(raw?.HighPrice ?? compact.high_price);
    const low = numberOrNull(raw?.LowPrice ?? compact.low_price);
    if (price !== null && observedTime) {
      data.pricePoints.push({ t: observedTime, p: price, v: volume, vwap, high, low, order: data.pricePoints.length });
    }

    const sell = readLevels(raw, "Sell");
    const buy = readLevels(raw, "Buy");
    if ((sell.length || buy.length) && observedTime) {
      const signature = boardSignature(sell, buy, price, volume);
      if (signature !== data.lastBoardSignature || record?.source === "REST_BOARD") {
        data.snapshots.push({ t: observedTime, p: price, v: volume, sell, buy, order: data.snapshots.length });
        data.lastBoardSignature = signature;
      }
    }
  }

  function finaliseSymbol(data) {
    data.pricePoints = data.pricePoints
      .filter((point) => point.t > 0 && point.p !== null)
      .sort((left, right) => left.t - right.t || left.order - right.order);
    data.snapshots = data.snapshots
      .filter((snapshot) => snapshot.t > 0)
      .sort((left, right) => left.t - right.t || left.order - right.order);

    const regularStart = regularSessionStartEpoch(data);
    const preferredStart = sessionStartEpoch(data);
    const firstSearchStart = preferredStart || regularStart;
    data.firstSessionPointIndex = data.pricePoints.findIndex((point) => point.t >= firstSearchStart && isAfterOpening(point.t));
    if (data.firstSessionPointIndex < 0 && regularStart > 0) {
      data.firstSessionPointIndex = data.pricePoints.findIndex((point) => point.t >= regularStart && isAfterOpening(point.t));
    }
    if (data.firstSessionPointIndex < 0) data.firstSessionPointIndex = 0;
    const firstPoint = data.pricePoints[data.firstSessionPointIndex] || data.pricePoints[0] || null;
    // OpeningPriceTimeがないデータは、9:00以降の最初の有効Tickそのものを起点にする。
    data.sessionStartTime = data.apiOpeningTime > 0
      ? (preferredStart || regularStart)
      : (firstPoint?.t || regularStart);
    data.firstSessionSnapshotIndex = firstPoint
      ? Math.min(data.snapshots.length, firstAtOrAfter(data.snapshots, firstPoint.t))
      : 0;
    data.openingPrice = data.apiOpeningPrice ?? firstPoint?.p ?? null;
    data.openingTime = data.apiOpeningTime || data.sessionStartTime || firstPoint?.t || 0;
    if (data.apiOpeningPrice === null) data.openingSource = "9:00以降の最初のTick";
    data.tape = [];
    const tradeQuantities = [];
    let previousPrice = null;
    let previousVolume = null;
    let calculatedVwapNumerator = 0;
    let calculatedVwapVolume = 0;
    let sessionHigh = null;
    let sessionLow = null;
    let executionCount = 0;
    const priceExecutionByPrice = new Map();

    data.pricePoints.forEach((point, index) => {
      point.index = index;
      let deltaVolume = null;
      if (point.v !== null && previousVolume !== null && point.v >= previousVolume) deltaVolume = point.v - previousVolume;
      if (point.v !== null) previousVolume = point.v;
      point.q = deltaVolume;
      const weight = deltaVolume !== null && deltaVolume > 0 ? deltaVolume : 1;
      calculatedVwapNumerator += point.p * weight;
      calculatedVwapVolume += weight;
      point.derivedVwap = calculatedVwapVolume ? calculatedVwapNumerator / calculatedVwapVolume : point.p;

      if (index >= data.firstSessionPointIndex) {
        sessionHigh = Math.max(sessionHigh ?? point.p, point.high ?? point.p, point.p);
        sessionLow = Math.min(sessionLow ?? point.p, point.low ?? point.p, point.p);
        point.sessionHigh = sessionHigh;
        point.sessionLow = sessionLow;
        const direction = previousPrice === null ? 0 : point.p - previousPrice;
        const quantity = deltaVolume !== null && deltaVolume > 0 ? deltaVolume : null;
        if (quantity !== null) {
          executionCount += 1;
          tradeQuantities.push(quantity);
          const priceSeries = priceExecutionByPrice.get(point.p) || { indices: [], volumes: [], counts: [] };
          const previousPriceVolume = priceSeries.volumes.length
            ? priceSeries.volumes[priceSeries.volumes.length - 1]
            : 0;
          const previousPriceCount = priceSeries.counts.length
            ? priceSeries.counts[priceSeries.counts.length - 1]
            : 0;
          priceSeries.indices.push(index);
          priceSeries.volumes.push(previousPriceVolume + quantity);
          priceSeries.counts.push(previousPriceCount + 1);
          priceExecutionByPrice.set(point.p, priceSeries);
        }
        if (direction !== 0 || quantity !== null) {
          data.tape.push({
            t: point.t,
            p: point.p,
            d: direction,
            q: quantity,
            pointIndex: index
          });
        }
      }
      previousPrice = point.p;
    });

    data.priceExecutionByPrice = priceExecutionByPrice;

    tradeQuantities.sort((left, right) => left - right);
    data.tradeLargeThreshold = percentile(tradeQuantities, 0.95);
    data.tradeHugeThreshold = Math.max(percentile(tradeQuantities, 0.99), data.tradeLargeThreshold * 2);

    const boardSample = [];
    data.snapshots.forEach((snapshot, index) => {
      if (index % 18 !== 0) return;
      for (const row of [...snapshot.sell, ...snapshot.buy]) {
        if (Number.isFinite(Number(row[1])) && row[1] > 0) boardSample.push(row[1]);
      }
    });
    boardSample.sort((left, right) => left - right);
    data.boardTypicalQty = percentile(boardSample, 0.5) || 1000;
    const tickTable = resolveTickTable(data);
    data.tickTable = tickTable.table;
    data.tickTableSource = tickTable.source;
    data.hasAfternoon = data.pricePoints.some((point) => {
      const clock = jstClock(point.t);
      return clock.hour * 60 + clock.minute >= 12 * 60 + 30;
    });
    data.candleCache.clear();
  }

  function populateSymbols() {
    const entries = [...state.symbols.values()]
      .filter((data) => data.pricePoints.length || data.snapshots.length)
      .sort((left, right) => left.code.localeCompare(right.code, "en", { numeric: true }));
    els.symbolSelect.replaceChildren();
    for (const data of entries) {
      const option = document.createElement("option");
      option.value = data.code;
      option.textContent = `${data.code}：${data.name}`;
      els.symbolSelect.appendChild(option);
    }
    if (!entries.length) {
      els.symbolSelect.appendChild(new Option("対象銘柄なし", ""));
      setDataControlsEnabled(false);
      return;
    }
    const preferred = entries.some((data) => data.code === state.selectedSymbol) ? state.selectedSymbol : entries[0].code;
    state.selectedSymbol = preferred;
    els.symbolSelect.value = preferred;
    setDataControlsEnabled(true);
  }

  function setDataControlsEnabled(enabled) {
    const controls = [
      els.symbolSelect, els.intervalSelect, els.openIntervalModalButton, els.verifyButton,
      els.prevButton, els.nextButton, els.widePrevButton, els.wideNextButton, els.tickStepInput, els.playButton, els.boardDisplaySelect,
      els.boardLayoutSelect, els.boardDepthSelect, els.settingsButton, els.currentAnchorButton, els.volumeProfileToggle, els.chartProfileToggle, els.flashToggle,
      els.cursorInfoToggle, els.horizontalTool, els.rayTool, els.rrTool, els.entryTool,
      els.lcTool, els.tpTool, els.arrowUpTool, els.arrowDownTool, els.eraseTool,
      els.clearLinesButton, els.lineColor
    ];
    controls.forEach((element) => { element.disabled = !enabled; });
    els.timeSlider.disabled = !enabled;
  }

  function activeData() {
    return state.symbols.get(state.selectedSymbol) || null;
  }

  function currentTick(data) {
    if (!data?.pricePoints.length) return null;
    const index = Math.max(0, Math.min(data.pricePoints.length - 1, Number(state.cursorIndex) || 0));
    return data.pricePoints[index];
  }

  function currentSnapshotIndex(data, tick) {
    if (!data?.snapshots.length || !tick) return -1;
    return upperBound(data.snapshots, tick.t) - 1;
  }

  function currentSnapshot(data, tick) {
    const index = currentSnapshotIndex(data, tick);
    return index >= 0 ? data.snapshots[index] : null;
  }

  function aggregateFullCandles(data, intervalMs) {
    const cached = data.candleCache.get(intervalMs);
    if (cached) return cached;
    const candles = [];
    let current = null;
    const candleAnchor = data.sessionStartTime || data.pricePoints[data.firstSessionPointIndex]?.t || 0;
    for (let index = data.firstSessionPointIndex; index < data.pricePoints.length; index += 1) {
      const point = data.pricePoints[index];
      const elapsed = candleAnchor > 0 ? Math.max(0, point.t - candleAnchor) : point.t;
      const bucket = candleAnchor > 0
        ? candleAnchor + Math.floor(elapsed / intervalMs) * intervalMs
        : Math.floor(point.t / intervalMs) * intervalMs;
      if (!current || current.t !== bucket) {
        const openingCandle = index === data.firstSessionPointIndex && Number.isFinite(Number(data.openingPrice));
        const opening = openingCandle ? Number(data.openingPrice) : point.p;
        current = {
          t: bucket,
          open: opening,
          high: Math.max(opening, point.p),
          low: Math.min(opening, point.p),
          close: point.p,
          volume: point.q && point.q > 0 ? point.q : 0,
          tradeCount: point.q && point.q > 0 ? 1 : 0,
          vwap: point.vwap ?? point.derivedVwap,
          startIndex: index,
          endIndex: index
        };
        candles.push(current);
      } else {
        current.high = Math.max(current.high, point.p);
        current.low = Math.min(current.low, point.p);
        current.close = point.p;
        current.volume += point.q && point.q > 0 ? point.q : 0;
        current.tradeCount += point.q && point.q > 0 ? 1 : 0;
        current.vwap = point.vwap ?? point.derivedVwap ?? current.vwap;
        current.endIndex = index;
      }
    }
    data.candleCache.set(intervalMs, candles);
    return candles;
  }

  function buildPartialCandle(data, source, cursorIndex) {
    let partial = null;
    for (let index = source.startIndex; index <= cursorIndex; index += 1) {
      const point = data.pricePoints[index];
      if (!point) continue;
      if (!partial) {
        const openingCandle = source.startIndex === data.firstSessionPointIndex && Number.isFinite(Number(data.openingPrice));
        const opening = openingCandle ? Number(data.openingPrice) : point.p;
        partial = {
          t: source.t,
          open: opening,
          high: Math.max(opening, point.p),
          low: Math.min(opening, point.p),
          close: point.p,
          volume: point.q && point.q > 0 ? point.q : 0,
          tradeCount: point.q && point.q > 0 ? 1 : 0,
          vwap: point.vwap ?? point.derivedVwap,
          startIndex: source.startIndex,
          endIndex: index
        };
      } else {
        partial.high = Math.max(partial.high, point.p);
        partial.low = Math.min(partial.low, point.p);
        partial.close = point.p;
        partial.volume += point.q && point.q > 0 ? point.q : 0;
        partial.tradeCount += point.q && point.q > 0 ? 1 : 0;
        partial.vwap = point.vwap ?? point.derivedVwap ?? partial.vwap;
        partial.endIndex = index;
      }
    }
    return partial;
  }

  function visibleCandles(data, cursorIndex) {
    const full = aggregateFullCandles(data, state.intervalMs);
    const tick = data.pricePoints[cursorIndex];
    if (!tick || !full.length || cursorIndex < data.firstSessionPointIndex) return [];
    const activeIndex = upperBound(full, tick.t) - 1;
    if (activeIndex < 0) return [];
    const partial = buildPartialCandle(data, full[activeIndex], cursorIndex);
    return partial ? [...full.slice(0, activeIndex), partial] : full.slice(0, activeIndex);
  }

  function renderSummary(data, tick, candles) {
    const sessionTicks = Math.max(0, data.pricePoints.length - data.firstSessionPointIndex);
    const shownTicks = Math.max(0, state.cursorIndex - data.firstSessionPointIndex + 1);
    const allCandles = aggregateFullCandles(data, state.intervalMs).length;
    els.statSymbol.textContent = `${data.code}：${data.name}`;
    els.statTimeframe.textContent = formatIntervalLabel(state.intervalMs);
    const pointsText = `${candles.length}/${allCandles} 足, ${formatNumber(shownTicks)}/${formatNumber(sessionTicks)} Tick`;
    const timeText = formatDateTime(tick?.t);
    els.statPoints.textContent = pointsText;
    els.statPoints.title = pointsText;
    els.statTime.textContent = timeText;
    els.statTime.title = timeText;
    els.statPrice.textContent = formatPrice(tick?.p);
    els.statVolume.textContent = formatNumber(tick?.v);
    els.statVwap.textContent = formatPrice(tick?.vwap ?? tick?.derivedVwap);
    els.statOpen.textContent = formatPrice(data.openingPrice);
    const openingLabel = data.openingPrice !== null
      ? `${data.openingSource} ${formatPrice(data.openingPrice)}（${formatTime(data.openingTime)}）`
      : "始値なし";
    els.statOpen.title = openingLabel;
    els.statRange.textContent = `${formatPrice(tick?.sessionHigh)} / ${formatPrice(tick?.sessionLow)}`;
    const tickSize = tickStepForPrice(data, tick?.p);
    els.statTickSize.textContent = `${formatNumber(tickSize, tickDigits(tickSize))}円 (${TICK_TABLE_LABELS[data.tickTable] || data.tickTable}・${data.tickTableSource})`;
    els.chartHint.textContent = `${data.name} | ${formatIntervalLabel(state.intervalMs)} | ${data.hasAfternoon ? "前場＋後場" : "前場"} | ${openingLabel} | 検証カーソル ${formatDateTime(tick?.t)} まで（未来のTickは非表示） | 下軸クリック: 全時間 / 左軸クリック: 全価格`;
  }

  function cssColor(name, fallback) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  }

  function drawPriceTag(ctx, geometry, price, color, text = formatPrice(price)) {
    if (!Number.isFinite(price)) return;
    const y = geometry.yFor(price);
    if (y < geometry.pad.top - 12 || y > geometry.priceBottom + 12) return;
    ctx.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    const width = Math.max(45, ctx.measureText(text).width + 12);
    const x = geometry.width - geometry.pad.right + 5;
    ctx.fillStyle = color;
    ctx.fillRect(x, y - 10, width, 20);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(text, x + width / 2, y + 4);
    ctx.textAlign = "left";
  }

  function resetTimeView() {
    state.chartView.timeSpanMs = 0;
    state.chartView.timeOffsetMs = 0;
  }

  function resetPriceView() {
    state.chartView.priceSpan = 0;
    state.chartView.priceCenter = null;
  }

  function resetChartView() {
    resetTimeView();
    resetPriceView();
  }

  function zoomTimeView(geometry, epoch, factor) {
    if (!geometry || !Number.isFinite(epoch) || !Number.isFinite(factor) || factor <= 0) return;
    const baseSpan = geometry.baseAxisSpan;
    const minimumSpan = Math.max(state.intervalMs * 3, 1000);
    const oldSpan = geometry.axisSpan;
    const anchor = Math.max(geometry.axisStartEpoch, Math.min(geometry.axisEndEpoch, epoch));
    const latestEpoch = Number.isFinite(geometry.cursorEpoch)
      ? Math.max(geometry.baseAxisStartEpoch, Math.min(geometry.baseAxisEndEpoch, geometry.cursorEpoch))
      : geometry.baseAxisEndEpoch;
    const latestAvailableSpan = Math.max(minimumSpan, latestEpoch - geometry.baseAxisStartEpoch);
    const spanLimit = state.timeZoomLatest ? Math.min(baseSpan, latestAvailableSpan) : baseSpan;
    const nextSpan = Math.max(minimumSpan, Math.min(spanLimit, oldSpan / factor));
    const ratio = oldSpan > 0 ? (anchor - geometry.axisStartEpoch) / oldSpan : .5;
    const maxStart = geometry.baseAxisEndEpoch - nextSpan;
    const anchoredStart = anchor - nextSpan * ratio;
    const latestStart = latestEpoch - nextSpan;
    const nextStart = state.timeZoomLatest
      ? Math.max(geometry.baseAxisStartEpoch, Math.min(maxStart, latestStart))
      : Math.max(geometry.baseAxisStartEpoch, Math.min(maxStart, anchoredStart));
    state.chartView.timeSpanMs = nextSpan >= baseSpan - 1 ? 0 : nextSpan;
    state.chartView.timeOffsetMs = Math.max(0, geometry.baseAxisEndEpoch - (nextStart + nextSpan));
  }

  function zoomPriceView(geometry, price, factor) {
    if (!geometry || !Number.isFinite(price) || !Number.isFinite(factor) || factor <= 0) return;
    const minimumRange = Math.max(tickStepForPrice(activeData(), price) * 4, .0001);
    const nextRange = Math.max(minimumRange, Math.min(geometry.basePriceRange * 60, geometry.range / factor));
    const ratio = geometry.range > 0 ? (geometry.high - price) / geometry.range : .5;
    const nextHigh = price + nextRange * ratio;
    state.chartView.priceSpan = nextRange >= geometry.basePriceRange - .000001 ? 0 : nextRange;
    state.chartView.priceCenter = nextHigh - nextRange / 2;
  }

  function chartAxisZone(event, geometry) {
    const rect = els.chart.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x >= 0 && x < geometry.pad.left && y >= geometry.pad.top && y <= geometry.priceBottom) return "price";
    if (y >= geometry.volumeY + geometry.volumeHeight && y <= geometry.height) return "time";
    return "";
  }

  function drawingX(geometry, epoch) {
    if (epoch <= geometry.axisStartEpoch) return geometry.pad.left;
    if (epoch >= geometry.axisEndEpoch) return geometry.width - geometry.pad.right;
    return geometry.xForEpoch(epoch);
  }

  function drawArrow(ctx, x, y, direction, color) {
    const dy = direction === "up" ? -18 : 18;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + (direction === "up" ? 12 : -12));
    ctx.lineTo(x, y + dy);
    ctx.stroke();
    const arrowY = y + dy;
    ctx.beginPath();
    if (direction === "up") {
      ctx.moveTo(x, arrowY - 4); ctx.lineTo(x - 5, arrowY + 5); ctx.lineTo(x + 5, arrowY + 5);
    } else {
      ctx.moveTo(x, arrowY + 4); ctx.lineTo(x - 5, arrowY - 5); ctx.lineTo(x + 5, arrowY - 5);
    }
    ctx.closePath();
    ctx.fill();
  }

  function tradePlan(data) {
    const positions = Object.fromEntries(
      state.drawings
        .filter((drawing) => drawing.type === "trade")
        .map((drawing) => [drawing.role, drawing.price])
    );
    const entry = Number.isFinite(positions.ENTRY) ? positions.ENTRY : null;
    const details = {};
    for (const role of ["ENTRY", "LC", "TP"]) {
      const price = Number.isFinite(positions[role]) ? positions[role] : null;
      if (price === null) {
        details[role] = { role, price: null, pips: null, ticks: null, digits: 0 };
        continue;
      }
      const referencePrice = entry ?? price;
      const step = tickStepForPrice(data, referencePrice);
      const pips = role === "ENTRY" ? 0 : entry === null ? null : Math.abs(price - entry);
      const ticks = pips === null ? null : step > 0 ? Math.round(pips / step) : 0;
      details[role] = {
        role,
        price,
        pips,
        ticks,
        digits: tickDigits(step)
      };
    }
    const risk = entry !== null && Number.isFinite(positions.LC) ? Math.abs(entry - positions.LC) : null;
    const reward = entry !== null && Number.isFinite(positions.TP) ? Math.abs(positions.TP - entry) : null;
    return {
      positions,
      details,
      risk,
      reward,
      ratio: risk > 0 && reward !== null ? reward / risk : null
    };
  }

  function tradePipsText(detail, includeTicks = false) {
    if (!detail || detail.pips === null) return "";
    const pips = `${formatNumber(detail.pips, detail.digits)} PIPS`;
    if (!includeTicks || detail.role === "ENTRY") return pips;
    return `${pips} / ${formatNumber(detail.ticks)}呼値`;
  }

  function drawDrawings(ctx, geometry, data) {
    const tradeColors = { ENTRY: "#6ea8fe", LC: "#f06b78", TP: "#37c99e" };
    const plan = tradePlan(data);
    for (const [index, drawing] of state.drawings.entries()) {
      const color = drawing.type === "trade" ? tradeColors[drawing.role] : (drawing.color || cssColor("--warning", "#f4c95d"));
      const y = geometry.yFor(drawing.price);
      if (y < geometry.pad.top - 18 || y > geometry.priceBottom + 18) continue;
      if (drawing.type === "arrow") {
        const x = drawingX(geometry, drawing.epoch);
        if (x >= geometry.pad.left && x <= geometry.width - geometry.pad.right) drawArrow(ctx, x, y, drawing.direction, color);
        continue;
      }
      let startX = geometry.pad.left;
      if (drawing.type === "ray" || drawing.type === "trade") {
        startX = Math.max(geometry.pad.left, drawingX(geometry, drawing.startEpoch));
        if (startX > geometry.width - geometry.pad.right) continue;
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = index === state.hoveredDrawingIndex || index === state.draggingDrawingIndex ? 3 : 1.5;
      ctx.setLineDash(drawing.type === "ray" || drawing.type === "trade" ? [8, 4] : []);
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(geometry.width - geometry.pad.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = color;
      ctx.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
      const tradeDetail = drawing.type === "trade" ? plan.details[drawing.role] : null;
      const distance = tradeDetail ? tradePipsText(tradeDetail) : "";
      const label = drawing.type === "trade"
        ? `${drawing.role} ${formatPrice(drawing.price, data)}${distance ? ` / ${distance}` : ""}`
        : formatPrice(drawing.price, data);
      // PIPS付きの長いラベルもキャンバス右端で切れないよう、右端から内側へ揃える。
      ctx.textAlign = "right";
      ctx.fillText(label, geometry.width - 6, y + 4);
      ctx.textAlign = "left";
    }

    const summary = [
      plan.ratio !== null ? `RR 1 : ${plan.ratio.toFixed(2)}` : "",
      ...["ENTRY", "LC", "TP"]
        .filter((role) => plan.details[role].price !== null)
        .map((role) => `${role} ${tradePipsText(plan.details[role], true)}`)
    ].filter(Boolean).join(" | ");
    if (summary) {
      ctx.fillStyle = cssColor("--text", "#e6edf3");
      ctx.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.fillText(summary, geometry.pad.left + 8, geometry.pad.top + 17);
    }
  }

  function drawCsvEntrySignals(ctx, geometry, data, tick) {
    if (!state.orderEntries.length || !tick) return;
    const visibleEntries = state.orderEntries.filter((entry) => (
      entry.code === data.code &&
      entry.epoch <= tick.t &&
      entry.epoch >= geometry.axisStartEpoch &&
      entry.epoch <= geometry.axisEndEpoch
    ));
    if (!visibleEntries.length) return;
    const sameTimeCount = new Map();
    for (const entry of visibleEntries) {
      const y = geometry.yFor(entry.price);
      if (y < geometry.pad.top - 16 || y > geometry.priceBottom + 16) continue;
      const x = drawingX(geometry, entry.epoch);
      const color = entry.side === "買" ? cssColor("--up", "#37c99e") : cssColor("--down", "#f06b78");
      const offsetIndex = sameTimeCount.get(entry.epoch) || 0;
      sameTimeCount.set(entry.epoch, offsetIndex + 1);
      const label = `CSV ENTRY ${entry.side} ${formatPrice(entry.price, data)} ×${formatNumber(entry.quantity)}`;

      ctx.save();
      ctx.strokeStyle = color;
      ctx.globalAlpha = .72;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x, Math.max(geometry.pad.top, y - 27 - offsetIndex * 13));
      ctx.lineTo(x, Math.min(geometry.volumeY + geometry.volumeHeight, y + 27 + offsetIndex * 13));
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
      drawArrow(ctx, x, y, entry.side === "買" ? "up" : "down", color);

      ctx.font = "9px -apple-system, BlinkMacSystemFont, sans-serif";
      const labelWidth = ctx.measureText(label).width + 10;
      const labelX = Math.max(geometry.pad.left + 3, Math.min(geometry.width - geometry.pad.right - labelWidth, x + 7));
      const labelY = entry.side === "買"
        ? Math.max(geometry.pad.top + 12, y - 32 - offsetIndex * 13)
        : Math.min(geometry.priceBottom - 3, y + 42 + offsetIndex * 13);
      ctx.fillStyle = color;
      ctx.fillRect(labelX, labelY - 10, labelWidth, 14);
      ctx.fillStyle = "#081018";
      ctx.textAlign = "left";
      ctx.fillText(label, labelX + 5, labelY);
      ctx.restore();
    }
  }

  function drawVolumeHover(ctx, geometry, crosshair) {
    const candle = crosshair?.candle;
    if (!candle || crosshair.y < geometry.volumeY - 4) return;
    const lines = [
      `${formatShortDateTime(candle.t)} ${formatIntervalLabel(state.intervalMs)}`,
      `出来高 ${formatNumber(candle.volume)}株`,
      `約定 ${formatNumber(candle.tradeCount || 0)} Tick`
    ];
    ctx.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    const boxWidth = Math.max(...lines.map((line) => ctx.measureText(line).width)) + 18;
    const boxHeight = 58;
    const boxX = Math.max(geometry.pad.left + 5, Math.min(geometry.width - geometry.pad.right - boxWidth, crosshair.x + 12));
    const boxY = Math.max(geometry.pad.top + 6, Math.min(geometry.priceBottom - boxHeight - 6, geometry.volumeY - boxHeight - 8));
    ctx.fillStyle = "rgba(13, 19, 28, .96)";
    ctx.strokeStyle = cssColor("--accent", "#6ea8fe");
    ctx.lineWidth = 1;
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
    ctx.fillStyle = cssColor("--text", "#e6edf3");
    lines.forEach((line, index) => ctx.fillText(line, boxX + 9, boxY + 15 + index * 17));
  }

  function chartProfileEntries(data, cursorIndex, low, high) {
    const entries = [];
    for (const price of data.priceExecutionByPrice?.keys() || []) {
      const numericPrice = Number(price);
      if (!Number.isFinite(numericPrice) || numericPrice < low || numericPrice > high) continue;
      const execution = priceExecutionAt(data, numericPrice, cursorIndex);
      const volume = Number(execution?.volume);
      if (execution?.volume === null || execution?.volume === undefined || !Number.isFinite(volume) || volume <= 0) continue;
      entries.push({ price: numericPrice, volume });
    }
    return entries.sort((left, right) => right.price - left.price);
  }

  function drawChartPriceProfile(ctx, geometry, data) {
    if (!state.chartProfileEnabled || state.chartProfileTransparency >= 100) return;
    const entries = chartProfileEntries(data, state.cursorIndex, geometry.low, geometry.high);
    if (!entries.length) return;
    const maximum = Math.max(...entries.map((entry) => entry.volume));
    if (!(maximum > 0)) return;
    const profileLeft = geometry.pad.left + 4;
    const profileWidth = Math.min(190, Math.max(90, geometry.plotWidth * .22));
    const yGaps = entries
      .map((entry, index) => index ? Math.abs(geometry.yFor(entries[index - 1].price) - geometry.yFor(entry.price)) : Infinity)
      .filter((gap) => Number.isFinite(gap) && gap > 0);
    const rowHeight = Math.max(2, Math.min(14, (yGaps.length ? Math.min(...yGaps) : 8) * .72));
    const alpha = 1 - state.chartProfileTransparency / 100;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = state.chartProfileColor;
    for (const entry of entries) {
      const y = geometry.yFor(entry.price);
      const barWidth = Math.max(2, profileWidth * entry.volume / maximum);
      ctx.fillRect(profileLeft, y - rowHeight / 2, barWidth, rowHeight);
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = Math.min(1, alpha + .18);
    ctx.fillStyle = state.chartProfileColor;
    ctx.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("価格帯出来高（現在Tickまで）", profileLeft + 4, geometry.pad.top + 13);
    ctx.restore();
  }

  function drawChart(data, candles, tick) {
    const canvas = els.chart;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width));
    const height = Math.max(320, Math.floor(rect.height));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = cssColor("--panel-2", "#10151c");
    ctx.fillRect(0, 0, width, height);
    state.chartGeometry = null;
    if (!candles.length) {
      ctx.fillStyle = cssColor("--muted", "#8f9baa");
      ctx.font = "13px -apple-system, sans-serif";
      ctx.fillText("価格データがありません", 22, 30);
      return;
    }

    // 15秒足は前場・後場を同じ時間軸で見せる。短い足だけは描画密度を保つため直近に絞る。
    const maxBars = state.intervalMs >= 15000 ? 1500 : 900;
    const allShown = candles.length <= maxBars ? candles : candles.slice(-maxBars);
    const pad = { left: 58, right: 68, top: 20, bottom: 39 };
    const volumeHeight = Math.max(42, Math.floor(height * .16));
    const plotWidth = Math.max(10, width - pad.left - pad.right);
    const priceBottom = height - pad.bottom - volumeHeight - 15;
    const plotHeight = Math.max(10, priceBottom - pad.top);
    const baseAxisStartEpoch = allShown[0].t;
    const observedAxisEndEpoch = allShown[allShown.length - 1].t;
    const sessionDate = jstClock(tick?.t || observedAxisEndEpoch).dateKey;
    const firstViewEndEpoch = Date.parse(`${sessionDate}T09:30:00+09:00`);
    const baseAxisEndEpoch = Math.max(observedAxisEndEpoch, firstViewEndEpoch);
    const baseAxisSpan = Math.max(state.intervalMs, baseAxisEndEpoch - baseAxisStartEpoch);
    const requestedTimeSpan = state.chartView.timeSpanMs || baseAxisSpan;
    const viewTimeSpan = Math.max(state.intervalMs, Math.min(baseAxisSpan, requestedTimeSpan));
    const maxTimeOffset = Math.max(0, baseAxisSpan - viewTimeSpan);
    const timeOffset = Math.max(0, Math.min(maxTimeOffset, state.chartView.timeOffsetMs || 0));
    const axisEndEpoch = baseAxisEndEpoch - timeOffset;
    const axisStartEpoch = Math.max(baseAxisStartEpoch, axisEndEpoch - viewTimeSpan);
    const shown = allShown.filter((candle) => candle.t >= axisStartEpoch && candle.t <= axisEndEpoch);
    if (!shown.length) shown.push(allShown[allShown.length - 1]);
    const vwapValues = shown.map((candle) => candle.vwap).filter(Number.isFinite);
    const guidePrices = [data.openingPrice, ...vwapValues].filter(Number.isFinite);
    let baseLow = Math.min(...shown.map((candle) => candle.low), ...guidePrices);
    let baseHigh = Math.max(...shown.map((candle) => candle.high), ...guidePrices);
    if (baseLow === baseHigh) { baseLow -= 1; baseHigh += 1; }
    const rangePadding = Math.max((baseHigh - baseLow) * .06, 1);
    baseLow -= rangePadding;
    baseHigh += rangePadding;
    const basePriceRange = baseHigh - baseLow;
    const requestedPriceSpan = state.chartView.priceSpan || basePriceRange;
    const range = Math.max(Math.max(tickStepForPrice(data, tick?.p) * 4, .0001), requestedPriceSpan);
    let center = Number.isFinite(state.chartView.priceCenter) ? state.chartView.priceCenter : (baseHigh + baseLow) / 2;
    if (state.priceFollowMode && state.chartView.priceSpan && Number.isFinite(tick?.p)) {
      const currentLow = center - range / 2;
      const currentHigh = center + range / 2;
      const followMargin = range * .08;
      if (tick.p < currentLow + followMargin || tick.p > currentHigh - followMargin) {
        center = tick.p;
        state.chartView.priceCenter = center;
      }
    }
    const high = center + range / 2;
    const low = center - range / 2;
    const maxVolume = Math.max(1, ...shown.map((candle) => candle.volume || 0));
    const volumeThresholdValues = shown.map((candle) => candle.volume).filter((value) => value > 0).sort((left, right) => left - right);
    const largeVolumeThreshold = percentile(volumeThresholdValues, .95);
    const axisSpan = Math.max(state.intervalMs, axisEndEpoch - axisStartEpoch);
    const xFor = (index) => pad.left + (shown[index].t - axisStartEpoch) / axisSpan * plotWidth;
    const xForEpoch = (epoch) => pad.left + (epoch - axisStartEpoch) / axisSpan * plotWidth;
    const yFor = (price) => pad.top + (high - price) / range * plotHeight;
    const volumeY = priceBottom + 15;
    const geometry = { width, height, pad, priceBottom, plotWidth, plotHeight, low, high, range, baseLow, baseHigh, basePriceRange, shown, xFor, xForEpoch, yFor, volumeY, volumeHeight, axisStartEpoch, axisEndEpoch, axisSpan, baseAxisStartEpoch, baseAxisEndEpoch, baseAxisSpan, cursorEpoch: tick?.t };
    state.chartGeometry = geometry;

    ctx.strokeStyle = cssColor("--grid", "#26313d");
    ctx.fillStyle = cssColor("--muted", "#8f9baa");
    ctx.font = "10px -apple-system, sans-serif";
    ctx.textAlign = "right";
    for (let line = 0; line <= 4; line += 1) {
      const y = pad.top + plotHeight * line / 4;
      const value = high - range * line / 4;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(width - pad.right, y); ctx.stroke();
      ctx.fillText(formatPrice(alignPriceToTick(data, value), data), pad.left - 8, y + 3);
    }
    ctx.textAlign = "left";

    drawChartPriceProfile(ctx, geometry, data);

    const candleWidth = Math.max(1, Math.min(15, plotWidth * state.intervalMs / axisSpan * .68));
    shown.forEach((candle, index) => {
      const x = xFor(index);
      const up = candle.close >= candle.open;
      const color = up ? cssColor("--up", "#37c99e") : cssColor("--down", "#f06b78");
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, yFor(candle.high)); ctx.lineTo(x, yFor(candle.low)); ctx.stroke();
      const top = Math.min(yFor(candle.open), yFor(candle.close));
      const bodyHeight = Math.max(1, Math.abs(yFor(candle.open) - yFor(candle.close)));
      ctx.fillRect(x - candleWidth / 2, top, candleWidth, bodyHeight);
      const volumeBarHeight = candle.volume / maxVolume * volumeHeight;
      ctx.globalAlpha = .36;
      ctx.fillRect(x - Math.max(1, candleWidth / 2), volumeY + volumeHeight - volumeBarHeight, Math.max(1, candleWidth), volumeBarHeight);
      ctx.globalAlpha = 1;
      if (largeVolumeThreshold > 0 && candle.volume >= largeVolumeThreshold) {
        ctx.strokeStyle = cssColor("--warning", "#f4c95d");
        ctx.lineWidth = 1.4;
        ctx.strokeRect(x - Math.max(1, candleWidth / 2) - 1, volumeY + volumeHeight - volumeBarHeight - 1, Math.max(2, candleWidth) + 2, Math.max(3, volumeBarHeight) + 2);
      }
    });

    if (data.openingPrice !== null) {
      const y = yFor(data.openingPrice);
      ctx.strokeStyle = cssColor("--opening", "#ff9f43");
      ctx.lineWidth = 1.5;
      ctx.setLineDash([7, 4]);
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(width - pad.right, y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = cssColor("--opening", "#ff9f43");
      ctx.font = "11px -apple-system, sans-serif";
      ctx.fillText(`始値 ${formatPrice(data.openingPrice)}`, pad.left + 5, Math.max(pad.top + 12, y - 6));
    }

    if (data.hasAfternoon) {
      const sessionDate = jstClock(axisStartEpoch).dateKey;
      const afternoonEpoch = Date.parse(`${sessionDate}T12:30:00+09:00`);
      if (afternoonEpoch > axisStartEpoch && afternoonEpoch < axisEndEpoch) {
        const afternoonX = xForEpoch(afternoonEpoch);
        ctx.strokeStyle = "#596579";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(afternoonX, pad.top); ctx.lineTo(afternoonX, volumeY + volumeHeight); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#9aa8ba";
        ctx.font = "10px -apple-system, sans-serif";
        ctx.fillText("後場 12:30", afternoonX + 4, pad.top + 13);
      }
    }

    const vwapPath = shown.map((candle) => candle.vwap).filter(Number.isFinite).length > 1;
    if (vwapPath) {
      ctx.strokeStyle = "#65d6ff";
      ctx.lineWidth = 1.25;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      shown.forEach((candle, index) => {
        const value = candle.vwap;
        if (!Number.isFinite(value)) return;
        if (index === 0) ctx.moveTo(xFor(index), yFor(value));
        else ctx.lineTo(xFor(index), yFor(value));
      });
      ctx.stroke();
      ctx.setLineDash([]);
    }

    const activeIndex = shown.length - 1;

    drawCsvEntrySignals(ctx, geometry, data, tick);
    drawDrawings(ctx, geometry, data);

    if (state.crosshair && state.crosshairEnabled) {
      const x = Math.max(pad.left, Math.min(width - pad.right, state.crosshair.x));
      const y = Math.max(pad.top, Math.min(priceBottom, state.crosshair.y));
      ctx.strokeStyle = cssColor("--muted", "#8f9baa");
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(pad.left, y); ctx.lineTo(width - pad.right, y);
      ctx.moveTo(x, pad.top); ctx.lineTo(x, volumeY + volumeHeight);
      ctx.stroke();
      ctx.setLineDash([]);
      drawPriceTag(ctx, geometry, state.crosshair.price, cssColor("--accent", "#6ea8fe"));
      const timeText = formatTime(state.crosshair.epoch);
      ctx.font = "10px -apple-system, sans-serif";
      const timeWidth = Math.max(54, ctx.measureText(timeText).width + 12);
      const timeX = Math.max(pad.left, Math.min(width - pad.right - timeWidth, x - timeWidth / 2));
      ctx.fillStyle = cssColor("--accent", "#6ea8fe");
      ctx.fillRect(timeX, height - 29, timeWidth, 18);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(timeText, timeX + timeWidth / 2, height - 16);
      ctx.textAlign = "left";
      els.chartCursor.textContent = `${formatDateTime(state.crosshair.epoch)} / ${formatPrice(state.crosshair.price)}`;
    } else {
      drawPriceTag(ctx, geometry, tick?.p, tick?.p >= shown[activeIndex].open ? cssColor("--up", "#37c99e") : cssColor("--down", "#f06b78"));
      els.chartCursor.textContent = formatDateTime(tick?.t);
    }

    if (state.crosshair && state.crosshairEnabled) drawVolumeHover(ctx, geometry, state.crosshair);

    ctx.fillStyle = cssColor("--muted", "#8f9baa");
    ctx.font = "10px -apple-system, sans-serif";
    const timeLabelCount = Math.max(3, Math.min(8, Math.floor(plotWidth / 115)));
    for (let index = 0; index <= timeLabelCount; index += 1) {
      const fraction = index / timeLabelCount;
      const epoch = axisStartEpoch + axisSpan * fraction;
      const x = xForEpoch(epoch);
      ctx.textAlign = index === 0 ? "left" : index === timeLabelCount ? "right" : "center";
      ctx.fillText(formatTime(epoch), x, height - 12);
    }
    ctx.textAlign = "left";
  }

  function boardOrderKind(data, quantity) {
    if (!Number.isFinite(quantity) || quantity <= 0) return "";
    const large = Math.max(10000, data.boardTypicalQty * 3);
    const huge = Math.max(30000, data.boardTypicalQty * 6);
    if (quantity >= huge) return "huge-order";
    if (quantity >= large) return "large-order";
    return "";
  }

  function normalizeLiveBoard(snapshot, currentPrice) {
    const rowsByPrice = new Map();
    for (const row of [...snapshot.sell, ...snapshot.buy]) {
      const price = numberOrNull(row[0]);
      if (price === null || !Number.isFinite(currentPrice) || price === currentPrice) continue;
      rowsByPrice.set(price, {
        price,
        quantity: numberOrNull(row[1]) ?? 0,
        level: row[2],
        orderCount: numberOrNull(row[3]),
        side: price > currentPrice ? "sell" : "buy",
        historical: false
      });
    }
    const rowsPerSide = Math.max(1, Math.floor(state.boardDepth / 2));
    const sellClosest = [...rowsByPrice.values()]
      .filter((row) => row.side === "sell")
      .sort((left, right) => left.price - right.price)
      .slice(0, Math.min(10, rowsPerSide));
    const buyClosest = [...rowsByPrice.values()]
      .filter((row) => row.side === "buy")
      .sort((left, right) => right.price - left.price)
      .slice(0, Math.min(10, rowsPerSide));
    return {
      // 売りは現在値に近い順が下側、買いは近い順が上側になるように描く。
      sell: sellClosest.sort((left, right) => right.price - left.price),
      buy: buyClosest.sort((left, right) => right.price - left.price)
    };
  }

  function getHypothesisRows(data, snapshotIndex, liveRows, currentPrice) {
    if (snapshotIndex < 0 || state.boardDisplayMode !== "hypothesis") return { sell: [], buy: [] };
    const snapshot = data.snapshots[snapshotIndex];
    if (!snapshot) return { sell: [], buy: [] };
    const startTime = snapshot.t - state.hypothesisAgeMs;
    const startIndex = Math.max(data.firstSessionSnapshotIndex, firstAtOrAfter(data.snapshots, startTime));
    const newestByPrice = new Map();
    for (let index = snapshotIndex; index >= startIndex; index -= 1) {
      const item = data.snapshots[index];
      for (const row of [...item.sell, ...item.buy]) {
        const price = numberOrNull(row[0]);
        if (price === null || price === currentPrice || newestByPrice.has(price)) continue;
        newestByPrice.set(price, {
          price,
          quantity: numberOrNull(row[1]) ?? 0,
          level: row[2],
          orderCount: numberOrNull(row[3]),
          observedAt: item.t,
          historical: true
        });
      }
    }
    const livePrices = new Set(liveRows.map((row) => row.price));
    const liveSellBoundary = Math.max(...liveRows.filter((row) => row.side === "sell").map((row) => row.price), -Infinity);
    const liveBuyBoundary = Math.min(...liveRows.filter((row) => row.side === "buy").map((row) => row.price), Infinity);
    const sell = [];
    const buy = [];
    for (const row of newestByPrice.values()) {
      if (livePrices.has(row.price)) continue;
      const ageMs = Math.max(0, snapshot.t - row.observedAt);
      if (ageMs > state.hypothesisAgeMs) continue;
      if (row.price > currentPrice && row.price > liveSellBoundary) sell.push({ ...row, side: "sell", ageMs });
      if (row.price < currentPrice && row.price < liveBuyBoundary) buy.push({ ...row, side: "buy", ageMs });
    }
    const rowsPerSide = Math.max(1, Math.floor(state.boardDepth / 2));
    const sellSlots = Math.max(0, rowsPerSide - liveRows.filter((row) => row.side === "sell").length);
    const buySlots = Math.max(0, rowsPerSide - liveRows.filter((row) => row.side === "buy").length);
    return {
      sell: sell.sort((left, right) => left.price - right.price).slice(0, sellSlots).sort((left, right) => right.price - left.price),
      buy: buy.sort((left, right) => right.price - left.price).slice(0, buySlots)
    };
  }

  // 現在の注文板から消えた価格でも、約定ログに数量が残っている価格は
  // 「価格別約定履歴」として板の下（または上）へ残す。注文数量とは別物なので、
  // 表示本数の制限をかけず、book-wrap のスクロールで全価格を確認できるようにする。
  function getExecutionHistoryRows(data, cursorIndex, currentPrice, occupiedPrices) {
    if (!Number.isFinite(Number(currentPrice))) return { sell: [], buy: [] };
    const sell = [];
    const buy = [];
    for (const price of data.priceExecutionByPrice?.keys() || []) {
      const numericPrice = Number(price);
      if (!Number.isFinite(numericPrice) || numericPrice === Number(currentPrice) || occupiedPrices.has(numericPrice)) continue;
      const execution = priceExecutionAt(data, numericPrice, cursorIndex);
      if (execution.volume === null) continue;
      const row = {
        price: numericPrice,
        quantity: null,
        orderCount: null,
        level: null,
        executionHistory: true,
        execution
      };
      if (numericPrice > Number(currentPrice)) sell.push({ ...row, side: "sell" });
      else buy.push({ ...row, side: "buy" });
    }
    return {
      sell: sell.sort((left, right) => right.price - left.price),
      buy: buy.sort((left, right) => right.price - left.price)
    };
  }

  function hypothesisAgeText(ageMs) {
    const seconds = Math.round(ageMs / 1000);
    return seconds < 60 ? `${seconds}秒前` : `${Math.floor(seconds / 60)}分前`;
  }

  function appendZone(tbody, label, kind, colspan = 3) {
    const row = document.createElement("tr");
    row.className = `book-zone ${kind}`;
    const cell = document.createElement("td");
    cell.colSpan = colspan;
    cell.textContent = label;
    row.appendChild(cell);
    tbody.appendChild(row);
  }

  function priceExecutionAt(data, price, cursorIndex) {
    const series = data.priceExecutionByPrice?.get(Number(price));
    if (!series?.indices.length) return { volume: null, count: 0 };
    let low = 0;
    let high = series.indices.length;
    while (low < high) {
      const middle = (low + high) >> 1;
      if (series.indices[middle] <= cursorIndex) low = middle + 1;
      else high = middle;
    }
    const index = low - 1;
    if (index < 0) return { volume: null, count: 0 };
    return { volume: series.volumes[index], count: series.counts[index] };
  }

  function executionVolumeMax(data, rows, tick) {
    let maximum = 0;
    for (const row of rows || []) {
      const execution = row.execution || priceExecutionAt(data, row.price, state.cursorIndex);
      const volume = Number(execution?.volume);
      if (execution?.volume !== null && execution?.volume !== undefined && Number.isFinite(volume)) maximum = Math.max(maximum, volume);
    }
    if (tick) {
      const current = priceExecutionAt(data, tick.p, state.cursorIndex);
      const volume = Number(current?.volume);
      if (current?.volume !== null && current?.volume !== undefined && Number.isFinite(volume)) maximum = Math.max(maximum, volume);
    }
    return maximum;
  }

  function linkedBoardMarkers(data) {
    const markers = [];
    const tradeColors = { ENTRY: "#6ea8fe", LC: "#f06b78", TP: "#37c99e" };
    if (Number.isFinite(Number(data?.openingPrice))) {
      markers.push({
        price: alignPriceToTick(data, Number(data.openingPrice)),
        color: "#ff9f43",
        label: "始値"
      });
    }
    for (const drawing of state.drawings) {
      if (!["horizontal", "ray"].includes(drawing.type) || !Number.isFinite(Number(drawing.price))) continue;
      markers.push({
        price: alignPriceToTick(data, Number(drawing.price)),
        color: drawing.color || (drawing.type === "ray" ? "#65d6ff" : "#f4c95d"),
        label: drawing.type === "ray" ? "レイ" : "水平線"
      });
    }
    const plan = tradePlan(data);
    for (const drawing of state.drawings) {
      if (drawing.type !== "trade" || !Number.isFinite(Number(drawing.price))) continue;
      const detail = plan.details[drawing.role];
      const distance = tradePipsText(detail);
      markers.push({
        price: alignPriceToTick(data, Number(drawing.price)),
        color: tradeColors[drawing.role] || "#6ea8fe",
        label: `${drawing.role}${distance ? ` ${distance}` : ""}`
      });
    }
    return markers.filter((marker, index, all) => Number.isFinite(marker.price) && all.findIndex((item) => item.price === marker.price && item.color === marker.color) === index);
  }

  function executionCountTitle(execution) {
    if (execution.count > 0) {
      const average = execution.volume !== null
        ? ` / 平均${formatNumber(Math.round(execution.volume / execution.count))}株/回`
        : "";
      return `${formatNumber(execution.count)}回の約定（現在Tickまで）${average}。参加者数そのものではありません`;
    }
    return "現在Tickまでの約定件数なし";
  }

  function orderCountText(row) {
    return row.orderCount === null || row.orderCount === undefined ? "-" : formatNumber(row.orderCount);
  }

  function orderCountTitle(row) {
    return row.orderCount === null || row.orderCount === undefined
      ? "元データに板の注文件数がありません"
      : "現在板に表示されている注文件数";
  }

  function appendExecutionVolumeCell(cell, execution, volumeMax) {
    cell.className = "execution-volume";
    const volume = Number(execution?.volume);
    const hasVolume = execution?.volume !== null && execution?.volume !== undefined && Number.isFinite(volume);
    if (!hasVolume) {
      cell.textContent = "-";
      cell.title = "現在Tickまでのこの価格帯の約定なし";
      return;
    }
    if (state.volumeProfileEnabled && volumeMax > 0) {
      const profile = document.createElement("span");
      profile.className = "volume-profile";
      profile.style.setProperty("--volume-profile-width", `${Math.max(2, Math.min(100, volume / volumeMax * 100))}%`);
      const bar = document.createElement("span");
      bar.className = "volume-profile-bar";
      bar.style.background = state.volumeProfileColor;
      bar.style.borderRightColor = state.volumeProfileColor;
      bar.style.opacity = String(1 - state.volumeProfileTransparency / 100);
      const value = document.createElement("span");
      value.className = "volume-profile-value";
      value.textContent = formatNumber(volume);
      profile.append(bar, value);
      cell.replaceChildren(profile);
      cell.title = `${formatNumber(volume)}株（現在Tickまで）。棒の長さは表示中価格帯の最大出来高を100%とした相対表示`;
      return;
    }
    cell.textContent = formatNumber(volume);
    cell.title = `${formatNumber(volume)}株（現在Tickまで）`;
  }

  function appendBoardRow(tbody, data, row, side, markers = null) {
    const tr = document.createElement("tr");
    const orderKind = boardOrderKind(data, row.quantity);
    const marker = (markers || linkedBoardMarkers(data)).find((item) => item.price === alignPriceToTick(data, row.price));
    const execution = priceExecutionAt(data, row.price, state.cursorIndex);
    tr.className = `${side}-row ${orderKind}${row.executionHistory ? " execution-history-row" : ""}${marker ? " board-linked-line" : ""}`.trim();
    if (marker) {
      tr.style.setProperty("--board-line-color", marker.color);
    }
    const price = document.createElement("td");
    const executionVolume = document.createElement("td");
    const executionCount = document.createElement("td");
    const quantity = document.createElement("td");
    const orderCount = document.createElement("td");
    executionVolume.className = "execution-volume";
    executionCount.className = "execution-count-cell";
    orderCount.className = "order-count-cell";
    if (marker) price.dataset.lineLabel = marker.label;
    price.textContent = formatPrice(row.price);
    executionVolume.textContent = execution.volume === null ? "-" : formatNumber(execution.volume);
    executionVolume.title = execution.volume === null
      ? "現在Tickまでのこの価格帯の約定なし"
      : `${formatNumber(execution.volume)}株（現在Tickまで）`;
    executionCount.textContent = execution.count > 0 ? formatNumber(execution.count) : "-";
    executionCount.title = executionCountTitle(execution);
    orderCount.textContent = orderCountText(row);
    orderCount.title = orderCountTitle(row);
    quantity.append(document.createTextNode(formatNumber(row.quantity)));
    if (orderKind) {
      const badge = document.createElement("span");
      badge.className = "order-badge";
      badge.textContent = orderKind === "huge-order" ? "特大" : "大口";
      quantity.appendChild(badge);
    }
    if (row.historical) {
      const badge = document.createElement("span");
      badge.className = "order-badge history-badge";
      badge.textContent = `仮説 ${hypothesisAgeText(row.ageMs)}`;
      quantity.appendChild(badge);
    }
    if (row.executionHistory) {
      const badge = document.createElement("span");
      badge.className = "order-badge execution-history-badge";
      badge.textContent = "過去ログ";
      quantity.appendChild(badge);
      tr.title = `${formatPrice(row.price)}円の約定履歴（現在Tickまで）`;
    }
    tr.append(price, executionVolume, executionCount, quantity, orderCount);
    tbody.appendChild(tr);
  }

  function appendLayout1Row(tbody, data, row, side, markers = null) {
    const tr = document.createElement("tr");
    const orderKind = boardOrderKind(data, row.quantity);
    const marker = (markers || linkedBoardMarkers(data)).find((item) => item.price === alignPriceToTick(data, row.price));
    tr.className = `${side}-row ${orderKind}${row.executionHistory ? " execution-history-row" : ""}${marker ? " board-linked-line" : ""}`.trim();
    if (marker) tr.style.setProperty("--board-line-color", marker.color);

    const sellCount = document.createElement("td");
    const price = document.createElement("td");
    const buyCount = document.createElement("td");
    const blank = () => document.createElement("td");
    const orderCount = orderCountText(row);
    const quantityCell = document.createElement("td");
    quantityCell.append(document.createTextNode(formatNumber(row.quantity)));
    if (orderKind) {
      const badge = document.createElement("span");
      badge.className = "order-badge";
      badge.textContent = orderKind === "huge-order" ? "特大" : "大口";
      quantityCell.appendChild(badge);
    }
    if (row.historical) {
      const badge = document.createElement("span");
      badge.className = "order-badge history-badge";
      badge.textContent = `仮説 ${hypothesisAgeText(row.ageMs)}`;
      quantityCell.appendChild(badge);
    }
    if (row.executionHistory) {
      const badge = document.createElement("span");
      badge.className = "order-badge execution-history-badge";
      badge.textContent = "過去ログ";
      quantityCell.appendChild(badge);
      tr.title = `${formatPrice(row.price)}円の約定履歴（現在Tickまで）`;
    }

    price.textContent = formatPrice(row.price);
    if (marker) price.dataset.lineLabel = marker.label;
    if (side === "sell") {
      sellCount.textContent = orderCount;
      sellCount.title = orderCountTitle(row);
      tr.append(sellCount, quantityCell, price, blank(), blank());
    } else {
      buyCount.textContent = orderCount;
      buyCount.title = orderCountTitle(row);
      tr.append(blank(), blank(), price, quantityCell, buyCount);
    }
    tbody.appendChild(tr);
  }

  function boardStatusText(row) {
    if (row.executionHistory) return "過去ログ";
    if (row.historical) return `仮説 ${hypothesisAgeText(row.ageMs)}`;
    return row.side === "sell" ? "実板・売" : "実板・買";
  }

  function appendBoardStatusCell(row) {
    const cell = document.createElement("td");
    cell.className = "board-status-cell";
    const status = document.createElement("span");
    const statusKind = row.executionHistory ? "history" : row.historical ? "hypothesis" : row.side === "sell" ? "sell" : "buy";
    status.className = `board-status board-status-${statusKind}`;
    status.textContent = boardStatusText(row);
    cell.appendChild(status);
    cell.title = row.executionHistory
      ? "現在の注文板から消えた価格の約定履歴"
      : row.historical
        ? `直近${hypothesisAgeText(row.ageMs)}に観測された仮説板`
        : row.side === "sell" ? "現在の売り注文板" : "現在の買い注文板";
    return cell;
  }

  function appendBoardQuantityCell(data, row) {
    const cell = document.createElement("td");
    cell.textContent = formatNumber(row.quantity);
    if (row.quantity !== null && row.quantity !== undefined) {
      const orderKind = boardOrderKind(data, row.quantity);
      if (orderKind) {
        const badge = document.createElement("span");
        badge.className = "order-badge";
        badge.textContent = orderKind === "huge-order" ? "特大" : "大口";
        cell.appendChild(badge);
      }
    }
    return cell;
  }

  function appendLayout3Row(tbody, data, row, markers = null, volumeMax = 0) {
    const tr = document.createElement("tr");
    const marker = (markers || linkedBoardMarkers(data)).find((item) => item.price === alignPriceToTick(data, row.price));
    const execution = row.execution || priceExecutionAt(data, row.price, state.cursorIndex);
    tr.className = `${row.side}-row${row.historical ? " historical-row" : ""}${row.executionHistory ? " execution-history-row" : ""}${marker ? " board-linked-line" : ""}`.trim();
    if (marker) tr.style.setProperty("--board-line-color", marker.color);

    const price = document.createElement("td");
    if (marker) price.dataset.lineLabel = marker.label;
    price.textContent = formatPrice(row.price);
    const executionVolume = document.createElement("td");
    appendExecutionVolumeCell(executionVolume, execution, volumeMax);
    const executionCount = document.createElement("td");
    executionCount.className = "execution-count-cell";
    executionCount.textContent = execution.count > 0 ? formatNumber(execution.count) : "-";
    executionCount.title = executionCountTitle(execution);
    const boardCount = document.createElement("td");
    boardCount.className = "order-count-cell";
    boardCount.textContent = orderCountText(row);
    boardCount.title = orderCountTitle(row);
    tr.append(price, appendBoardStatusCell(row), executionVolume, executionCount, appendBoardQuantityCell(data, row), boardCount);
    tbody.appendChild(tr);
  }

  function appendLayout4Row(tbody, data, row, markers = null) {
    const tr = document.createElement("tr");
    const marker = (markers || linkedBoardMarkers(data)).find((item) => item.price === alignPriceToTick(data, row.price));
    const execution = row.execution || priceExecutionAt(data, row.price, state.cursorIndex);
    tr.className = `${row.side}-row${row.historical ? " historical-row" : ""}${row.executionHistory ? " execution-history-row" : ""}${marker ? " board-linked-line" : ""}`.trim();
    if (marker) tr.style.setProperty("--board-line-color", marker.color);

    const price = document.createElement("td");
    if (marker) price.dataset.lineLabel = marker.label;
    price.textContent = formatPrice(row.price);
    const executionVolume = document.createElement("td");
    executionVolume.className = "execution-volume";
    executionVolume.textContent = execution.volume === null ? "-" : formatNumber(execution.volume);
    executionVolume.title = execution.volume === null
      ? "現在Tickまでのこの価格帯の約定なし"
      : `${formatNumber(execution.volume)}株（現在Tickまで）`;
    const executionCount = document.createElement("td");
    executionCount.className = "execution-count-cell";
    executionCount.textContent = execution.count > 0 ? formatNumber(execution.count) : "-";
    executionCount.title = executionCountTitle(execution);
    const boardCount = document.createElement("td");
    boardCount.className = "order-count-cell";
    boardCount.textContent = orderCountText(row);
    boardCount.title = orderCountTitle(row);
    tr.append(price, executionVolume, executionCount, appendBoardQuantityCell(data, row), boardCount, appendBoardStatusCell(row));
    tbody.appendChild(tr);
  }

  function appendAnalysisCurrentRow(tbody, data, tick, layout, volumeMax = 0) {
    const execution = priceExecutionAt(data, tick.p, state.cursorIndex);
    const tr = document.createElement("tr");
    tr.id = layout === "layout3" ? "currentRowLayout3" : "currentRowLayout4";
    tr.className = `current-row ${layout === "layout3" ? "layout3-current-row" : "layout4-current-row"}`;
    const volume = execution.volume === null ? "-" : formatNumber(execution.volume);
    const count = execution.count > 0 ? formatNumber(execution.count) : "-";
    const values = layout === "layout3"
      ? [formatPrice(tick.p), "現在", volume, count, "-", "-"]
      : [formatPrice(tick.p), volume, count, "-", "-", "現在"];
    values.forEach((value, index) => {
      const cell = document.createElement("td");
      if (index === 0) cell.className = "current-price-cell";
      const isExecutionVolume = (layout === "layout3" && index === 2) || (layout === "layout4" && index === 1);
      if (isExecutionVolume) appendExecutionVolumeCell(cell, execution, volumeMax);
      else cell.textContent = value;
      if ((layout === "layout3" && index === 3) || (layout === "layout4" && index === 2)) cell.className = "execution-count-cell";
      if ((layout === "layout3" && index === 5) || (layout === "layout4" && index === 4)) cell.className = "order-count-cell";
      tr.appendChild(cell);
    });
    tr.title = "現在のリプレイ位置";
    tbody.appendChild(tr);
    return tr;
  }

  function populatePriceOrderedRows(tbody, data, rows, tick, markers, volumeMax = 0) {
    tbody.replaceChildren();
    const sorted = rows
      .filter((row) => Number.isFinite(Number(row.price)))
      .slice()
      .sort((left, right) => Number(right.price) - Number(left.price));
    let currentInserted = false;
    for (const row of sorted) {
      if (!currentInserted && Number(tick.p) >= Number(row.price)) {
        els.currentRowLayout3 = appendAnalysisCurrentRow(tbody, data, tick, "layout3", volumeMax);
        currentInserted = true;
      }
      appendLayout3Row(tbody, data, row, markers, volumeMax);
    }
    if (!currentInserted) els.currentRowLayout3 = appendAnalysisCurrentRow(tbody, data, tick, "layout3", volumeMax);
  }

  function populateExecutionAnalysisRows(tbody, data, rows, tick, markers) {
    tbody.replaceChildren();
    els.currentRowLayout4 = appendAnalysisCurrentRow(tbody, data, tick, "layout4");
    const sorted = rows
      .filter((row) => Number.isFinite(Number(row.price)))
      .map((row) => ({ row, execution: row.execution || priceExecutionAt(data, row.price, state.cursorIndex) }))
      .sort((left, right) => {
        const leftVolume = left.execution.volume === null ? -1 : Number(left.execution.volume);
        const rightVolume = right.execution.volume === null ? -1 : Number(right.execution.volume);
        if (rightVolume !== leftVolume) return rightVolume - leftVolume;
        const leftCount = Number(left.execution.count) || 0;
        const rightCount = Number(right.execution.count) || 0;
        if (rightCount !== leftCount) return rightCount - leftCount;
        return Number(right.row.price) - Number(left.row.price);
      });
    for (const item of sorted) appendLayout4Row(tbody, data, { ...item.row, execution: item.execution }, markers);
  }

  function populateBoardRows(tbody, data, side, hypothesis, live, history, hypothesisLabel, markers, layout) {
    tbody.replaceChildren();
    const append = layout === "layout1" ? appendLayout1Row : appendBoardRow;
    const colspan = layout === "layout1" || layout === "layout2" ? 5 : 6;
    if (side === "sell") {
      if (state.boardDisplayMode === "hypothesis" && hypothesis.sell.length) {
        appendZone(tbody, hypothesisLabel, "hypothesis-zone", colspan);
        hypothesis.sell.forEach((row) => append(tbody, data, row, "sell", markers));
        appendZone(tbody, "実板10本: この時点で観測した板", "live-zone", colspan);
      }
      live.sell.forEach((row) => append(tbody, data, row, "sell", markers));
      if (history.sell.length) {
        appendZone(tbody, `価格別約定履歴（過去ログ）: ${formatNumber(history.sell.length)}価格`, "execution-history-zone", colspan);
        history.sell.forEach((row) => append(tbody, data, row, "sell", markers));
      }
    } else {
      if (state.boardDisplayMode === "hypothesis" && hypothesis.buy.length) {
        appendZone(tbody, "実板10本: この時点で観測した板", "live-zone", colspan);
      }
      live.buy.forEach((row) => append(tbody, data, row, "buy", markers));
      if (state.boardDisplayMode === "hypothesis" && hypothesis.buy.length) {
        appendZone(tbody, hypothesisLabel, "hypothesis-zone", colspan);
        hypothesis.buy.forEach((row) => append(tbody, data, row, "buy", markers));
      }
      if (history.buy.length) {
        appendZone(tbody, `価格別約定履歴（過去ログ）: ${formatNumber(history.buy.length)}価格`, "execution-history-zone", colspan);
        history.buy.forEach((row) => append(tbody, data, row, "buy", markers));
      }
    }
    if (!tbody.children.length) clearTable(tbody, side === "sell" ? "SELL板なし" : "BUY板なし", colspan);
  }

  function clearTable(tbody, message, colspan) {
    tbody.replaceChildren();
    const row = document.createElement("tr");
    row.className = "empty-row";
    const cell = document.createElement("td");
    cell.colSpan = colspan;
    cell.textContent = message;
    row.appendChild(cell);
    tbody.appendChild(row);
  }

  function renderBook(data, tick, snapshot, snapshotIndex) {
    if (!tick) {
      clearTable(els.sellRows, "板データなし", 5);
      clearTable(els.buyRows, "板データなし", 5);
      clearTable(els.layout1SellRows, "板データなし", 5);
      clearTable(els.layout1BuyRows, "板データなし", 5);
      clearTable(els.layout3Rows, "板データなし", 6);
      clearTable(els.layout4Rows, "板データなし", 6);
      els.currentRowLayout3 = null;
      els.currentRowLayout4 = null;
      for (const element of [els.currentPrice, els.currentPriceLayout1]) element.textContent = formatPrice(tick?.p);
      for (const element of [els.currentExecution, els.currentExecutionLayout1]) if (element) element.textContent = "約定 -";
      for (const element of [els.currentTime, els.currentTimeLayout1]) element.textContent = formatTime(tick?.t);
      els.boardMeta.textContent = "現在Tick以前の板データなし";
      els.quoteLabel.textContent = "最良売 - / 最良買 -";
      return;
    }
    const live = snapshot ? normalizeLiveBoard(snapshot, tick.p) : { sell: [], buy: [] };
    const liveRows = [...live.sell, ...live.buy];
    const hypothesis = snapshot ? getHypothesisRows(data, snapshotIndex, liveRows, tick.p) : { sell: [], buy: [] };
    const occupiedPrices = new Set([...liveRows, ...hypothesis.sell, ...hypothesis.buy].map((row) => Number(row.price)));
    const history = getExecutionHistoryRows(data, state.cursorIndex, tick.p, occupiedPrices);
    const linkedMarkers = linkedBoardMarkers(data);
    const hypothesisLabel = `仮説ゾーン: 直近${Math.round(state.hypothesisAgeMs / 60000)}分の外側板`;
    populateBoardRows(els.sellRows, data, "sell", hypothesis, live, history, hypothesisLabel, linkedMarkers, "layout2");
    populateBoardRows(els.buyRows, data, "buy", hypothesis, live, history, hypothesisLabel, linkedMarkers, "layout2");
    populateBoardRows(els.layout1SellRows, data, "sell", hypothesis, live, history, hypothesisLabel, linkedMarkers, "layout1");
    populateBoardRows(els.layout1BuyRows, data, "buy", hypothesis, live, history, hypothesisLabel, linkedMarkers, "layout1");
    const allBoardRows = [
      ...hypothesis.sell,
      ...live.sell,
      ...history.sell,
      ...hypothesis.buy,
      ...live.buy,
      ...history.buy
    ];
    const volumeMax = executionVolumeMax(data, allBoardRows, tick);
    populatePriceOrderedRows(els.layout3Rows, data, allBoardRows, tick, linkedMarkers, volumeMax);
    populateExecutionAnalysisRows(els.layout4Rows, data, allBoardRows, tick, linkedMarkers);

    const bestSell = live.sell.length ? Math.min(...live.sell.map((row) => row.price)) : null;
    const bestBuy = live.buy.length ? Math.max(...live.buy.map((row) => row.price)) : null;
    const quoteGap = bestSell !== null && bestBuy !== null ? bestSell - bestBuy : null;
    const currentPriceText = formatPrice(tick.p);
    for (const element of [els.currentPrice, els.currentPriceLayout1]) element.textContent = currentPriceText;
    const currentExecution = priceExecutionAt(data, tick.p, state.cursorIndex);
    const currentExecutionText = currentExecution.volume === null
      ? "約定 -"
      : `約定出来高 ${formatNumber(currentExecution.volume)}株 / 約定件数 ${formatNumber(currentExecution.count)}件`;
    for (const element of [els.currentExecution, els.currentExecutionLayout1]) {
      if (!element) continue;
      element.textContent = currentExecutionText;
      element.title = currentExecution.volume === null
        ? "現在Tickまでの現在価格の約定なし"
        : executionCountTitle(currentExecution);
    }
    for (const element of [els.currentTime, els.currentTimeLayout1]) element.textContent = formatTime(tick.t);
    const tickSize = tickStepForPrice(data, tick.p);
    const linkedLabel = linkedMarkers.length ? ` | 連動 ${linkedMarkers.map((marker) => `${marker.label} ${formatPrice(marker.price, data)}`).join(" / ")}` : "";
    const boardLabel = state.boardDisplayMode === "hypothesis" ? "実板10本＋仮説ゾーン" : "現在10本";
    const snapshotLabel = snapshot ? formatDateTime(snapshot.t) : "板スナップショットなし";
    const boardCountRows = liveRows.filter((row) => row.orderCount !== null && row.orderCount !== undefined).length;
    const boardCountLabel = boardCountRows
      ? `板件数 ${formatNumber(boardCountRows)}/${formatNumber(liveRows.length)}本収録`
      : "板件数：元データ未収録";
    els.boardMeta.textContent = `${data.name} | ${boardLabel}＋価格別約定履歴 ${formatNumber(history.sell.length + history.buy.length)}価格 | ${boardCountLabel} | ${snapshotLabel}${linkedLabel}`;
    els.quoteLabel.textContent = `呼値 ${formatNumber(tickSize, tickDigits(tickSize))}円 (${TICK_TABLE_LABELS[data.tickTable]}) / 最良売 ${formatPrice(bestSell)} / 最良買 ${formatPrice(bestBuy)}${quoteGap === null ? "" : ` / 気配差 ${formatPrice(quoteGap)}`}`;
    scheduleCurrentAnchor();
  }

  function tradeKind(data, quantity) {
    if (!Number.isFinite(quantity) || quantity <= 0 || data.tradeLargeThreshold <= 0) return "";
    if (quantity >= data.tradeHugeThreshold) return "huge";
    if (quantity >= data.tradeLargeThreshold) return "large";
    return "";
  }

  function renderTape(data, cursorIndex) {
    const count = upperBound(data.tape, cursorIndex, "pointIndex");
    const rows = data.tape.slice(Math.max(0, count - 80), count).reverse();
    els.tapeRows.replaceChildren();
    if (!rows.length) {
      clearTable(els.tapeRows, "現在Tickまでの約定なし", 3);
    } else {
      for (const item of rows) {
        const direction = item.d > 0 ? "tape-up" : item.d < 0 ? "tape-down" : "tape-flat";
        const kind = tradeKind(data, item.q);
        const row = document.createElement("tr");
        row.className = `${direction}${kind ? ` tape-${kind}` : ""}`;
        for (const value of [
          formatTime(item.t),
          formatPrice(item.p),
          item.q === null ? "-" : formatNumber(item.q)
        ]) {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
        }
        els.tapeRows.appendChild(row);
      }
    }
    els.tapeCount.textContent = `${formatNumber(count)}件`;
  }

  function applyBoardLayout() {
    const layouts = {
      layout1: els.bookLayout1,
      layout2: els.bookLayout2,
      layout3: els.bookLayout3,
      layout4: els.bookLayout4,
      // レイアウト5は板側をレイアウト3の価格順で残し、チャート側にプロファイルを重ねる。
      layout5: els.bookLayout3
    };
    if (els.boardLayoutSelect) els.boardLayoutSelect.value = state.boardLayout;
    Object.entries(layouts).forEach(([layout, element]) => {
      if (!element) return;
      // レイアウト5はレイアウト3の板を共用するため、layout3の表示状態を
      // layout5の判定で上書きしない。
      const sharedLayout3 = element === els.bookLayout3;
      const visible = sharedLayout3
        ? state.boardLayout === "layout3" || state.boardLayout === "layout5"
        : state.boardLayout === layout;
      element.hidden = !visible;
    });
    if (els.bookWrap) els.bookWrap.dataset.layout = state.boardLayout;
  }

  function updateCurrentAnchorControls() {
    els.currentAnchorButton.classList.toggle("active", state.currentAnchorMode);
    els.currentAnchorButton.textContent = `現在中央固定: ${state.currentAnchorMode ? "ON" : "OFF"}`;
    els.settingsCurrentAnchorSelect.value = state.currentAnchorMode ? "fixed" : "scroll";
  }

  function applyBoardHeight() {
    const requested = window.innerHeight * state.boardHeightVh / 100;
    const bookTop = els.bookWrap.getBoundingClientRect().top;
    const available = Math.max(320, window.innerHeight - bookTop - 18);
    const height = Math.max(320, Math.min(requested, available));
    els.bookWrap.style.height = `${Math.round(height)}px`;
    els.tapeScroll.style.height = `${Math.round(height)}px`;
    els.boardHeightRange.value = String(state.boardHeightVh);
    els.boardHeightValue.textContent = `${Math.round(state.boardHeightVh)}%`;
    const spacer = state.currentAnchorMode ? Math.ceil(els.bookWrap.clientHeight / 2) : 0;
    els.boardTopAnchorSpacer.style.height = `${spacer}px`;
    els.boardBottomAnchorSpacer.style.height = `${spacer}px`;
  }

  function applyCompactUi() {
    document.body.classList.toggle("compact-ui", state.compactUi);
  }

  function scheduleCurrentAnchor() {
    cancelAnimationFrame(state.anchorFrame);
    state.anchorFrame = requestAnimationFrame(() => {
      applyBoardHeight();
      if (!state.currentAnchorMode) return;
      const wrapRect = els.bookWrap.getBoundingClientRect();
      const activeRows = {
        layout1: els.currentRowLayout1,
        layout2: els.currentRow,
        layout3: els.currentRowLayout3,
        layout4: els.currentRowLayout4,
        layout5: els.currentRowLayout3
      };
      const activeRow = activeRows[state.boardLayout];
      if (!activeRow) return;
      const rowRect = activeRow.getBoundingClientRect();
      const target = els.bookWrap.scrollTop + rowRect.top - wrapRect.top - els.bookWrap.clientHeight / 2 + rowRect.height / 2;
      const maxScroll = Math.max(0, els.bookWrap.scrollHeight - els.bookWrap.clientHeight);
      els.bookWrap.scrollTop = Math.max(0, Math.min(maxScroll, target));
    });
  }

  function drawingStorageKey(data) {
    const epoch = data?.pricePoints[data?.firstSessionPointIndex || 0]?.t || data?.firstTime || 0;
    return `boardreadtools.drawings.v1.${data?.code || "unknown"}.${jstClock(epoch).dateKey || "unknown"}`;
  }

  function saveDrawings() {
    const data = activeData();
    if (!data) return;
    safeSet(drawingStorageKey(data), JSON.stringify(state.drawings));
  }

  function loadDrawings(data) {
    state.drawings = [];
    if (!data) return;
    try {
      const loaded = JSON.parse(safeGet(drawingStorageKey(data), "[]"));
      if (Array.isArray(loaded)) state.drawings = loaded.filter((line) => line && typeof line === "object");
    } catch (_) {
      state.drawings = [];
    }
    state.rrRoleIndex = 0;
    setDrawingTool("cursor");
  }

  function setDrawingTool(tool) {
    state.drawingTool = tool;
    if (tool !== "RR") state.rrRoleIndex = 0;
    if (tool === "horizontal" || tool === "ray") {
      els.lineColor.value = state.toolColors[tool] || DEFAULT_DRAWING_COLORS[tool];
    }
    Object.entries(toolButtons).forEach(([name, button]) => button.classList.toggle("tool-active", name === tool));
    const messages = {
      cursor: "カーソル表示: チャートを動かしてOHLCを確認できます。",
      horizontal: "チャートをクリックして水平線を引きます。",
      ray: "チャートをクリックして右向きレイを引きます。",
      RR: "RR計測: Entry → LC → TP の順に3回クリックします。",
      ENTRY: "チャートをクリックしてEntryを置きます。",
      LC: "チャートをクリックしてLCを置きます。",
      TP: "チャートをクリックしてTPを置きます。",
      arrowUp: "チャートをクリックして上矢印を置きます。",
      arrowDown: "チャートをクリックして下矢印を置きます。",
      erase: "消したい線または矢印の近くをクリックします。"
    };
    els.drawingHint.textContent = messages[tool] || messages.cursor;
  }

  function getChartPoint(event) {
    const geometry = state.chartGeometry;
    if (!geometry?.shown.length) return null;
    const rect = els.chart.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x < geometry.pad.left || x > geometry.width - geometry.pad.right || y < geometry.pad.top || y > geometry.volumeY + geometry.volumeHeight) return null;
    const fraction = (x - geometry.pad.left) / geometry.plotWidth;
    const targetEpoch = geometry.axisStartEpoch + fraction * geometry.axisSpan;
    const candleIndex = Math.max(0, Math.min(geometry.shown.length - 1, upperBound(geometry.shown, targetEpoch) - 1));
    const candle = geometry.shown[candleIndex];
    const priceY = Math.max(geometry.pad.top, Math.min(geometry.priceBottom, y));
    const price = geometry.high - (priceY - geometry.pad.top) / geometry.plotHeight * geometry.range;
    return { x, y, price, epoch: candle.t, candle, inVolume: y >= geometry.volumeY };
  }

  function findDrawingAtPoint(point) {
    if (!point || !state.chartGeometry) return -1;
    const geometry = state.chartGeometry;
    let bestIndex = -1;
    let bestDistance = 13;
    state.drawings.forEach((drawing, index) => {
      const y = geometry.yFor(drawing.price);
      let distance;
      if (drawing.type === "arrow") {
        const x = drawingX(geometry, drawing.epoch);
        distance = Math.hypot(point.x - x, point.y - y);
      } else {
        const startX = drawing.type === "ray" || drawing.type === "trade" ? drawingX(geometry, drawing.startEpoch) : geometry.pad.left;
        if (point.x < startX - 6) return;
        distance = Math.abs(point.y - y);
      }
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return bestIndex;
  }

  function snapPrice(price) {
    const data = activeData();
    return alignPriceToTick(data, price);
  }

  function redrawChartOnly() {
    const context = state.renderContext;
    if (!context) return;
    drawChart(context.data, context.candles, context.tick);
  }

  function queueChartRedraw() {
    cancelAnimationFrame(state.redrawFrame);
    state.redrawFrame = requestAnimationFrame(redrawChartOnly);
  }

  function render() {
    const data = activeData();
    if (!data) return;
    const tick = currentTick(data);
    const snapshotIndex = currentSnapshotIndex(data, tick);
    const snapshot = snapshotIndex >= 0 ? data.snapshots[snapshotIndex] : null;
    const candles = visibleCandles(data, state.cursorIndex);
    state.renderContext = { data, tick, candles };
    renderSummary(data, tick, candles);
    drawChart(data, candles, tick);
    renderBook(data, tick, snapshot, snapshotIndex);
    renderTape(data, state.cursorIndex);
    els.timelineCaption.textContent = `検証Tick ${formatNumber(Math.max(0, state.cursorIndex - data.firstSessionPointIndex + 1))}/${formatNumber(Math.max(0, data.pricePoints.length - data.firstSessionPointIndex))} | ${formatDateTime(tick?.t)} | Z/X: ${formatNumber(getTickStep())} / A/S: ${formatNumber(getWideTickStep())} Tick`;
    els.timelineStart.textContent = formatTime(data.sessionStartTime || data.pricePoints[data.firstSessionPointIndex]?.t);
    els.timelineEnd.textContent = formatTime(data.pricePoints[data.pricePoints.length - 1]?.t);
    els.timeSlider.min = String(data.firstSessionPointIndex);
    els.timeSlider.max = String(Math.max(0, data.pricePoints.length - 1));
    els.timeSlider.value = String(Math.max(0, Math.min(data.pricePoints.length - 1, state.cursorIndex)));
    syncControlValues();
  }

  function updateProfileShortcutLabels() {
    if (els.volumeProfileToggleLabel) els.volumeProfileToggleLabel.textContent = `板内価格帯バー（${state.volumeProfileShortcut}）`;
    if (els.chartProfileToggleLabel) els.chartProfileToggleLabel.textContent = `チャート左側価格帯バー（${state.chartProfileShortcut}）`;
  }

  function syncControlValues() {
    const matching = [...els.intervalSelect.options].some((option) => Number(option.value) === state.intervalMs);
    els.intervalSelect.value = matching ? String(state.intervalMs) : "";
    els.boardDisplaySelect.value = state.boardDisplayMode;
    applyBoardLayout();
    els.boardDepthSelect.value = String(state.boardDepth);
    els.settingsBoardLayoutSelect.value = state.boardLayout;
    els.volumeProfileToggle.checked = state.volumeProfileEnabled;
    els.chartProfileToggle.checked = state.chartProfileEnabled;
    els.settingsVolumeProfileShortcutInput.value = state.volumeProfileShortcut;
    els.settingsChartProfileShortcutInput.value = state.chartProfileShortcut;
    els.settingsVolumeProfileToggle.checked = state.volumeProfileEnabled;
    els.settingsChartProfileToggle.checked = state.chartProfileEnabled;
    els.settingsVolumeProfileColorInput.value = state.volumeProfileColor;
    els.settingsChartProfileColorInput.value = state.chartProfileColor;
    els.settingsVolumeProfileTransparencyRange.value = String(state.volumeProfileTransparency);
    els.settingsVolumeProfileTransparencyValue.textContent = `${state.volumeProfileTransparency}%`;
    els.settingsChartProfileTransparencyRange.value = String(state.chartProfileTransparency);
    els.settingsChartProfileTransparencyValue.textContent = `${state.chartProfileTransparency}%`;
    updateProfileShortcutLabels();
    els.flashToggle.checked = state.flashEnabled;
    els.cursorInfoToggle.checked = state.crosshairEnabled;
    els.verifyButton.classList.toggle("active", state.verificationMode);
    updateCurrentAnchorControls();
  }

  function selectSymbol(code, resetPosition = true) {
    if (!state.symbols.has(code)) return;
    saveDrawings();
    state.selectedSymbol = code;
    const data = activeData();
    if (resetPosition) state.cursorIndex = data.firstSessionPointIndex;
    state.crosshair = null;
    resetChartView();
    loadDrawings(data);
    render();
  }

  function getTickStep() {
    return Math.max(1, Number.parseInt(els.tickStepInput.value, 10) || 100);
  }

  function getWideTickStep() {
    return getTickStep() * 5;
  }

  function pulseTradeFlash(kind) {
    if (!state.flashEnabled || !kind) return;
    document.body.classList.remove("trade-flash-large", "trade-flash-huge");
    document.body.classList.add(kind === "huge" ? "trade-flash-huge" : "trade-flash-large");
    if (state.flashTimer) clearTimeout(state.flashTimer);
    state.flashTimer = window.setTimeout(() => {
      document.body.classList.remove("trade-flash-large", "trade-flash-huge");
      state.flashTimer = null;
    }, kind === "huge" ? 300 : 190);
  }

  function flashForRange(data, fromIndex, toIndex) {
    if (!state.flashEnabled || toIndex <= fromIndex) return;
    const first = firstAtOrAfter(data.tape, fromIndex + 1, "pointIndex");
    const end = upperBound(data.tape, toIndex, "pointIndex");
    let kind = "";
    for (let index = first; index < end; index += 1) {
      const next = tradeKind(data, data.tape[index].q);
      if (next === "huge") { kind = "huge"; break; }
      if (next === "large") kind = "large";
    }
    pulseTradeFlash(kind);
  }

  function setCursor(index, { flash = false } = {}) {
    const data = activeData();
    if (!data?.pricePoints.length) return;
    const before = state.cursorIndex;
    state.cursorIndex = Math.max(data.firstSessionPointIndex, Math.min(data.pricePoints.length - 1, Math.round(index)));
    state.crosshair = null;
    if (flash) flashForRange(data, before, state.cursorIndex);
    render();
  }

  function moveCursor(delta) {
    stopPlayback();
    setCursor(state.cursorIndex + delta, { flash: delta > 0 });
  }

  function stopPlayback() {
    if (state.playTimer !== null) clearInterval(state.playTimer);
    state.playTimer = null;
    els.playButton.textContent = "▶ 再生";
  }

  function togglePlayback() {
    const data = activeData();
    if (!data?.pricePoints.length) return;
    if (state.playTimer !== null) {
      stopPlayback();
      return;
    }
    els.playButton.textContent = "Ⅱ 停止";
    state.playTimer = window.setInterval(() => {
      if (state.cursorIndex >= data.pricePoints.length - 1) {
        stopPlayback();
        return;
      }
      setCursor(state.cursorIndex + getTickStep(), { flash: true });
    }, 360);
  }

  function openIntervalModal() {
    els.intervalModalBackdrop.classList.add("open");
    els.intervalModalBackdrop.setAttribute("aria-hidden", "false");
    els.intervalModalInput.value = "";
    els.intervalModalInput.focus();
  }

  function closeIntervalModal() {
    els.intervalModalBackdrop.classList.remove("open");
    els.intervalModalBackdrop.setAttribute("aria-hidden", "true");
  }

  function applyInterval(seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0) return;
    state.intervalMs = seconds;
    resetChartView();
    render();
  }

  function applyIntervalFromModal() {
    const interval = parseIntervalCommand(els.intervalModalInput.value);
    if (!interval) return;
    applyInterval(interval);
    closeIntervalModal();
  }

  function openSettings() {
    els.settingsBoardDisplaySelect.value = state.boardDisplayMode;
    els.settingsBoardLayoutSelect.value = state.boardLayout;
    els.settingsBoardDepthSelect.value = String(state.boardDepth);
    els.settingsVolumeProfileToggle.checked = state.volumeProfileEnabled;
    els.settingsChartProfileToggle.checked = state.chartProfileEnabled;
    els.settingsVolumeProfileShortcutInput.value = state.volumeProfileShortcut;
    els.settingsChartProfileShortcutInput.value = state.chartProfileShortcut;
    els.settingsVolumeProfileColorInput.value = state.volumeProfileColor;
    els.settingsChartProfileColorInput.value = state.chartProfileColor;
    els.settingsVolumeProfileTransparencyRange.value = String(state.volumeProfileTransparency);
    els.settingsVolumeProfileTransparencyValue.textContent = `${state.volumeProfileTransparency}%`;
    els.settingsChartProfileTransparencyRange.value = String(state.chartProfileTransparency);
    els.settingsChartProfileTransparencyValue.textContent = `${state.chartProfileTransparency}%`;
    els.settingsCurrentAnchorSelect.value = state.currentAnchorMode ? "fixed" : "scroll";
    els.settingsPriceFollowSelect.value = state.priceFollowMode ? "follow" : "fixed";
    els.settingsCrosshairSelect.value = state.crosshairEnabled ? "on" : "off";
    els.settingsTimeZoomSelect.value = state.timeZoomLatest ? "latest" : "mouse";
    els.settingsCompactUiSelect.value = state.compactUi ? "compact" : "normal";
    els.settingsHorizontalColorInput.value = state.toolColors.horizontal;
    els.settingsRayColorInput.value = state.toolColors.ray;
    els.settingsTickTableSelect.value = activeData() ? safeGet(tickTableStorageKey(activeData().code), "auto") : "auto";
    els.settingsHypothesisAgeSelect.value = String(state.hypothesisAgeMs);
    els.boardHeightRange.value = String(state.boardHeightVh);
    els.boardHeightValue.textContent = `${Math.round(state.boardHeightVh)}%`;
    els.settingsFlashToggle.checked = state.flashEnabled;
    els.settingsModalBackdrop.classList.add("open");
    els.settingsModalBackdrop.setAttribute("aria-hidden", "false");
  }

  function closeSettings() {
    els.settingsModalBackdrop.classList.remove("open");
    els.settingsModalBackdrop.setAttribute("aria-hidden", "true");
  }

  function applySettings() {
    state.boardDisplayMode = els.settingsBoardDisplaySelect.value === "live" ? "live" : "hypothesis";
    state.boardLayout = validBoardLayout(els.settingsBoardLayoutSelect.value);
    state.boardDepth = validDepth(Number(els.settingsBoardDepthSelect.value));
    state.volumeProfileEnabled = els.settingsVolumeProfileToggle.checked;
    state.chartProfileEnabled = els.settingsChartProfileToggle.checked;
    state.volumeProfileShortcut = shortcutInputValue(els.settingsVolumeProfileShortcutInput, state.volumeProfileShortcut);
    state.chartProfileShortcut = shortcutInputValue(els.settingsChartProfileShortcutInput, state.chartProfileShortcut);
    state.volumeProfileColor = colorInputValue(els.settingsVolumeProfileColorInput, state.volumeProfileColor);
    state.chartProfileColor = colorInputValue(els.settingsChartProfileColorInput, state.chartProfileColor);
    state.volumeProfileTransparency = validTransparency(Number(els.settingsVolumeProfileTransparencyRange.value));
    state.chartProfileTransparency = validTransparency(Number(els.settingsChartProfileTransparencyRange.value));
    state.currentAnchorMode = els.settingsCurrentAnchorSelect.value === "fixed";
    const nextPriceFollowMode = els.settingsPriceFollowSelect.value !== "fixed";
    if (!nextPriceFollowMode && state.priceFollowMode && state.chartGeometry) {
      state.chartView.priceSpan = state.chartGeometry.range;
      state.chartView.priceCenter = (state.chartGeometry.high + state.chartGeometry.low) / 2;
    } else if (nextPriceFollowMode && !state.priceFollowMode) {
      resetPriceView();
    }
    state.priceFollowMode = nextPriceFollowMode;
    state.crosshairEnabled = els.settingsCrosshairSelect.value !== "off";
    state.timeZoomLatest = els.settingsTimeZoomSelect.value !== "mouse";
    state.compactUi = els.settingsCompactUiSelect.value !== "normal";
    state.toolColors.horizontal = colorInputValue(els.settingsHorizontalColorInput, state.toolColors.horizontal);
    state.toolColors.ray = colorInputValue(els.settingsRayColorInput, state.toolColors.ray);
    state.hypothesisAgeMs = validHypothesisAge(Number(els.settingsHypothesisAgeSelect.value));
    state.boardHeightVh = Math.max(48, Math.min(100, Number(els.boardHeightRange.value) || 92));
    state.flashEnabled = els.settingsFlashToggle.checked;
    safeSet(STORAGE.boardDisplay, state.boardDisplayMode);
    safeSet(STORAGE.boardLayout, state.boardLayout);
    safeSet(STORAGE.boardDepth, state.boardDepth);
    safeSet(STORAGE.volumeProfile, state.volumeProfileEnabled);
    safeSet(STORAGE.volumeProfileShortcut, state.volumeProfileShortcut);
    safeSet(STORAGE.chartProfile, state.chartProfileEnabled);
    safeSet(STORAGE.chartProfileShortcut, state.chartProfileShortcut);
    safeSet(STORAGE.volumeProfileColor, state.volumeProfileColor);
    safeSet(STORAGE.chartProfileColor, state.chartProfileColor);
    safeSet(STORAGE.volumeProfileTransparency, state.volumeProfileTransparency);
    safeSet(STORAGE.chartProfileTransparency, state.chartProfileTransparency);
    safeSet(STORAGE.currentAnchor, state.currentAnchorMode);
    safeSet(STORAGE.priceFollow, state.priceFollowMode);
    safeSet(STORAGE.crosshair, state.crosshairEnabled);
    safeSet(STORAGE.timeZoomLatest, state.timeZoomLatest);
    safeSet(STORAGE.compactUi, state.compactUi);
    safeSet(STORAGE.horizontalColor, state.toolColors.horizontal);
    safeSet(STORAGE.rayColor, state.toolColors.ray);
    safeSet(STORAGE.hypothesisAge, state.hypothesisAgeMs);
    safeSet(STORAGE.boardHeight, state.boardHeightVh);
    safeSet(STORAGE.flash, state.flashEnabled);
    const data = activeData();
    if (data) {
      const selectedTable = ["auto", "topix500", "etf1", "other"].includes(els.settingsTickTableSelect.value) ? els.settingsTickTableSelect.value : "auto";
      safeSet(tickTableStorageKey(data.code), selectedTable);
      const tickTable = resolveTickTable(data);
      data.tickTable = tickTable.table;
      data.tickTableSource = tickTable.source;
    }
    applyCompactUi();
    if (state.drawingTool === "horizontal" || state.drawingTool === "ray") els.lineColor.value = state.toolColors[state.drawingTool];
    closeSettings();
    render();
  }

  function renderEmpty() {
    for (const element of [els.statSymbol, els.statPoints, els.statTime, els.statPrice, els.statVolume, els.statVwap, els.statOpen, els.statRange, els.statTickSize]) element.textContent = "-";
    els.statTimeframe.textContent = formatIntervalLabel(state.intervalMs);
    els.chartHint.textContent = "GZIPを読み込むと、検証カーソルまでの時間足を表示します。";
    els.chartCursor.textContent = "-";
    els.timelineStart.textContent = "-";
    els.timelineEnd.textContent = "-";
    els.timelineCaption.textContent = "GZIPを読み込んでください";
    els.timeSlider.value = "0";
    els.timeSlider.min = "0";
    els.timeSlider.max = "0";
    clearTable(els.sellRows, "板データなし", 5);
    clearTable(els.buyRows, "板データなし", 5);
    clearTable(els.layout1SellRows, "板データなし", 5);
    clearTable(els.layout1BuyRows, "板データなし", 5);
    clearTable(els.layout3Rows, "板データなし", 6);
    clearTable(els.layout4Rows, "板データなし", 6);
    els.currentRowLayout3 = null;
    els.currentRowLayout4 = null;
    clearTable(els.tapeRows, "現在Tickまでの約定なし", 3);
    for (const element of [els.currentPrice, els.currentPriceLayout1]) element.textContent = "-";
    for (const element of [els.currentExecution, els.currentExecutionLayout1]) if (element) element.textContent = "約定 -";
    for (const element of [els.currentTime, els.currentTimeLayout1]) element.textContent = "-";
    els.boardMeta.textContent = "-";
    els.quoteLabel.textContent = "最良売 - / 最良買 -";
    els.tapeCount.textContent = "0件";
    state.renderContext = null;
    const canvas = els.chart;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(320, Math.floor(rect.width));
    const height = Math.max(320, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = cssColor("--panel-2", "#10151c");
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = cssColor("--muted", "#8f9baa");
    ctx.font = "13px -apple-system, sans-serif";
    ctx.fillText("GZIPを読み込んでください", 22, 30);
    applyBoardHeight();
  }

  function resetView() {
    stopPlayback();
    state.symbols.clear();
    state.cursorIndex = 0;
    state.sourceRecordCount = 0;
    state.sourceBytesRead = 0;
    state.sourceError = "";
    state.sourceFiles = [];
    state.crosshair = null;
    state.drawings = [];
    document.body.classList.remove("trade-flash-large", "trade-flash-huge");
    els.symbolSelect.replaceChildren(new Option("GZIPを読み込んでください", ""));
    els.fileInfo.textContent = "ファイル未選択";
    els.progressText.textContent = "";
    updateProgress(0);
    setDataControlsEnabled(false);
    renderEmpty();
  }

  // GZIPの展開に失敗した場合、そのファイルの途中まで処理したレコードを残さない。
  // 破損ファイルの途中データが始値・板・歩み値へ混ざると、後続の正常なGZIPを
  // 読み込んでも別の始値ラインや飛んだローソク足になるため、ファイル単位で戻す。
  function captureImportState() {
    const symbols = new Map();
    for (const [code, data] of state.symbols.entries()) {
      symbols.set(code, {
        name: data.name,
        records: data.records,
        pricePointsLength: data.pricePoints.length,
        snapshotsLength: data.snapshots.length,
        firstTime: data.firstTime,
        lastTime: data.lastTime,
        firstSessionPointIndex: data.firstSessionPointIndex,
        firstSessionSnapshotIndex: data.firstSessionSnapshotIndex,
        sessionStartTime: data.sessionStartTime,
        openingPrice: data.openingPrice,
        openingTime: data.openingTime,
        openingSource: data.openingSource,
        apiOpeningPrice: data.apiOpeningPrice,
        apiOpeningTime: data.apiOpeningTime,
        lastBoardSignature: data.lastBoardSignature,
        hasAfternoon: data.hasAfternoon
      });
    }
    return { sourceRecordCount: state.sourceRecordCount, symbols };
  }

  function rollbackImportState(snapshot) {
    state.sourceRecordCount = snapshot.sourceRecordCount;
    for (const code of [...state.symbols.keys()]) {
      const data = state.symbols.get(code);
      const before = snapshot.symbols.get(code);
      if (!before) {
        state.symbols.delete(code);
        continue;
      }
      data.name = before.name;
      data.records = before.records;
      data.pricePoints.length = before.pricePointsLength;
      data.snapshots.length = before.snapshotsLength;
      data.firstTime = before.firstTime;
      data.lastTime = before.lastTime;
      data.firstSessionPointIndex = before.firstSessionPointIndex;
      data.firstSessionSnapshotIndex = before.firstSessionSnapshotIndex;
      data.sessionStartTime = before.sessionStartTime;
      data.openingPrice = before.openingPrice;
      data.openingTime = before.openingTime;
      data.openingSource = before.openingSource;
      data.apiOpeningPrice = before.apiOpeningPrice;
      data.apiOpeningTime = before.apiOpeningTime;
      data.lastBoardSignature = before.lastBoardSignature;
      data.hasAfternoon = before.hasAfternoon;
      data.tape = [];
      data.candleCache.clear();
    }
  }

  async function importFiles(files) {
    const selectedFiles = Array.from(files || []).filter(Boolean);
    if (!selectedFiles.length || state.importing) return;
    resetView();
    state.importing = true;
    state.sourceFiles = selectedFiles;
    const totalBytes = selectedFiles.reduce((total, file) => total + (file.size || 0), 0);
    const names = selectedFiles.map((file) => file.name);
    els.fileInfo.textContent = selectedFiles.length === 1
      ? `${names[0]} (${formatBytes(selectedFiles[0].size)})`
      : `${selectedFiles.length}ファイルを時系列結合（${formatBytes(totalBytes)}）`;
    setStatus(`${selectedFiles.length}ファイルを読み込み中…`, "loading");
    updateProgress(0, "展開準備中");
    let totalBytesRead = 0;
    let lastUiUpdate = 0;
    const warnings = [];

    const updateImportUi = async (file, fileIndex) => {
      const now = performance.now();
      if (now - lastUiUpdate <= 120) return;
      lastUiUpdate = now;
      state.sourceBytesRead = totalBytesRead;
      const ratio = totalBytes ? totalBytesRead / totalBytes : (fileIndex + 1) / selectedFiles.length;
      updateProgress(ratio, `${fileIndex + 1}/${selectedFiles.length} ${formatBytes(totalBytesRead)} / ${formatBytes(totalBytes)} | ${formatNumber(state.sourceRecordCount)} records`);
      setStatus(`${fileIndex + 1}/${selectedFiles.length} ${file.name} を読み込み中… ${state.symbols.size}銘柄`, "loading");
      await new Promise((resolve) => setTimeout(resolve, 0));
    };

    try {
      for (let fileIndex = 0; fileIndex < selectedFiles.length; fileIndex += 1) {
        const file = selectedFiles[fileIndex];
        const lowerName = file.name.toLowerCase();
        const isGzip = lowerName.endsWith(".gz") || file.type.includes("gzip");
        if (isGzip && typeof DecompressionStream !== "function") throw new Error("この環境はGZIPストリーム展開に対応していません");
        if (typeof TextDecoderStream !== "function") throw new Error("この環境はテキストストリームに対応していません");
        const importSnapshot = captureImportState();
        let fileBytesRead = 0;
        const monitor = new TransformStream({
          transform(chunk, controller) {
            const size = chunk.byteLength || 0;
            fileBytesRead += size;
            totalBytesRead += size;
            controller.enqueue(chunk);
          }
        });
        try {
          let stream = file.stream().pipeThrough(monitor);
          if (isGzip) stream = stream.pipeThrough(new DecompressionStream("gzip"));
          const reader = stream.pipeThrough(new TextDecoderStream("utf-8", { fatal: false })).getReader();
          let buffer = "";
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += value;
            let newline;
            while ((newline = buffer.indexOf("\n")) >= 0) {
              let line = buffer.slice(0, newline);
              buffer = buffer.slice(newline + 1);
              if (line.endsWith("\r")) line = line.slice(0, -1);
              if (!line.trim()) continue;
              try {
                if (line.includes('"source"') || line.includes('"symbol"')) processRecord(JSON.parse(line));
              } catch (error) {
                const warning = `${file.name}: JSON行を解析できませんでした (${error.message})`;
                if (!warnings.includes(warning)) warnings.push(warning);
              }
            }
            await updateImportUi(file, fileIndex);
          }
          if (buffer.trim()) {
            try {
              if (buffer.includes('"source"') || buffer.includes('"symbol"')) processRecord(JSON.parse(buffer));
            } catch (error) {
              warnings.push(`${file.name}: 末尾行を解析できませんでした (${error.message})`);
            }
          }
          // 空ファイルでも総容量の進捗を最後まで進める。
          totalBytesRead += Math.max(0, (file.size || 0) - fileBytesRead);
        } catch (error) {
          rollbackImportState(importSnapshot);
          warnings.push(`${file.name}: ${error?.message || String(error)}（失敗したファイルの途中データは破棄）`);
          totalBytesRead += Math.max(0, (file.size || 0) - fileBytesRead);
        }
      }

      setStatus("結合した時系列・板履歴を整理中…", "loading");
      updateProgress(1, `${selectedFiles.length}ファイル読込完了 | 時系列と板履歴を整理中`);
      for (const data of state.symbols.values()) finaliseSymbol(data);
      populateSymbols();
      if (state.symbols.size) {
        const data = activeData();
        state.cursorIndex = data?.firstSessionPointIndex || 0;
        loadDrawings(data);
        const base = selectedFiles.length === 1 ? names[0] : `${selectedFiles.length}ファイルを時系列結合`;
        setStatus(`${base}を読み込みました。${state.symbols.size}銘柄 / 太陽誘電は${state.symbols.has("6976") ? "検出" : "未検出"}`, warnings.length ? "loading" : "ready");
        if (warnings.length) els.progressText.textContent += ` | 注意: ${warnings[0]}`;
        render();
      } else {
        setStatus("銘柄データを検出できませんでした", "error");
      }
    } catch (error) {
      state.sourceError = error?.message || String(error);
      setStatus(`GZIP読込失敗: ${state.sourceError}`, "error");
      updateProgress(0, "読込失敗");
    } finally {
      state.importing = false;
    }
  }

  async function importOrderCsv(file) {
    if (publicNoTradeMode) return;
    if (!file) return;
    try {
      const text = await file.text();
      const entries = parseOrderCsv(text);
      state.orderEntries = entries;
      state.orderCsvFileName = file.name;
      const codeCounts = new Map();
      for (const entry of entries) codeCounts.set(entry.code, (codeCounts.get(entry.code) || 0) + 1);
      const countText = [...codeCounts.entries()]
        .sort((left, right) => left[0].localeCompare(right[0], "en", { numeric: true }))
        .map(([code, count]) => `${code} ${formatNumber(count)}件`)
        .join(" / ");
      els.orderCsvInfo.textContent = entries.length
        ? `ENTRY合図 ${countText}`
        : "有効な新規約定なし";
      els.orderCsvInfo.className = `csv-info ${entries.length ? "ready" : "error"}`;
      if (activeData()) render();
    } catch (error) {
      state.orderEntries = [];
      state.orderCsvFileName = file.name;
      els.orderCsvInfo.textContent = `CSV読込失敗: ${error?.message || String(error)}`;
      els.orderCsvInfo.className = "csv-info error";
      if (activeData()) render();
    } finally {
      if (els.orderCsvInput) els.orderCsvInput.value = "";
    }
  }

  async function fetchDemoDataFile(path, fileName) {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`${path} (${response.status})`);
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    // 静的サーバーがContent-Encoding:gzipで返す場合もあるため、拡張子だけでなく
    // 実データのマジックナンバーを確認して、二重展開を避ける。
    const isGzip = bytes.length >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
    const actualName = isGzip ? fileName : fileName.replace(/\.gz$/i, "");
    return new File([buffer], actualName, { type: isGzip ? "application/gzip" : "application/x-ndjson" });
  }

  async function fetchDemoCsvFile(path, fileName) {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`${path} (${response.status})`);
    return new File([await response.text()], fileName, { type: "text/csv" });
  }

  async function loadHostedDemo() {
    if (state.importing) return;
    if (els.demoReloadButton) els.demoReloadButton.disabled = true;
    if (els.demoInfo) els.demoInfo.textContent = "本日のDEMOデータを取得中…";
    try {
      setStatus("太陽誘電・任天堂のDEMOデータを読み込み中…", "loading");
      const dataFile = await fetchDemoDataFile(DEMO_ASSETS.data, DEMO_ASSETS.dataFileName);
      await importFiles([dataFile]);
      if (!state.symbols.size) throw new Error("銘柄データを検出できませんでした");
      if (!publicNoTradeMode) {
        const orderFile = await fetchDemoCsvFile(DEMO_ASSETS.orders, DEMO_ASSETS.ordersFileName);
        await importOrderCsv(orderFile);
      }
      if (state.symbols.has("6976")) selectSymbol("6976");
      if (els.demoInfo) {
        els.demoInfo.textContent = publicNoTradeMode
          ? "DEMO読込済：6976 太陽誘電 / 7974 任天堂（板読みのみ）"
          : "DEMO読込済：6976 太陽誘電 / 7974 任天堂";
      }
    } catch (error) {
      if (els.demoInfo) els.demoInfo.textContent = "DEMO自動読込失敗（手動読込可）";
      setStatus(`DEMO読込失敗: ${error?.message || String(error)}`, "error");
    } finally {
      if (els.demoReloadButton) els.demoReloadButton.disabled = false;
    }
  }

  function isTextInputTarget(target) {
    return target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable);
  }

  els.fileInput.addEventListener("change", (event) => importFiles(event.target.files));
  els.demoReloadButton.addEventListener("click", loadHostedDemo);
  if (els.orderCsvInput) els.orderCsvInput.addEventListener("change", (event) => importOrderCsv(event.target.files?.[0]));
  els.symbolSelect.addEventListener("change", (event) => selectSymbol(event.target.value));
  els.intervalSelect.addEventListener("change", (event) => applyInterval(Number(event.target.value) || 15000));
  els.openIntervalModalButton.addEventListener("click", openIntervalModal);
  els.intervalModalCancel.addEventListener("click", closeIntervalModal);
  els.intervalModalApply.addEventListener("click", applyIntervalFromModal);
  els.intervalModalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); applyIntervalFromModal(); }
    if (event.key === "Escape") { event.preventDefault(); closeIntervalModal(); }
  });
  els.verifyButton.addEventListener("click", () => {
    state.verificationMode = true;
    els.verifyButton.classList.add("active");
  });
  els.prevButton.addEventListener("click", () => moveCursor(-getTickStep()));
  els.nextButton.addEventListener("click", () => moveCursor(getTickStep()));
  els.widePrevButton.addEventListener("click", () => moveCursor(-getWideTickStep()));
  els.wideNextButton.addEventListener("click", () => moveCursor(getWideTickStep()));
  els.playButton.addEventListener("click", togglePlayback);
  els.tickStepInput.addEventListener("change", () => { els.tickStepInput.value = String(getTickStep()); });
  els.tickStepInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); els.tickStepInput.value = String(getTickStep()); els.tickStepInput.blur(); }
  });
  els.timeSlider.addEventListener("input", (event) => {
    stopPlayback();
    const nextIndex = Number(event.target.value) || 0;
    setCursor(nextIndex, { flash: nextIndex > state.cursorIndex });
  });
  els.boardDisplaySelect.addEventListener("change", (event) => {
    state.boardDisplayMode = event.target.value === "live" ? "live" : "hypothesis";
    safeSet(STORAGE.boardDisplay, state.boardDisplayMode);
    render();
  });
  els.boardLayoutSelect.addEventListener("change", (event) => {
    state.boardLayout = validBoardLayout(event.target.value);
    safeSet(STORAGE.boardLayout, state.boardLayout);
    applyBoardLayout();
    render();
  });
  els.boardDepthSelect.addEventListener("change", (event) => {
    state.boardDepth = validDepth(Number(event.target.value));
    safeSet(STORAGE.boardDepth, state.boardDepth);
    render();
  });
  els.volumeProfileToggle.addEventListener("change", (event) => {
    state.volumeProfileEnabled = event.target.checked;
    safeSet(STORAGE.volumeProfile, state.volumeProfileEnabled);
    render();
  });
  els.chartProfileToggle.addEventListener("change", (event) => {
    state.chartProfileEnabled = event.target.checked;
    safeSet(STORAGE.chartProfile, state.chartProfileEnabled);
    queueChartRedraw();
  });
  els.currentAnchorButton.addEventListener("click", () => {
    state.currentAnchorMode = !state.currentAnchorMode;
    safeSet(STORAGE.currentAnchor, state.currentAnchorMode);
    updateCurrentAnchorControls();
    scheduleCurrentAnchor();
  });
  els.flashToggle.addEventListener("change", (event) => {
    state.flashEnabled = event.target.checked;
    safeSet(STORAGE.flash, state.flashEnabled);
  });
  els.cursorInfoToggle.addEventListener("change", (event) => {
    state.crosshairEnabled = event.target.checked;
    safeSet(STORAGE.crosshair, state.crosshairEnabled);
    if (!state.crosshairEnabled) state.crosshair = null;
    queueChartRedraw();
  });
  els.lineColor.addEventListener("input", (event) => {
    if (state.drawingTool !== "horizontal" && state.drawingTool !== "ray") return;
    const color = colorInputValue(event.target, state.toolColors[state.drawingTool]);
    state.toolColors[state.drawingTool] = color;
    safeSet(state.drawingTool === "ray" ? STORAGE.rayColor : STORAGE.horizontalColor, color);
  });
  els.settingsButton.addEventListener("click", openSettings);
  els.settingsCloseButton.addEventListener("click", closeSettings);
  els.settingsApplyButton.addEventListener("click", applySettings);
  els.boardHeightRange.addEventListener("input", () => { els.boardHeightValue.textContent = `${els.boardHeightRange.value}%`; });
  els.settingsVolumeProfileTransparencyRange.addEventListener("input", () => {
    els.settingsVolumeProfileTransparencyValue.textContent = `${els.settingsVolumeProfileTransparencyRange.value}%`;
  });
  els.settingsChartProfileTransparencyRange.addEventListener("input", () => {
    els.settingsChartProfileTransparencyValue.textContent = `${els.settingsChartProfileTransparencyRange.value}%`;
  });
  els.intervalModalBackdrop.addEventListener("click", (event) => { if (event.target === els.intervalModalBackdrop) closeIntervalModal(); });
  els.settingsModalBackdrop.addEventListener("click", (event) => { if (event.target === els.settingsModalBackdrop) closeSettings(); });

  els.horizontalTool.addEventListener("click", () => setDrawingTool("horizontal"));
  els.rayTool.addEventListener("click", () => setDrawingTool("ray"));
  els.rrTool.addEventListener("click", () => setDrawingTool("RR"));
  els.entryTool.addEventListener("click", () => setDrawingTool("ENTRY"));
  els.lcTool.addEventListener("click", () => setDrawingTool("LC"));
  els.tpTool.addEventListener("click", () => setDrawingTool("TP"));
  els.arrowUpTool.addEventListener("click", () => setDrawingTool("arrowUp"));
  els.arrowDownTool.addEventListener("click", () => setDrawingTool("arrowDown"));
  els.eraseTool.addEventListener("click", () => setDrawingTool("erase"));
  els.clearLinesButton.addEventListener("click", () => {
    state.drawings = [];
    state.hoveredDrawingIndex = -1;
    saveDrawings();
    render();
  });

  els.chart.addEventListener("mousemove", (event) => {
    if (state.chartScaleDrag) {
      const drag = state.chartScaleDrag;
      const deltaX = event.clientX - drag.startX;
      const deltaY = event.clientY - drag.startY;
      drag.moved = drag.moved || Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3;
      if (drag.mode === "time") zoomTimeView(drag.geometry, drag.epoch, Math.exp(deltaX / 180));
      else zoomPriceView(drag.geometry, drag.price, Math.exp(-deltaY / 150));
      els.chart.style.cursor = drag.mode === "time" ? "ew-resize" : "ns-resize";
      queueChartRedraw();
      return;
    }
    const point = getChartPoint(event);
    state.crosshair = point;
    if (state.draggingDrawingIndex >= 0 && point) {
      const drawing = state.drawings[state.draggingDrawingIndex];
      if (drawing && drawing.type !== "arrow") drawing.price = snapPrice(point.price);
      state.hoveredDrawingIndex = state.draggingDrawingIndex;
      els.chart.style.cursor = "grabbing";
    } else if (state.drawingTool === "cursor") {
      state.hoveredDrawingIndex = findDrawingAtPoint(point);
      els.chart.style.cursor = state.hoveredDrawingIndex >= 0 ? "grab" : "crosshair";
    } else {
      state.hoveredDrawingIndex = -1;
      els.chart.style.cursor = "crosshair";
    }
    queueChartRedraw();
  });
  els.chart.addEventListener("mouseleave", () => {
    state.crosshair = null;
    if (state.draggingDrawingIndex < 0) state.hoveredDrawingIndex = -1;
    queueChartRedraw();
  });
  els.chart.addEventListener("mousedown", (event) => {
    const geometry = state.chartGeometry;
    const axis = geometry ? chartAxisZone(event, geometry) : "";
    if (axis) {
      const rect = els.chart.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const fraction = Math.max(0, Math.min(1, (x - geometry.pad.left) / geometry.plotWidth));
      const epoch = geometry.axisStartEpoch + fraction * geometry.axisSpan;
      const price = geometry.high - (Math.max(geometry.pad.top, Math.min(geometry.priceBottom, y)) - geometry.pad.top) / geometry.plotHeight * geometry.range;
      event.preventDefault();
      state.chartScaleDrag = { mode: axis, startX: event.clientX, startY: event.clientY, epoch, price, geometry, moved: false };
      els.chart.style.cursor = axis === "time" ? "ew-resize" : "ns-resize";
      return;
    }
    if (state.drawingTool !== "cursor") return;
    const index = findDrawingAtPoint(getChartPoint(event));
    if (index < 0 || state.drawings[index]?.type === "arrow") return;
    event.preventDefault();
    state.draggingDrawingIndex = index;
    state.hoveredDrawingIndex = index;
    els.chart.style.cursor = "grabbing";
  });
  window.addEventListener("mouseup", () => {
    if (state.chartScaleDrag) {
      const drag = state.chartScaleDrag;
      state.chartScaleDrag = null;
      if (!drag.moved) {
        if (drag.mode === "time") resetTimeView();
        else resetPriceView();
      }
      state.chartScaleIgnoreClick = true;
      window.setTimeout(() => { state.chartScaleIgnoreClick = false; }, 0);
      els.chart.style.cursor = "crosshair";
      queueChartRedraw();
      return;
    }
    if (state.draggingDrawingIndex < 0) return;
    state.draggingDrawingIndex = -1;
    saveDrawings();
    els.chart.style.cursor = state.hoveredDrawingIndex >= 0 ? "grab" : "crosshair";
    render();
  });
  els.chart.addEventListener("click", (event) => {
    if (state.chartScaleIgnoreClick) return;
    if (state.drawingTool === "cursor" || state.draggingDrawingIndex >= 0) return;
    const point = getChartPoint(event);
    if (!point) return;
    if (state.drawingTool === "erase") {
      const index = findDrawingAtPoint(point);
      if (index >= 0) state.drawings.splice(index, 1);
    } else if (state.drawingTool === "RR") {
      const role = ["ENTRY", "LC", "TP"][state.rrRoleIndex] || "ENTRY";
      state.drawings = state.drawings.filter((drawing) => !(drawing.type === "trade" && drawing.role === role));
      state.drawings.push({ type: "trade", role, price: snapPrice(point.price), startEpoch: point.epoch, color: els.lineColor.value });
      state.rrRoleIndex += 1;
      if (state.rrRoleIndex >= 3) setDrawingTool("cursor");
      else els.drawingHint.textContent = `RR計測: 次は ${["LC", "TP"][state.rrRoleIndex - 1]} をクリックします。`;
    } else if (["ENTRY", "LC", "TP"].includes(state.drawingTool)) {
      state.drawings = state.drawings.filter((drawing) => !(drawing.type === "trade" && drawing.role === state.drawingTool));
      state.drawings.push({ type: "trade", role: state.drawingTool, price: snapPrice(point.price), startEpoch: point.epoch, color: els.lineColor.value });
      setDrawingTool("cursor");
    } else if (state.drawingTool === "arrowUp" || state.drawingTool === "arrowDown") {
      state.drawings.push({ type: "arrow", direction: state.drawingTool === "arrowUp" ? "up" : "down", epoch: point.epoch, price: snapPrice(point.price), color: els.lineColor.value });
      setDrawingTool("cursor");
    } else {
      state.drawings.push({ type: state.drawingTool, price: snapPrice(point.price), startEpoch: point.epoch, color: els.lineColor.value });
      setDrawingTool("cursor");
    }
    saveDrawings();
    state.hoveredDrawingIndex = findDrawingAtPoint(point);
    render();
  });

  els.chart.addEventListener("wheel", (event) => {
    const geometry = state.chartGeometry;
    if (!geometry) return;
    const axis = chartAxisZone(event, geometry);
    if (!axis) return;
    event.preventDefault();
    const rect = els.chart.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const factor = event.deltaY < 0 ? 1.16 : 1 / 1.16;
    if (axis === "time") {
      const fraction = Math.max(0, Math.min(1, (x - geometry.pad.left) / geometry.plotWidth));
      zoomTimeView(geometry, geometry.axisStartEpoch + fraction * geometry.axisSpan, factor);
    } else {
      const price = geometry.high - (Math.max(geometry.pad.top, Math.min(geometry.priceBottom, y)) - geometry.pad.top) / geometry.plotHeight * geometry.range;
      zoomPriceView(geometry, price, factor);
    }
    queueChartRedraw();
  }, { passive: false });

  window.addEventListener("keydown", (event) => {
    const intervalOpen = els.intervalModalBackdrop.classList.contains("open");
    const settingsOpen = els.settingsModalBackdrop.classList.contains("open");
    if (intervalOpen || settingsOpen) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (intervalOpen) closeIntervalModal();
        if (settingsOpen) closeSettings();
      }
      return;
    }
    if (isTextInputTarget(event.target) && !(event.key === "Enter" && event.target === els.intervalSelect)) return;
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toUpperCase();
    if (key === state.volumeProfileShortcut) {
      event.preventDefault();
      state.volumeProfileEnabled = !state.volumeProfileEnabled;
      safeSet(STORAGE.volumeProfile, state.volumeProfileEnabled);
      render();
    } else if (key === state.chartProfileShortcut) {
      event.preventDefault();
      state.chartProfileEnabled = !state.chartProfileEnabled;
      safeSet(STORAGE.chartProfile, state.chartProfileEnabled);
      queueChartRedraw();
      syncControlValues();
    } else if (key === "Z") {
      event.preventDefault();
      moveCursor(-getTickStep());
    } else if (key === "X") {
      event.preventDefault();
      moveCursor(getTickStep());
    } else if (key === "A") {
      event.preventDefault();
      moveCursor(-getWideTickStep());
    } else if (key === "S") {
      event.preventDefault();
      moveCursor(getWideTickStep());
    } else if (event.key === "Enter" && activeData()) {
      event.preventDefault();
      openIntervalModal();
    }
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
      applyBoardHeight();
      if (state.symbols.size) render();
      else renderEmpty();
    });
  });

  applyCompactUi();
  syncControlValues();
  setDataControlsEnabled(false);
  setDrawingTool("cursor");
  renderEmpty();
  if (["http:", "https:"].includes(location.protocol)) window.setTimeout(loadHostedDemo, 120);
})();

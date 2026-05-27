const defaultCollections = [
  {
    name: "松弛韩系",
    desc: "自然、日常、像路过时刚好被拍到。",
    colors: ["#f8f7f1", "#9fb7ad", "#6f87a0", "#2e2f31"],
    tips: ["不看镜头", "手里拿咖啡或包", "人物放画面三分之一", "自然光侧拍"],
    cover:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "清冷感",
    desc: "干净、克制、线条利落，表情少一点。",
    colors: ["#f5f7f8", "#9aa3ad", "#334052", "#101214"],
    tips: ["侧脸或回头", "肩颈打开", "黑白灰蓝", "阴天或冷光"],
    cover:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "甜妹感",
    desc: "明亮、柔和、亲近，适合甜品店和街角。",
    colors: ["#fff8ea", "#f3b7c7", "#b8d7ee", "#e7d78b"],
    tips: ["轻微歪头", "托脸或拿甜品", "浅色上衣", "柔和正面光"],
    cover:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "酷一点",
    desc: "不费力的利落感，夜景和街头很好用。",
    colors: ["#151515", "#7d848b", "#b51f2e", "#d6d7d9"],
    tips: ["不要大笑", "靠墙或走路", "低机位", "强对比光"],
    cover:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "电影感",
    desc: "像一帧剧情，有留白、有环境、有一点距离。",
    colors: ["#21333a", "#c16f4a", "#e4d5b8", "#5d6b54"],
    tips: ["远景留白", "看向画面外", "利用窗框/门框", "傍晚或室内暖光"],
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "精致轻熟",
    desc: "更收拾、更有质感，适合餐厅、酒店、美术馆。",
    colors: ["#ffffff", "#191919", "#a48d6c", "#8e1f34"],
    tips: ["姿态挺一点", "手部动作干净", "少而准的配饰", "背景别太乱"],
    cover:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
  },
];

const scenes = ["咖啡店", "街道", "景点", "地铁/交通", "酒店/室内", "夜景", "展览/美术馆", "汉江/户外"];
const shots = ["全身", "半身", "近景脸", "背影", "走路抓拍", "坐姿", "镜子照", "双人/朋友拍"];
const defaultHeroImage =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=82";

const starterRefs = [
  {
    title: "圣水洞窗边坐姿",
    vibe: "松弛韩系",
    scene: "咖啡店",
    shot: "坐姿",
    colors: "白/浅蓝/牛仔/黑包",
    tags: ["不看镜头", "拿咖啡", "窗边"],
    note: "身体微微侧向窗户，手放在杯子旁边。让拍照的人站远一点，把窗框和桌面一起拍进去。",
    url: "",
    image: "",
  },
  {
    title: "街角走路抓拍",
    vibe: "酷一点",
    scene: "街道",
    shot: "走路抓拍",
    colors: "黑外套/牛仔/银色配饰",
    tags: ["低机位", "不看镜头", "走路"],
    note: "向前走两三步，不要管镜头。手机放在腰部以下，画面留出街道纵深。",
    url: "",
    image: "",
  },
  {
    title: "展览侧脸留白",
    vibe: "清冷感",
    scene: "展览/美术馆",
    shot: "半身",
    colors: "灰/黑/冷白",
    tags: ["侧脸", "留白", "少笑"],
    note: "站在作品旁边但不要挡住作品。脸看向作品，肩膀放松，画面一半留给墙面。",
    url: "",
    image: "",
  },
];

const state = {
  refs: [],
  selectedVibe: "全部",
  selectedScene: "全部",
  selectedShot: "全部",
  selectedColor: "全部",
  selectedTag: "全部",
  search: "",
  uploadData: "",
  outfitImages: [],
  coverUploadVibe: "",
  collections: [],
  heroImage: "",
};

let db;

const els = {
  moodGrid: document.querySelector("#moodGrid"),
  addForm: document.querySelector("#addForm"),
  imageInput: document.querySelector("#imageInput"),
  coverInput: document.querySelector("#coverInput"),
  heroImage: document.querySelector("#heroImage"),
  heroImageBtn: document.querySelector("#heroImageBtn"),
  heroImageInput: document.querySelector("#heroImageInput"),
  imageUrl: document.querySelector("#imageUrl"),
  uploadPreview: document.querySelector("#uploadPreview"),
  dropZone: document.querySelector("#dropZone"),
  titleInput: document.querySelector("#titleInput"),
  vibeInput: document.querySelector("#vibeInput"),
  sceneInput: document.querySelector("#sceneInput"),
  shotInput: document.querySelector("#shotInput"),
  colorInput: document.querySelector("#colorInput"),
  outfitInput: document.querySelector("#outfitInput"),
  outfitPreview: document.querySelector("#outfitPreview"),
  tagInput: document.querySelector("#tagInput"),
  noteInput: document.querySelector("#noteInput"),
  searchInput: document.querySelector("#searchInput"),
  sceneFilters: document.querySelector("#sceneFilters"),
  vibeFilters: document.querySelector("#vibeFilters"),
  shotFilters: document.querySelector("#shotFilters"),
  colorFilters: document.querySelector("#colorFilters"),
  tagFilters: document.querySelector("#tagFilters"),
  shootScene: document.querySelector("#shootScene"),
  shootVibe: document.querySelector("#shootVibe"),
  shootBtn: document.querySelector("#shootBtn"),
  shootTips: document.querySelector("#shootTips"),
  cardGrid: document.querySelector("#cardGrid"),
  countLabel: document.querySelector("#countLabel"),
  emptyState: document.querySelector("#emptyState"),
  clearFiltersBtn: document.querySelector("#clearFiltersBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  detailDialog: document.querySelector("#detailDialog"),
  dialogBody: document.querySelector("#dialogBody"),
  closeDialog: document.querySelector("#closeDialog"),
  toast: document.querySelector("#toast"),
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function openDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB unavailable"));
      return;
    }
    const request = indexedDB.open("korea-photo-playbook", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("refs", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function storeAllRefs() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("refs", "readwrite");
    const store = tx.objectStore("refs");
    store.clear();
    state.refs.forEach((ref) => store.put(ref));
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

function getAllRefs() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("refs", "readonly");
    const request = tx.objectStore("refs").getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function loadRefs() {
  try {
    db = await openDb();
    const refs = await getAllRefs();
    if (refs.length) {
      state.refs = refs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return;
    }
  } catch (error) {
    db = null;
  }

  const saved = localStorage.getItem("korea-photo-playbook");
  state.refs = saved
    ? JSON.parse(saved)
    : starterRefs.map((ref) => ({ ...ref, id: uid(), createdAt: new Date().toISOString() }));
  await saveRefs();
}

async function saveRefs() {
  if (db) {
    await storeAllRefs();
    localStorage.removeItem("korea-photo-playbook");
    return;
  }
  localStorage.setItem("korea-photo-playbook", JSON.stringify(state.refs));
}

function loadCollections() {
  try {
    const saved = JSON.parse(localStorage.getItem("korea-photo-playbook-collections") || "[]");
    const legacyCovers = JSON.parse(localStorage.getItem("korea-photo-playbook-covers") || "{}");
    const base = Array.isArray(saved) && saved.length ? saved : defaultCollections;
    state.collections = base.map((collection) => ({
      ...collection,
      cover: legacyCovers[collection.name] || collection.cover,
    }));
  } catch (error) {
    state.collections = defaultCollections;
  }
}

function saveCollections() {
  localStorage.setItem("korea-photo-playbook-collections", JSON.stringify(state.collections));
}

function collectionNames() {
  return state.collections.map((collection) => collection.name);
}

function collectionByName(name) {
  return state.collections.find((collection) => collection.name === name) || state.collections[0];
}

function defaultCover() {
  return defaultCollections[Math.floor(Math.random() * defaultCollections.length)].cover;
}

function loadHeroImage() {
  state.heroImage = localStorage.getItem("korea-photo-playbook-hero") || defaultHeroImage;
}

function saveHeroImage() {
  localStorage.setItem("korea-photo-playbook-hero", state.heroImage);
}

function renderHeroImage() {
  els.heroImage.src = state.heroImage || defaultHeroImage;
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function optionList(select, values, allLabel = "") {
  select.innerHTML = "";
  if (allLabel) {
    select.add(new Option(allLabel, "全部"));
  }
  values.forEach((value) => select.add(new Option(value, value)));
}

function renderMoods() {
  els.moodGrid.innerHTML = state.collections
    .map(
      (collection) => `
        <article class="mood-card" data-vibe="${collection.name}" style="--cover: url('${escapeHtml(collection.cover)}')">
          <button class="mood-select" type="button" data-vibe-select="${collection.name}" aria-label="选择${collection.name}">
            <span class="mood-copy">
              <strong>${collection.name}</strong>
              <span>${collection.desc || "自定义收藏夹"}</span>
            </span>
          </button>
          <div class="mood-footer">
            <span class="mood-tags">
              ${(collection.tips || [])
                .map((tip, index) => `<button type="button" data-remove-tip="${collection.name}" data-tip-index="${index}" title="删除标签">${escapeHtml(tip)}</button>`)
                .join("")}
            </span>
            <span class="collection-actions">
              <button class="cover-btn" type="button" data-add-tip="${collection.name}">+ 标签</button>
              <button class="cover-btn" type="button" data-cover-vibe="${collection.name}">换封面</button>
              <button class="cover-btn" type="button" data-delete-vibe="${collection.name}">删除</button>
            </span>
          </div>
        </article>
      `,
    )
    .join("") +
    `
      <article class="mood-card add-collection-card">
        <button class="mood-select add-collection" type="button" data-add-collection>
          <span class="add-collection-plus">+</span>
          <span class="mood-copy">
            <strong>新收藏夹</strong>
            <span>新增一个自己的分类。</span>
          </span>
        </button>
      </article>
    `;
}

function renderFilterRow(container, values, selected, type) {
  container.innerHTML = ["全部", ...values]
    .map(
      (value) => `
        <button class="chip ${selected === value ? "active" : ""}" type="button" data-filter-type="${type}" data-value="${value}">
          ${value}
        </button>
      `,
    )
    .join("");
}

function normalizeTags(value) {
  return value
    .split(/[,，、\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function searchable(ref) {
  return [ref.title, ref.vibe, ref.scene, ref.shot, ref.colors, ref.note, ref.url, ...(ref.tags || [])]
    .join(" ")
    .toLowerCase();
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function colorFilters() {
  return uniqueValues(
    state.refs.flatMap((ref) =>
      String(ref.colors || "")
        .split(/[,，、/\\\s]+/)
        .map((item) => item.trim()),
    ),
  ).slice(0, 16);
}

function tagFilters() {
  return uniqueValues(state.refs.flatMap((ref) => ref.tags || [])).slice(0, 20);
}

function filteredRefs() {
  const keyword = state.search.trim().toLowerCase();
  return state.refs.filter((ref) => {
    const sceneMatch = state.selectedScene === "全部" || ref.scene === state.selectedScene;
    const vibeMatch = state.selectedVibe === "全部" || ref.vibe === state.selectedVibe;
    const shotMatch = state.selectedShot === "全部" || ref.shot === state.selectedShot;
    const colorMatch =
      state.selectedColor === "全部" ||
      String(ref.colors || "")
        .toLowerCase()
        .includes(state.selectedColor.toLowerCase());
    const tagMatch = state.selectedTag === "全部" || (ref.tags || []).includes(state.selectedTag);
    const keywordMatch = !keyword || searchable(ref).includes(keyword);
    return sceneMatch && vibeMatch && shotMatch && colorMatch && tagMatch && keywordMatch;
  });
}

function imageMarkup(ref) {
  if (ref.image) {
    return `<img src="${ref.image}" alt="${escapeHtml(ref.title)}" loading="lazy" />`;
  }
  if (ref.url) {
    return `<div class="link-fallback">打开链接参考</div>`;
  }
  return `<div class="link-fallback">待补图片</div>`;
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function renderCards() {
  const refs = filteredRefs();
  els.countLabel.textContent = refs.length;
  els.emptyState.classList.toggle("show", refs.length === 0);
  els.cardGrid.innerHTML = refs
    .map(
      (ref) => `
        <article class="ref-card" data-id="${ref.id}">
          <div class="ref-image">${imageMarkup(ref)}</div>
          <div class="ref-content">
            <p class="ref-title">${escapeHtml(ref.title)}</p>
            <div class="meta-row">
              <span class="pill">${escapeHtml(ref.vibe)}</span>
              <span class="pill alt">${escapeHtml(ref.scene)}</span>
              <span class="pill">${escapeHtml(ref.shot)}</span>
            </div>
            <div class="tag-row">
              ${(ref.tags || []).slice(0, 4).map((tag) => `<span class="pill alt">#${escapeHtml(tag)}</span>`).join("")}
            </div>
            <p class="note">${escapeHtml(ref.note || "还没有动作拆解。")}</p>
          </div>
          <div class="card-actions">
            <button class="icon-btn" type="button" data-action="open" data-id="${ref.id}">查看</button>
            <button class="icon-btn" type="button" data-action="delete" data-id="${ref.id}">删除</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderShootTips() {
  const scene = els.shootScene.value;
  const vibe = els.shootVibe.value;
  const vibeData = collectionByName(vibe);
  const matches = state.refs
    .filter((ref) => (scene === "全部" || ref.scene === scene) && (vibe === "全部" || ref.vibe === vibe))
    .slice(0, 3);

  const baseTips = [
    { title: "穿搭配色", text: vibeData.colorsText || `${vibeData.name}适合低冲突配色，身上保留 1 个重点色就够。` },
    { title: "动作表情", text: vibeData.tips.slice(0, 2).join("；") },
    { title: "构图光线", text: vibeData.tips.slice(2).join("；") },
  ];

  const refTips = matches.map((ref) => ({
    title: ref.title,
    text: `${ref.shot} / ${ref.note || "打开参考照，照着姿势和构图拍一张。"}`,
  }));

  const tips = refTips.length ? refTips : baseTips;
  els.shootTips.innerHTML = tips
    .map(
      (tip) => `
        <div class="tip">
          <strong>${escapeHtml(tip.title)}</strong>
          <p>${escapeHtml(tip.text)}</p>
        </div>
      `,
    )
    .join("");
}

function renderAll() {
  renderFilterRow(els.sceneFilters, scenes, state.selectedScene, "scene");
  renderFilterRow(els.vibeFilters, collectionNames(), state.selectedVibe, "vibe");
  renderFilterRow(els.shotFilters, shots, state.selectedShot, "shot");
  renderFilterRow(els.colorFilters, colorFilters(), state.selectedColor, "color");
  renderFilterRow(els.tagFilters, tagFilters(), state.selectedTag, "tag");
  const moodCards = [...document.querySelectorAll(".mood-card[data-vibe]")];
  moodCards.forEach((card, index) => {
    const isDefault = state.selectedVibe === "全部" && index === 0;
    card.classList.toggle("active", isDefault || card.dataset.vibe === state.selectedVibe);
  });
  renderCards();
  renderShootTips();
}

function resetForm() {
  els.addForm.reset();
  els.vibeInput.value = state.selectedVibe === "全部" ? state.collections[0].name : state.selectedVibe;
  els.sceneInput.value = state.selectedScene === "全部" ? scenes[0] : state.selectedScene;
  state.uploadData = "";
  state.outfitImages = [];
  els.uploadPreview.innerHTML = "<span>+</span><p>上传、拖入或粘贴截图</p>";
  renderOutfitPreview();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleImageFile(file) {
  if (!file) return;
  state.uploadData = await fileToDataUrl(file);
  els.uploadPreview.innerHTML = `<img src="${state.uploadData}" alt="已上传的参考预览" />`;
}

function renderOutfitPreview() {
  els.outfitPreview.innerHTML = state.outfitImages
    .map(
      (image, index) => `
        <button class="outfit-thumb" type="button" data-remove-outfit="${index}" aria-label="移除第${index + 1}张穿搭照片">
          <img src="${image}" alt="穿搭照片 ${index + 1}" />
        </button>
      `,
    )
    .join("");
}

async function handleOutfitFiles(files) {
  const selected = [...files].filter((file) => file.type.startsWith("image/"));
  if (!selected.length) return;
  const images = await Promise.all(selected.map(fileToDataUrl));
  state.outfitImages.push(...images);
  renderOutfitPreview();
}

function openDetail(id) {
  const ref = state.refs.find((item) => item.id === id);
  if (!ref) return;
  const duplicateOptions = state.collections
    .map((collection) => `<option value="${escapeHtml(collection.name)}">${escapeHtml(collection.name)}</option>`)
    .join("");
  els.dialogBody.innerHTML = `
    <div>${imageMarkup(ref)}</div>
    <div class="dialog-info">
      <div>
        <p class="section-kicker">${escapeHtml(ref.scene)} / ${escapeHtml(ref.shot)}</p>
        <h2>${escapeHtml(ref.title)}</h2>
      </div>
      <div class="meta-row">
        <span class="pill">${escapeHtml(ref.vibe)}</span>
        <span class="pill alt">${escapeHtml(ref.colors || "未写配色")}</span>
      </div>
      <div class="tag-row">
        ${(ref.tags || []).map((tag) => `<span class="pill alt">#${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div>
        <p class="section-kicker">动作拆解</p>
        <p>${escapeHtml(ref.note || "还没有写。")}</p>
      </div>
      ${
        ref.outfits?.length
          ? `
            <div>
              <p class="section-kicker">穿搭照片</p>
              <div class="outfit-gallery">
                ${ref.outfits.map((image, index) => `<img src="${image}" alt="穿搭照片 ${index + 1}" />`).join("")}
              </div>
            </div>
          `
          : ""
      }
      ${
        ref.url
          ? `<a class="primary" href="${escapeHtml(ref.url)}" target="_blank" rel="noreferrer">打开原链接</a>`
          : ""
      }
      <div class="detail-actions">
        <div class="field">
          <label for="duplicateVibe">复制到另一个氛围</label>
          <select id="duplicateVibe">${duplicateOptions}</select>
        </div>
        <button class="primary" type="button" data-action="duplicate" data-id="${ref.id}">复制一份</button>
        <button class="ghost danger" type="button" data-action="delete" data-id="${ref.id}">删除这条</button>
      </div>
    </div>
  `;
  const duplicateSelect = els.dialogBody.querySelector("#duplicateVibe");
  if (duplicateSelect) {
    duplicateSelect.value = state.collections.find((collection) => collection.name !== ref.vibe)?.name || ref.vibe;
  }
  els.detailDialog.showModal();
}

async function deleteRef(id) {
  state.refs = state.refs.filter((ref) => ref.id !== id);
  await saveRefs();
  if (els.detailDialog.open) {
    els.detailDialog.close();
  }
  renderAll();
  toast("已删除");
}

async function duplicateRef(id) {
  const ref = state.refs.find((item) => item.id === id);
  const duplicateSelect = els.dialogBody.querySelector("#duplicateVibe");
  if (!ref || !duplicateSelect) return;
  const vibe = duplicateSelect.value;
  const copy = {
    ...ref,
    id: uid(),
    vibe,
    title: ref.vibe === vibe ? `${ref.title} 副本` : ref.title,
    createdAt: new Date().toISOString(),
  };
  state.refs.unshift(copy);
  await saveRefs();
  state.selectedVibe = vibe;
  if (els.detailDialog.open) {
    els.detailDialog.close();
  }
  renderAll();
  toast(`已复制到${vibe}`);
}

async function addCollection() {
  const name = window.prompt("新收藏夹名字");
  if (!name) return;
  const cleanName = name.trim();
  if (!cleanName) return;
  if (state.collections.some((collection) => collection.name === cleanName)) {
    toast("已经有这个收藏夹了");
    return;
  }
  state.collections.push({
    name: cleanName,
    desc: "自定义收藏夹",
    colors: ["#FBFAFF", "#9E96E8", "#5D55C8", "#20204A"],
    tips: ["自定义", "可换封面"],
    cover: defaultCover(),
  });
  saveCollections();
  state.selectedVibe = cleanName;
  optionList(els.vibeInput, collectionNames());
  optionList(els.shootVibe, collectionNames(), "全部收藏夹");
  renderMoods();
  renderAll();
  resetForm();
  toast("已新增收藏夹");
}

async function deleteCollection(name) {
  if (state.collections.length <= 1) {
    toast("至少保留一个收藏夹");
    return;
  }
  if (!window.confirm(`删除收藏夹“${name}”？里面的参考会移到第一个收藏夹。`)) return;
  const fallback = state.collections.find((collection) => collection.name !== name);
  state.collections = state.collections.filter((collection) => collection.name !== name);
  state.refs = state.refs.map((ref) => (ref.vibe === name ? { ...ref, vibe: fallback.name } : ref));
  if (state.selectedVibe === name) state.selectedVibe = "全部";
  await saveRefs();
  saveCollections();
  optionList(els.vibeInput, collectionNames());
  optionList(els.shootVibe, collectionNames(), "全部收藏夹");
  renderMoods();
  renderAll();
  resetForm();
  toast("已删除收藏夹");
}

function addCollectionTip(name) {
  const collection = collectionByName(name);
  if (!collection) return;
  const tip = window.prompt("新标签");
  if (!tip) return;
  const cleanTip = tip.trim();
  if (!cleanTip) return;
  collection.tips = uniqueValues([...(collection.tips || []), cleanTip]);
  saveCollections();
  renderMoods();
  renderAll();
  toast("已添加标签");
}

function removeCollectionTip(name, index) {
  const collection = collectionByName(name);
  if (!collection?.tips?.[index]) return;
  collection.tips.splice(index, 1);
  saveCollections();
  renderMoods();
  renderAll();
  toast("已删除标签");
}

function exportRefs() {
  const blob = new Blob(
    [JSON.stringify({ exportedAt: new Date().toISOString(), refs: state.refs, collections: state.collections }, null, 2)],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `korea-photo-playbook-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importRefs(file) {
  if (!file) return;
  const text = await file.text();
  const data = JSON.parse(text);
  const refs = Array.isArray(data) ? data : data.refs;
  if (!Array.isArray(refs)) {
    toast("这个文件不像参考库备份");
    return;
  }
  const normalized = refs.map((ref) => ({
    ...ref,
    id: ref.id || uid(),
    createdAt: ref.createdAt || new Date().toISOString(),
    tags: Array.isArray(ref.tags) ? ref.tags : normalizeTags(ref.tags || ""),
    outfits: Array.isArray(ref.outfits) ? ref.outfits : [],
  }));
  state.refs = [...normalized, ...state.refs];
  if (Array.isArray(data.collections) && data.collections.length) {
    const existing = new Set(collectionNames());
    data.collections.forEach((collection) => {
      if (!existing.has(collection.name)) {
        state.collections.push(collection);
      }
    });
    saveCollections();
  }
  await saveRefs();
  renderMoods();
  renderAll();
  toast(`导入了 ${normalized.length} 条参考`);
}

function bindEvents() {
  els.uploadPreview.addEventListener("click", () => els.imageInput.click());
  els.imageInput.addEventListener("change", (event) => handleImageFile(event.target.files[0]));
  els.outfitInput.addEventListener("change", (event) => handleOutfitFiles(event.target.files));
  els.outfitPreview.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-outfit]");
    if (!remove) return;
    state.outfitImages.splice(Number(remove.dataset.removeOutfit), 1);
    renderOutfitPreview();
  });
  els.coverInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file || !state.coverUploadVibe) return;
    const collection = collectionByName(state.coverUploadVibe);
    collection.cover = await fileToDataUrl(file);
    saveCollections();
    renderMoods();
    renderAll();
    toast(`已更新${state.coverUploadVibe}封面`);
    state.coverUploadVibe = "";
    els.coverInput.value = "";
  });
  els.heroImageBtn.addEventListener("click", () => els.heroImageInput.click());
  els.heroImageInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    state.heroImage = await fileToDataUrl(file);
    saveHeroImage();
    renderHeroImage();
    toast("已更新首页头图");
    els.heroImageInput.value = "";
  });

  ["dragenter", "dragover"].forEach((name) => {
    els.dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      els.uploadPreview.style.borderColor = "#5D55C8";
    });
  });
  ["dragleave", "drop"].forEach((name) => {
    els.dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      els.uploadPreview.style.borderColor = "";
    });
  });
  els.dropZone.addEventListener("drop", (event) => handleImageFile(event.dataTransfer.files[0]));
  document.addEventListener("paste", (event) => {
    const file = [...event.clipboardData.files].find((item) => item.type.startsWith("image/"));
    if (file) handleImageFile(file);
  });

  els.moodGrid.addEventListener("click", (event) => {
    const addTipButton = event.target.closest("[data-add-tip]");
    if (addTipButton) {
      addCollectionTip(addTipButton.dataset.addTip);
      return;
    }

    const removeTipButton = event.target.closest("[data-remove-tip]");
    if (removeTipButton) {
      removeCollectionTip(removeTipButton.dataset.removeTip, Number(removeTipButton.dataset.tipIndex));
      return;
    }

    const addButton = event.target.closest("[data-add-collection]");
    if (addButton) {
      addCollection();
      return;
    }

    const deleteButton = event.target.closest("[data-delete-vibe]");
    if (deleteButton) {
      deleteCollection(deleteButton.dataset.deleteVibe);
      return;
    }

    const coverButton = event.target.closest("[data-cover-vibe]");
    if (coverButton) {
      state.coverUploadVibe = coverButton.dataset.coverVibe;
      els.coverInput.click();
      return;
    }

    const selectButton = event.target.closest("[data-vibe-select]");
    if (!selectButton) return;
    state.selectedVibe = selectButton.dataset.vibeSelect;
    els.vibeInput.value = state.selectedVibe;
    els.shootVibe.value = state.selectedVibe;
    renderAll();
  });

  els.addForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const ref = {
      id: uid(),
      title: els.titleInput.value.trim(),
      vibe: els.vibeInput.value,
      scene: els.sceneInput.value,
      shot: els.shotInput.value,
      colors: els.colorInput.value.trim(),
      outfits: [...state.outfitImages],
      tags: normalizeTags(els.tagInput.value),
      note: els.noteInput.value.trim(),
      url: els.imageUrl.value.trim(),
      image: state.uploadData,
      createdAt: new Date().toISOString(),
    };
    state.refs.unshift(ref);
    await saveRefs();
    resetForm();
    renderAll();
    toast("已保存到参考库");
  });

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderCards();
  });

  document.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-filter-type]");
    if (filter) {
      if (filter.dataset.filterType === "scene") state.selectedScene = filter.dataset.value;
      if (filter.dataset.filterType === "vibe") state.selectedVibe = filter.dataset.value;
      if (filter.dataset.filterType === "shot") state.selectedShot = filter.dataset.value;
      if (filter.dataset.filterType === "color") state.selectedColor = filter.dataset.value;
      if (filter.dataset.filterType === "tag") state.selectedTag = filter.dataset.value;
      renderAll();
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    event.stopPropagation();
    if (action.dataset.action === "open") openDetail(action.dataset.id);
    if (action.dataset.action === "delete") deleteRef(action.dataset.id);
    if (action.dataset.action === "duplicate") duplicateRef(action.dataset.id);
  });

  els.cardGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".ref-card");
    if (card) openDetail(card.dataset.id);
  });

  els.clearFiltersBtn.addEventListener("click", () => {
    state.selectedScene = "全部";
    state.selectedVibe = "全部";
    state.selectedShot = "全部";
    state.selectedColor = "全部";
    state.selectedTag = "全部";
    state.search = "";
    els.searchInput.value = "";
    renderAll();
  });

  els.shootBtn.addEventListener("click", renderShootTips);
  els.shootScene.addEventListener("change", renderShootTips);
  els.shootVibe.addEventListener("change", renderShootTips);
  els.exportBtn.addEventListener("click", exportRefs);
  els.importInput.addEventListener("change", (event) => importRefs(event.target.files[0]));
  els.closeDialog.addEventListener("click", () => els.detailDialog.close());
}

async function init() {
  loadCollections();
  loadHeroImage();
  renderHeroImage();
  renderMoods();
  optionList(els.vibeInput, collectionNames());
  optionList(els.sceneInput, scenes);
  optionList(els.shotInput, shots);
  optionList(els.shootScene, scenes, "全部场景");
  optionList(els.shootVibe, collectionNames(), "全部收藏夹");
  await loadRefs();
  resetForm();
  bindEvents();
  renderAll();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

init();

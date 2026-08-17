const TOTAL=12;
const KEY="sq-team-projekt-26-27-pilotklasse";
const STATUS={
 plan:{label:"Im Plan",cls:"green"},
 attention:{label:"Achtung",cls:"yellow"},
 critical:{label:"Kritisch",cls:"red"}
};
const blank=i=>({id:i,responsible:"",goal:"",task:"",deadline:"",status:"plan",next:""});
let packages=load();

function load(){
 try{
  const x=JSON.parse(localStorage.getItem(KEY));
  if(Array.isArray(x)&&x.length===TOTAL)return x;
 }catch(e){}
 return Array.from({length:TOTAL},(_,i)=>blank(i+1));
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function save(){localStorage.setItem(KEY,JSON.stringify(packages));document.getElementById("saveState").textContent="Gespeichert"}
function message(t){const e=document.getElementById("message");e.textContent=t;clearTimeout(window.t);window.t=setTimeout(()=>e.textContent="",2500)}
function render(){
 document.getElementById("packages").innerHTML=packages.map(p=>{
  const s=STATUS[p.status]||STATUS.plan;
  return `<article class="card" data-id="${p.id}">
   <div class="card-head"><span class="number">ARBEITSPAKET ${String(p.id).padStart(2,"0")}</span>
   <span class="status-pill"><i class="dot ${s.cls}"></i>${s.label}</span></div>
   <div class="card-body"><div class="fields">
    <div class="field full"><label>Verantwortliche</label><input data-field="responsible" value="${esc(p.responsible)}" placeholder="Name / Team"></div>
    <div class="field full"><label>Ziel</label><textarea data-field="goal" placeholder="Was soll erreicht sein?">${esc(p.goal)}</textarea></div>
    <div class="field full"><label>Aufgabe</label><textarea data-field="task" placeholder="Was ist konkret zu tun?">${esc(p.task)}</textarea></div>
    <div class="field"><label>Deadline</label><input type="date" data-field="deadline" value="${esc(p.deadline)}"></div>
    <div class="field"><label>Status</label><select data-field="status">
      <option value="plan" ${p.status==="plan"?"selected":""}>🟢 Im Plan</option>
      <option value="attention" ${p.status==="attention"?"selected":""}>🟡 Achtung</option>
      <option value="critical" ${p.status==="critical"?"selected":""}>🔴 Kritisch</option>
    </select></div>
    <div class="field full"><label>Nächste Schritte</label><textarea data-field="next" placeholder="Was passiert als Nächstes?">${esc(p.next)}</textarea></div>
   </div><div class="card-actions"><button class="btn btn-save" data-save="${p.id}">Speichern</button></div></div>
  </article>`;
 }).join("");
 bind();
}
function bind(){
 document.querySelectorAll("[data-save]").forEach(b=>b.addEventListener("click",()=>{
  const p=packages.find(x=>x.id===Number(b.dataset.save));
  b.closest(".card").querySelectorAll("[data-field]").forEach(el=>p[el.dataset.field]=el.value);
  save();render();message(`Arbeitspaket ${String(p.id).padStart(2,"0")} gespeichert.`);
 }));
}
document.getElementById("pdfBtn").addEventListener("click",()=>window.print());
render();

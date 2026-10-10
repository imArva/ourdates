import{b as e,d as t,f as n,g as r,i,l as a,n as o,u as s,y as c}from"./lib-BmfH8Z2i.js";l();async function l(){let l=await r();a(`groups`);let u=new URLSearchParams(location.search).get(`id`),d=await s(),f=d.find(e=>e.groups.id===u),p=document.getElementById(`detail`);if(!f)return p.innerHTML=`<p>This group was not found.</p>`;let m=f.groups,h=await i(u),g=`${location.origin}/join.html?key=${m.invite_key}`,_=n(d)===u,v=f.role===`owner`;p.innerHTML=`
    <section class="rounded-3xl bg-soft p-5">
      <h2 class="serif text-2xl">♡ ${o(m.name)}</h2>
      <p class="text-sm">You are ${v?`the owner`:`a member`} · ${h.length} member${h.length>1?`s`:``}</p>
      <div class="mt-3">
        ${_?`<span class="rounded-full bg-primary px-3 py-1 text-sm font-bold">Active group</span>`:`<button id="use" class="btn px-3 py-1 text-sm">Use this group</button>`}
      </div>
    </section>

    <section class="card mt-4 space-y-2">
      <h3 class="font-bold">Invite link</h3>
      <p class="text-xs">Anyone with this link can join after logging in.</p>
      <div class="flex gap-2">
        <input id="link" readonly value="${o(g)}" class="inp mt-0 text-xs">
        <button id="copy" class="btn px-3">Copy</button>
      </div>
    </section>

    <h3 class="mb-2 mt-4 font-bold">Members</h3>
    ${h.map(e=>`
      <div class="card mb-2 flex items-center gap-3">
        <span class="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold">${o(e.username[0]?.toUpperCase())}</span>
        <div class="flex-1">
          <p class="font-bold">${o(e.username)}${e.user_id===l.id?` (you)`:``}</p>
          <p class="text-xs">Joined ${new Date(e.created_at).toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`,year:`numeric`})}</p>
        </div>
        <div class="text-right text-xs">
          <span class="${e.role===`owner`?`rounded-full bg-secondary px-2 py-1 font-bold`:``}">${e.role}</span>
          ${v&&e.user_id!==l.id?`<br><button data-kick="${e.user_id}" data-name="${o(e.username)}" class="mt-1 underline">Remove</button>`:``}
        </div>
      </div>`).join(``)}

    <div class="mt-6">
      ${v?`<button id="delete" class="btn w-full bg-primary">Delete group</button>`:`<button id="leave" class="w-full text-sm underline">Leave group</button>`}
    </div>`,document.getElementById(`copy`).onclick=async()=>{try{await navigator.clipboard.writeText(g),alert(`Link copied ♡`)}catch{document.getElementById(`link`).select()}};let y=document.getElementById(`use`);y&&(y.onclick=()=>{e(u),location.reload()}),p.onclick=async e=>{let n=e.target.closest(`[data-kick]`);if(n&&confirm(`Remove ${n.dataset.name} from this group?`)){if(!t(await c.from(`group_members`).delete().eq(`group_id`,u).eq(`user_id`,n.dataset.kick).select()).length)return alert(`Could not remove this member.`);location.reload()}};let b=document.getElementById(`leave`);b&&(b.onclick=async()=>{confirm(`Leave this group?`)&&(t(await c.from(`group_members`).delete().eq(`group_id`,u).eq(`user_id`,l.id)),localStorage.getItem(`groupId`)===u&&localStorage.removeItem(`groupId`),location.href=`/groups.html`)});let x=document.getElementById(`delete`);x&&(x.onclick=async()=>{if(confirm(`Delete "${m.name}"? All its dates and reminders will be deleted for everyone. This can't be undone.`)){if(!t(await c.from(`groups`).delete().eq(`id`,u).select()).length)return alert(`Could not delete this group.`);localStorage.getItem(`groupId`)===u&&localStorage.removeItem(`groupId`),location.href=`/groups.html`}})}
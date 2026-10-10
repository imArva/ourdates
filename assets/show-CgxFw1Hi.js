import{S as e,c as t,h as n,l as r,m as i,n as a,p as o,r as s}from"./lib-BmfH8Z2i.js";c();async function c(){await n(),r(`dates`);let c=await s(new URLSearchParams(location.search).get(`id`)),l=document.getElementById(`detail`);if(!c)return l.innerHTML=`<p>This date was not found.</p>`;l.innerHTML=`
    <section class="rounded-3xl bg-soft p-5">
      <h2 class="serif text-2xl">♡ ${a(c.title)}</h2>
      <p>${t(c.scheduled_on)}</p>
      <p>${e(c)}</p>
      ${c.location?`<p>${a(c.location)}</p>`:``}
      ${c.note?`<hr class="my-3 border-primary"><p class="whitespace-pre-line">${a(c.note)}</p>`:``}
      <hr class="my-3 border-primary">
      <p class="font-bold">Reminders</p>
      ${c.reminders.map(e=>`<p>${o(e.minutes_before)}</p>`).join(``)||`<p class="text-sm">None</p>`}
    </section>
    <div class="mt-4 grid grid-cols-2 gap-3">
      <a href="/form.html?id=${c.id}" class="btn">Edit</a>
      <button id="del" class="btn bg-primary">Delete</button>
    </div>`,document.getElementById(`del`).onclick=async()=>{confirm(`Delete this date?`)&&(await i(c.id),location.href=`/dates.html`)}}


const API = 'http://localhost/cabinet/back-end/api1.php';   // ← same as admin.js

/* ── API helper ─────────────────────────────────────────── */
async function apiFetch(endpoint, method = 'GET', data = null) {
  try {
    const opts = { method, headers: { 'Content-Type': 'application/json' } };
    if (data) opts.body = JSON.stringify(data);
    const res = await fetch(`${API}?url=${endpoint}`, opts);
    if (!res.ok) throw new Error('Erreur serveur');
    return await res.json();
  } catch (e) {
    toast(e.message || 'Erreur de connexion', 'danger');
    return null;
  }
}

/* ── i18n ────────────────────────────────────────────────── */
const T = {
  fr: {
    login_title:'Al Shifa — Patient', login_sub:'Votre espace santé personnel',
    tab_login:'Se connecter', tab_reg:'Créer un compte',
    lbl_user:'Email ou téléphone', lbl_pass:'Mot de passe',
    lbl_prenom:'Prénom *', lbl_nom:'Nom *', lbl_email:'Email *',
    lbl_tel:'Téléphone *', lbl_dob:'Date de naissance', lbl_sexe:'Sexe',
    lbl_pass_new:'Mot de passe *', lbl_pass_conf:'Confirmer *',
    btn_login:'🔑 Se connecter', btn_reg:'✅ Créer mon compte',
    nav_home:'Accueil', nav_rdv:'Prendre RDV', nav_myrdv:'Mes rendez-vous', nav_profil:'Mon profil',
    pg_rdv:'📅 Prendre un rendez-vous', pg_rdv_sub:'Remplissez le formulaire pour soumettre votre demande.',
    pg_myrdv:'📋 Mes rendez-vous', pg_myrdv_sub:'Suivez l\'état de toutes vos demandes.',
    pg_profil:'👤 Mon profil', pg_profil_sub:'Modifiez vos informations personnelles.',
    lbl_doctor:'Médecin souhaité', lbl_date:'Date souhaitée *',
    lbl_motif:'Motif *', lbl_urgence:'Urgence', lbl_msg:'Message / Symptômes',
    btn_send:'📤 Envoyer la demande', btn_save:'💾 Enregistrer',
    stat_total:'Total demandes', stat_wait:'En attente', stat_ok:'Acceptées', stat_no:'Refusées',
    empty_rdv:'Aucune demande pour l\'instant', empty_rdv2:'Cliquez sur Prendre RDV pour commencer',
    last_dem:'Dernières demandes',
    err_req:'Date et motif obligatoires.', err_creds:'Email/téléphone ou mot de passe incorrect.',
    err_fields:'Tous les champs sont obligatoires.',
    err_email:'Email invalide.', err_tel:'Téléphone obligatoire.',
    err_pass6:'Mot de passe : minimum 6 caractères.',
    err_passmatch:'Les mots de passe ne correspondent pas.',
    err_exists:'Un compte existe déjà avec cet email.',
    ok_sent:'✅ Demande envoyée ! L\'équipe vous répondra bientôt.',
    ok_reg:'Bienvenue ! 🎉 Compte créé avec succès.',
    ok_profil:'Profil mis à jour ✓',
    lbl_info:'Informations personnelles', lbl_chgpass:'Changer le mot de passe',
    lbl_newpass:'Nouveau mot de passe (vide = inchangé)', lbl_confpass:'Confirmer',
    logout:'⏻ Quitter', back:'← Retour à l\'accueil',
    already:'Déjà un compte ?', signup_link:'Se connecter →',
    no_account:'Pas encore de compte ?', reg_link:'Créer un compte →',
    statut_wait:'En attente', statut_ok:'Accepté', statut_no:'Refusé',
    note_ok:'✅ Votre rendez-vous a été confirmé. Présentez-vous à la clinique.',
    note_no:'❌ Votre demande n\'a pas pu être honorée.',
    note_wait:'⏳ Votre demande est en cours de traitement.',
    days:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    months:['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    indiferent:'— Indifférent —', bonjour:'Bonjour',
  },
  en: {
    login_title:'Al Shifa — Patient', login_sub:'Your personal health portal',
    tab_login:'Sign in', tab_reg:'Create account',
    lbl_user:'Email or phone', lbl_pass:'Password',
    lbl_prenom:'First name *', lbl_nom:'Last name *', lbl_email:'Email *',
    lbl_tel:'Phone *', lbl_dob:'Date of birth', lbl_sexe:'Gender',
    lbl_pass_new:'Password *', lbl_pass_conf:'Confirm *',
    btn_login:'🔑 Sign in', btn_reg:'✅ Create my account',
    nav_home:'Home', nav_rdv:'Book appointment', nav_myrdv:'My appointments', nav_profil:'My profile',
    pg_rdv:'📅 Book an appointment', pg_rdv_sub:'Fill out the form to submit your request.',
    pg_myrdv:'📋 My appointments', pg_myrdv_sub:'Track the status of all your requests.',
    pg_profil:'👤 My profile', pg_profil_sub:'Update your personal information.',
    lbl_doctor:'Preferred doctor', lbl_date:'Preferred date *',
    lbl_motif:'Reason *', lbl_urgence:'Urgency', lbl_msg:'Message / Symptoms',
    btn_send:'📤 Send request', btn_save:'💾 Save',
    stat_total:'Total requests', stat_wait:'Pending', stat_ok:'Accepted', stat_no:'Refused',
    empty_rdv:'No requests yet', empty_rdv2:'Click Book appointment to get started',
    last_dem:'Recent requests',
    err_req:'Date and reason are required.', err_creds:'Incorrect email/phone or password.',
    err_fields:'All fields are required.',
    err_email:'Invalid email.', err_tel:'Phone is required.',
    err_pass6:'Password: minimum 6 characters.',
    err_passmatch:'Passwords do not match.',
    err_exists:'An account already exists with this email.',
    ok_sent:'✅ Request sent! The team will reply soon.',
    ok_reg:'Welcome! 🎉 Account created successfully.',
    ok_profil:'Profile updated ✓',
    lbl_info:'Personal information', lbl_chgpass:'Change password',
    lbl_newpass:'New password (empty = unchanged)', lbl_confpass:'Confirm',
    logout:'⏻ Sign out', back:'← Back to home',
    already:'Already have an account?', signup_link:'Sign in →',
    no_account:'No account yet?', reg_link:'Create account →',
    statut_wait:'Pending', statut_ok:'Accepted', statut_no:'Refused',
    note_ok:'✅ Your appointment has been confirmed. Please come to the clinic.',
    note_no:'❌ Your request could not be fulfilled.',
    note_wait:'⏳ Your request is being processed.',
    days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months:['January','February','March','April','May','June','July','August','September','October','November','December'],
    indiferent:'— No preference —', bonjour:'Hello',
  },
  ar: {
    login_title:'الشفاء — المريض', login_sub:'فضاؤك الصحي الشخصي',
    tab_login:'تسجيل الدخول', tab_reg:'إنشاء حساب',
    lbl_user:'البريد الإلكتروني أو الهاتف', lbl_pass:'كلمة المرور',
    lbl_prenom:'الاسم الأول *', lbl_nom:'اللقب *', lbl_email:'البريد الإلكتروني *',
    lbl_tel:'الهاتف *', lbl_dob:'تاريخ الميلاد', lbl_sexe:'الجنس',
    lbl_pass_new:'كلمة المرور *', lbl_pass_conf:'تأكيد *',
    btn_login:'🔑 تسجيل الدخول', btn_reg:'✅ إنشاء حسابي',
    nav_home:'الرئيسية', nav_rdv:'حجز موعد', nav_myrdv:'مواعيدي', nav_profil:'ملفي',
    pg_rdv:'📅 حجز موعد', pg_rdv_sub:'أملأ النموذج لإرسال طلبك.',
    pg_myrdv:'📋 مواعيدي', pg_myrdv_sub:'تابع حالة جميع طلباتك.',
    pg_profil:'👤 ملفي الشخصي', pg_profil_sub:'عدّل معلوماتك الشخصية.',
    lbl_doctor:'الطبيب المطلوب', lbl_date:'التاريخ المطلوب *',
    lbl_motif:'السبب *', lbl_urgence:'الاستعجال', lbl_msg:'رسالة / أعراض',
    btn_send:'📤 إرسال الطلب', btn_save:'💾 حفظ',
    stat_total:'إجمالي الطلبات', stat_wait:'قيد الانتظار', stat_ok:'مقبولة', stat_no:'مرفوضة',
    empty_rdv:'لا توجد طلبات بعد', empty_rdv2:'انقر على حجز موعد للبدء',
    last_dem:'آخر الطلبات',
    err_req:'التاريخ والسبب إلزاميان.', err_creds:'بريد إلكتروني أو كلمة مرور غير صحيحة.',
    err_fields:'جميع الحقول إلزامية.',
    err_email:'بريد إلكتروني غير صالح.', err_tel:'الهاتف إلزامي.',
    err_pass6:'كلمة المرور: 6 أحرف على الأقل.',
    err_passmatch:'كلمتا المرور غير متطابقتين.',
    err_exists:'يوجد حساب بهذا البريد الإلكتروني.',
    ok_sent:'✅ تم إرسال الطلب! سيرد الفريق قريباً.',
    ok_reg:'مرحباً! 🎉 تم إنشاء الحساب بنجاح.',
    ok_profil:'تم تحديث الملف ✓',
    lbl_info:'المعلومات الشخصية', lbl_chgpass:'تغيير كلمة المرور',
    lbl_newpass:'كلمة المرور الجديدة (فارغ = بدون تغيير)', lbl_confpass:'تأكيد',
    logout:'⏻ خروج', back:'→ العودة إلى الرئيسية',
    already:'لديك حساب بالفعل؟', signup_link:'تسجيل الدخول ←',
    no_account:'ليس لديك حساب؟', reg_link:'إنشاء حساب ←',
    statut_wait:'قيد الانتظار', statut_ok:'مقبول', statut_no:'مرفوض',
    note_ok:'✅ تم تأكيد موعدك. يرجى الحضور إلى العيادة.',
    note_no:'❌ لم يتمكنوا من تلبية طلبك.',
    note_wait:'⏳ طلبك قيد المعالجة.',
    days:['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
    months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    indiferent:'— غير محدد —', bonjour:'مرحباً',
  }
};

let LANG = 'fr';
let patSession = null;
let medecins   = [];

function tr(k) { return T[LANG]?.[k] ?? T.fr[k] ?? k; }

function setLang(lang, btn) {
  LANG = lang;
  sessionStorage.setItem('patLang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
  if (patSession) {
    renderCurrentPage();
  }
}

/* Apply all static text via data-i18n attributes */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = tr(k);
    } else {
      el.textContent = tr(k);
    }
  });
  // re-populate doctor dropdown language-neutral label
  const medSel = document.getElementById('rq-med');
  if (medSel && medSel.options[0]) medSel.options[0].textContent = tr('indiferent');
}

/* ── CONSTANTS ───────────────────────────────────────────── */
const MOTIFS = [
  'Consultation générale','Contrôle de routine','Douleur thoracique',
  'Céphalées / Migraines','Fièvre persistante','Douleurs abdominales',
  'Troubles du sommeil','Suivi diabète','Suivi tension artérielle','Vaccination',
  'Bilan de santé','Consultation psychiatrique','Dermatologie','Problèmes respiratoires',
  'Douleurs articulaires','Consultation pédiatrique','Gynécologie','Ophtalmologie',
  'ORL','Urgence médicale','Renouvellement ordonnance','Autre',
];

const uid   = () => Math.random().toString(36).slice(2, 9);
const today = () => new Date().toISOString().slice(0, 10);
const fmt   = d => {
  if (!d) return '—';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString(LANG === 'ar' ? 'ar-DZ' : LANG === 'en' ? 'en-GB' : 'fr-FR');
};
const san = s => String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ── AUTH ────────────────────────────────────────────────── */
function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('login-form').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('l-err').textContent = '';
  document.getElementById('r-err').textContent = '';
}

async function doLogin() {
  const u = document.getElementById('l-user').value.trim();
  const p = document.getElementById('l-pass').value;
  const errEl = document.getElementById('l-err');
  errEl.textContent = '';
  if (!u || !p) { errEl.textContent = tr('err_fields'); return; }

  const btn = document.getElementById('btn-login');
  btn.disabled = true;

  // Use the same PHP login endpoint with role=patient
  const res = await apiFetch('login', 'POST', { user: u, pass: p, role: 'patient' });
  btn.disabled = false;

  if (!res || !res.success) {
    errEl.textContent = tr('err_creds');
    return;
  }
  startApp(res.patient);
}

async function doRegister() {
  const prenom = document.getElementById('r-prenom').value.trim();
  const nom    = document.getElementById('r-nom').value.trim();
  const email  = document.getElementById('r-email').value.trim();
  const tel    = document.getElementById('r-tel').value.trim();
  const pass   = document.getElementById('r-pass').value;
  const pass2  = document.getElementById('r-pass2').value;
  const errEl  = document.getElementById('r-err');
  errEl.textContent = '';

  const err = msg => { errEl.textContent = msg; };
  if (!prenom || !nom)             { err(tr('err_fields'));    return; }
  if (!email || !email.includes('@')){ err(tr('err_email'));   return; }
  if (!tel)                        { err(tr('err_tel'));       return; }
  if (pass.length < 6)             { err(tr('err_pass6'));     return; }
  if (pass !== pass2)              { err(tr('err_passmatch')); return; }

  const btn = document.getElementById('btn-reg');
  btn.disabled = true;

  const pat = {
    id: uid(),
    nom: prenom + ' ' + nom,
    prenom, nomFamille: nom,
    email, tel, pass,
    sexe:      document.getElementById('r-sexe').value,
    naissance: document.getElementById('r-dob').value,
    inscrit:   today(),
  };

  const r = await apiFetch('patients', 'POST', pat);
  btn.disabled = false;

  if (!r || !r.success) return; // error toast shown by apiFetch
  toast(tr('ok_reg'), 'success');
  startApp(pat);
}

async function startApp(pat) {
  patSession = pat;
  sessionStorage.setItem('patSession', JSON.stringify(pat));
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').classList.add('show');

  const av = pat.nom.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  document.getElementById('nav-av').textContent  = av;
  document.getElementById('nav-name').textContent = pat.nom;

  // Load doctors from API for the dropdown
  const meds = await apiFetch('medecins');
  medecins = (meds || []).filter(m => m.actif == 1);

  document.getElementById('rq-date').min = today();
  document.getElementById('rq-med').innerHTML =
    `<option value="">${tr('indiferent')}</option>` +
    medecins.map(m => `<option value="${m.id}">${san(m.nom)} – ${san(m.spec)}</option>`).join('');
  document.getElementById('rq-motif').innerHTML = MOTIFS.map(m => `<option>${m}</option>`).join('');

  applyTranslations();
  renderDashboard();
}

function doLogout() {
  patSession = null;
  sessionStorage.removeItem('patSession');
  sessionStorage.removeItem('patLang');
  document.getElementById('app').classList.remove('show');
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('l-user').value = '';
  document.getElementById('l-pass').value = '';
}

/* ── NAVIGATION ──────────────────────────────────────────── */
let _currentPage = 'dashboard';
function goPage(id, btn) {
  _currentPage = id;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pg-' + id)?.classList.add('active');
  if (btn) btn.classList.add('active');
  renderCurrentPage();
}
function renderCurrentPage() {
  if (_currentPage === 'dashboard') renderDashboard();
  if (_currentPage === 'mes-rdv')   renderMyRDV();
  if (_currentPage === 'profil')    renderProfil();
}

/* ── DASHBOARD ───────────────────────────────────────────── */
async function renderDashboard() {
  if (!patSession) return;
  document.getElementById('dash-title').textContent =
    tr('bonjour') + ', ' + patSession.nom.split(' ')[0] + ' !';

  const all = await apiFetch('demandes');
  const dems = (all || []).filter(d => d.patientId === patSession.id);

  const pending  = dems.filter(d => d.statut === 'En attente').length;
  const accepted = dems.filter(d => d.statut === 'Accepté').length;
  const refused  = dems.filter(d => d.statut === 'Refusé').length;

  document.getElementById('dash-stats').innerHTML = `
    <div class="stat-card"><div class="stat-val" style="color:var(--blue)">${dems.length}</div><div class="stat-lbl">${tr('stat_total')}</div></div>
    <div class="stat-card"><div class="stat-val" style="color:var(--warn)">${pending}</div><div class="stat-lbl">${tr('stat_wait')}</div></div>
    <div class="stat-card"><div class="stat-val" style="color:var(--g500)">${accepted}</div><div class="stat-lbl">${tr('stat_ok')}</div></div>
    <div class="stat-card"><div class="stat-val" style="color:var(--danger)">${refused}</div><div class="stat-lbl">${tr('stat_no')}</div></div>`;

  const recent = [...dems].sort((a, b) => (b.inscrit || '').localeCompare(a.inscrit || '')).slice(0, 3);
  document.getElementById('dash-recent').innerHTML = recent.length
    ? `<div style="font-size:14px;font-weight:700;color:var(--gray700);margin-bottom:12px">${tr('last_dem')}</div>
       ${recent.map(d => rdvCardHTML(d)).join('')}`
    : `<div style="background:#fff;border-radius:12px;padding:40px;text-align:center;color:var(--gray400);border:1.5px solid var(--gray200)">
         <div style="font-size:40px;margin-bottom:10px">📭</div>
         <div style="font-size:15px;font-weight:600">${tr('empty_rdv')}</div>
         <div style="font-size:13px;margin-top:6px">${tr('empty_rdv2')}</div>
       </div>`;
}

/* ── SUBMIT RDV — KEY FIX: posts to PHP API ──────────────── */
async function submitRDV() {
  const date  = document.getElementById('rq-date').value;
  const motif = document.getElementById('rq-motif').value;
  if (!date || !motif) { toast(tr('err_req'), 'danger'); return; }

  const btn = document.getElementById('btn-send');
  btn.disabled = true;

  const dem = {
    id:        uid(),
    patientId: patSession.id,          // ← patient ID stored so admin can see it
    nom:       patSession.nom,
    tel:       patSession.tel   || '',
    email:     patSession.email || '',
    medecinId: document.getElementById('rq-med').value || null,
    date,
    motif,
    urgence:   document.getElementById('rq-urgence').value,
    msg:       document.getElementById('rq-msg').value,
    statut:    'En attente',
    inscrit:   today(),
    noteReponse: '',
  };

  const r = await apiFetch('demandes', 'POST', dem);
  btn.disabled = false;
  if (!r) return;

  // Reset form
  document.getElementById('rq-date').value    = '';
  document.getElementById('rq-motif').value   = MOTIFS[0];
  document.getElementById('rq-med').value     = '';
  document.getElementById('rq-urgence').value = 'Normal';
  document.getElementById('rq-msg').value     = '';

  toast(tr('ok_sent'), 'success');
  goPage('mes-rdv', document.querySelectorAll('.side-btn')[2]);
}

/* ── MES RDV ─────────────────────────────────────────────── */
async function renderMyRDV() {
  if (!patSession) return;
  const el  = document.getElementById('rdv-list');
  el.innerHTML = '<div style="text-align:center;padding:30px;color:var(--gray400)">…</div>';

  const all  = await apiFetch('demandes');
  const dems = (all || [])
    .filter(d => d.patientId === patSession.id)
    .sort((a, b) => (b.inscrit || '').localeCompare(a.inscrit || ''));

  el.innerHTML = dems.length
    ? dems.map(d => rdvCardHTML(d)).join('')
    : `<div style="background:#fff;border-radius:12px;padding:40px;text-align:center;
        color:var(--gray400);border:1.5px solid var(--gray200)">
        <div style="font-size:40px;margin-bottom:10px">📭</div>
        <div style="font-size:15px;font-weight:600">${tr('empty_rdv')}</div>
      </div>`;
}

function rdvCardHTML(d) {
  const med = d.medecinId ? medecins.find(m => m.id === d.medecinId) : null;

  const statutLabel = d.statut === 'Accepté' ? tr('statut_ok')
                    : d.statut === 'Refusé'  ? tr('statut_no')
                    : tr('statut_wait');
  const statusColor = d.statut === 'Accepté' ? 'var(--g500)'
                    : d.statut === 'Refusé'  ? 'var(--danger)'
                    : 'var(--warn)';
  const statusBg  = d.statut === 'Accepté' ? '#f0fdf4'
                  : d.statut === 'Refusé'  ? '#fef2f2' : '#fffbeb';
  const statusBdr = d.statut === 'Accepté' ? '#bbf7d0'
                  : d.statut === 'Refusé'  ? '#fecaca' : '#fde68a';

  const note = d.statut === 'Accepté'
    ? (san(d.noteReponse) || tr('note_ok'))
    : d.statut === 'Refusé'
    ? (san(d.noteReponse) || tr('note_no'))
    : tr('note_wait');
  const noteClass = d.statut === 'Accepté' ? 'ok' : d.statut === 'Refusé' ? 'no' : 'wait';

  const urgColor = d.urgence === 'Urgent' || d.urgence === 'Très urgent' ? '#dc2626' : '#6b7280';
  const urgBg    = d.urgence === 'Urgent' || d.urgence === 'Très urgent' ? '#fef2f2' : '#f9fafb';
  const urgBdr   = d.urgence === 'Urgent' || d.urgence === 'Très urgent' ? '#fecaca' : '#e5e7eb';

  return `<div class="rdv-card">
    <div class="rdv-card-header">
      <div class="rdv-header-left">
        <div class="rdv-motif">${san(d.motif)}</div>
        <div class="rdv-date">📅 ${fmt(d.date)} · 📝 ${fmt(d.inscrit)}</div>
        ${med ? `<div class="rdv-med">👨‍⚕️ ${san(med.nom)} — ${san(med.spec)}</div>` : ''}
      </div>
      <div class="rdv-header-right">
        <div class="rdv-status-badge"
             style="background:${statusBg};color:${statusColor};border:1.5px solid ${statusBdr};
                    padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;white-space:nowrap">
          ${statutLabel}
        </div>
        <div class="rdv-urgence"
             style="background:${urgBg};color:${urgColor};border:1px solid ${urgBdr};
                    padding:4px 10px;border-radius:16px;font-size:11px;margin-top:6px">
          ${san(d.urgence)}
        </div>
      </div>
    </div>
    ${d.msg ? `<div class="rdv-msg">"${san(d.msg)}"</div>` : ''}
    <div class="rdv-note ${noteClass}">${note}</div>
  </div>`;
}

/* ── PROFIL ──────────────────────────────────────────────── */
function renderProfil() {
  if (!patSession) return;
  const p = patSession;
  document.getElementById('profil-content').innerHTML = `
    <div class="form-card">
      <div class="section-title">${tr('lbl_info')}</div>
      <div class="form-row">
        <div class="fg"><label class="fl">${tr('lbl_prenom')}</label>
          <input class="fi" id="ep-prenom" value="${san(p.prenom || p.nom?.split(' ')[0] || '')}"/></div>
        <div class="fg"><label class="fl">${tr('lbl_nom')}</label>
          <input class="fi" id="ep-nom" value="${san(p.nomFamille || p.nom?.split(' ').slice(1).join(' ') || '')}"/></div>
      </div>
      <div class="form-row">
        <div class="fg"><label class="fl">${tr('lbl_email')}</label>
          <input class="fi" id="ep-email" type="email" value="${san(p.email || '')}"/></div>
        <div class="fg"><label class="fl">${tr('lbl_tel')}</label>
          <input class="fi" id="ep-tel" value="${san(p.tel || '')}"/></div>
      </div>
      <div class="form-row">
        <div class="fg"><label class="fl">${tr('lbl_dob')}</label>
          <input class="fi" id="ep-dob" type="date" value="${p.naissance || ''}"/></div>
        <div class="fg"><label class="fl">${tr('lbl_sexe')}</label>
          <select class="fsel" id="ep-sexe">
            <option value="">—</option>
            <option ${p.sexe === 'Masculin' ? 'selected' : ''}>Masculin</option>
            <option ${p.sexe === 'Féminin'  ? 'selected' : ''}>Féminin</option>
          </select></div>
      </div>
    </div>
    <div class="form-card">
      <div class="section-title">${tr('lbl_chgpass')}</div>
      <div class="fg"><label class="fl">${tr('lbl_newpass')}</label>
        <input class="fi" id="ep-pass" type="password" placeholder="Min. 6 caractères"/></div>
      <div class="fg"><label class="fl">${tr('lbl_confpass')}</label>
        <input class="fi" id="ep-pass2" type="password" placeholder="Répéter"/></div>
    </div>
    <div style="display:flex;justify-content:flex-end">
      <button class="btn-send" onclick="saveProfil()">${tr('btn_save')}</button>
    </div>`;
}

async function saveProfil() {
  const prenom = document.getElementById('ep-prenom').value.trim();
  const nom    = document.getElementById('ep-nom').value.trim();
  const pass   = document.getElementById('ep-pass').value;
  const pass2  = document.getElementById('ep-pass2').value;

  if (pass && pass.length < 6)  { toast(tr('err_pass6'),     'danger'); return; }
  if (pass && pass !== pass2)   { toast(tr('err_passmatch'),  'danger'); return; }

  const payload = {
    nom:       (prenom + ' ' + nom).trim() || patSession.nom,
    prenom,
    nomFamille: nom,
    email:      document.getElementById('ep-email').value.trim(),
    tel:        document.getElementById('ep-tel').value.trim(),
    naissance:  document.getElementById('ep-dob').value,
    sexe:       document.getElementById('ep-sexe').value,
  };
  if (pass) payload.pass = pass;

  const r = await apiFetch(`patients&id=${patSession.id}`, 'PUT', payload);
  if (!r) return;

  // update local session
  Object.assign(patSession, payload);
  const av = patSession.nom.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  document.getElementById('nav-av').textContent   = av;
  document.getElementById('nav-name').textContent = patSession.nom;
  toast(tr('ok_profil'), 'success');
}

/* ── TOAST ───────────────────────────────────────────────── */
function toast(msg, type = 'success') {
  const colors = { success: '#22c55e', danger: '#ef4444', warn: '#f59e0b', info: '#0891b2' };
  const el = document.createElement('div');
  el.className = 't-item';
  el.innerHTML = `<span style="color:${colors[type]||colors.info};font-size:16px">
    ${type==='success'?'✓':type==='danger'?'✕':'⚠'}</span>${msg}`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => {
    el.style.cssText = 'opacity:0;transition:all .3s';
    setTimeout(() => el.remove(), 300);
  }, 3500);
}

/* ── ENTER KEY ───────────────────────────────────────────── */
document.getElementById('l-pass')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') doLogin();
});

/* ── RESTORE SESSION ON REFRESH ──────────────────────────── */
(function restoreSession() {
  const savedLang = sessionStorage.getItem('patLang');
  if (savedLang && T[savedLang]) {
    LANG = savedLang;
    document.documentElement.lang = savedLang;
    document.documentElement.dir  = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === savedLang));
  }

  const saved = sessionStorage.getItem('patSession');
  if (saved) {
    try {
      const pat = JSON.parse(saved);
      if (pat && pat.id) {
        startApp(pat);
        return;
      }
    } catch (e) { /* ignore */ }
  }
  // No saved session — show auth screen as normal
  applyTranslations();
})();

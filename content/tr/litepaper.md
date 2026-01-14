# SOPCOS LITEPAPER v2.0
### The Industrial Trust Protocol (Endüstriyel Güven Protokolü)

---

## 🛡️ Executive Anchor (Yönetici Özeti)

> "Sopcos, makinelerin verdiği kararları hukuken sahiplenilebilir hale getiren endüstriyel işletim katmanıdır." 

Endüstri 4.0 hıza, Endüstri 5.0 ise insan-makine işbirliğine odaklanır. Sopcos ise eksik kalan parçayı tamamlar: **Sorumluluk (Liability)**. 

> “Biz, otomasyonun hızını; blokzincirin değişmezliği ve hukukun kesinliğiyle birleştiriyoruz.” 

---

## 1. The Concept: Neden Sopcos? (Felsefe)

Mevcut endüstriyel sistemler "Veri"ye (Data) odaklanır; Sopcos ise **"Karar"a (Verdict)** odaklanır.

Bir kaza olduğunda SCADA logları size "ne olduğunu" söyleyebilir, ancak "neden olduğunu" ve "sorumluluğun kimde olduğunu" yasal kesinlikle kanıtlayamaz. 

Sopcos'un temel tezi şudur: **Hız refleks ister, güven kayıt ister, sorumluluk imza ister.** 

* **Sopcos bir SCADA değildir;** SCADA'yı denetleyen bir noterdir. 
* **Sopcos bir Yapay Zeka projesi değildir;** Yapay Zeka'yı güvenli bir kafese alan bir yönetim katmanıdır. 

---

## 2. The Architecture: Ekosistem (Mimari)

Sopcos, tek bir yazılım değil, görevleri kesin çizgilerle ayrılmış dört ana organa sahip bir organizmadır: 

### 🔌 2.1. SYNAPSE (The Reflex & Hot Path)
**"Sistemin Elleri ve Refleksleri."** Makine ile fiziksel teması kuran uç (Edge) birimidir. 

* **Görevi:** **SIP-013** ile tanımlanmış "Gerçekliği" okur ve **SIP-001** politikalarını uygular. 
* **Pre-Law:** İnsan yorumuna açık olmayan, fizik ve mühendislik sınırlarını uygulayan mutlak kurallar. 
* **Hot Path (Sıcak Yol):** Kritik bir güvenlik ihlali (Örn: Sıcaklık > Limit) algıladığında, kimseye sormadan, gecikmesiz (Real-time) ve deterministik olarak **MÜDAHALE EDER**. 

### 🧠 2.2. AXON (The Cognition & Cold Path) — Opsiyonel
**"Sistemin Muhakeme Yeteneği."** Karmaşık analizler ve kestirimci bakım için devreye giren "Akıl Odası"dır. 

* **Bikamaral Zihin:** Karar veren (Synapse) ile düşünen ama karar almayan (Axon) yapının bilinçli ayrımı. 
* **Cold Path (Soğuk Yol):** Acil olmayan verileri analiz eder (Örn: "Titreşim artıyor, 1 hafta sonra rulman dağılabilir"). 
* **Silent Alarm (Gizlilik):** **SIP-017** sayesinde, bulduğu kritik açıkları zincire ifşa etmez; yöneticisine şifreli "Kırmızı Telefon" hattından bildirir. 

### 🏛️ 2.3. CORE LEDGER (The Immutable Record)
**"Sistemin Hafızası ve Noteri."** Synapse ve Axon'un ürettiği kararların, **SIP-014 Vault** mimarisi ile mühürlendiği L1 blokzincirdir. 

* **Rolü:** Karar vermez, yargılamaz; sadece **kanıtlar ve susturur.** 
* **Gücü:** Fabrikanız yansa bile, kararlarınızın ve uyarılarınızın kanıtı bu zincirde sonsuza dek yaşar. 

### 🆔 2.4. IDAS (Industrial Digital Assets)
**"Makinelerin Dijital Kimliği."** Fabrikanızdaki cihazlar artık sadece birer IP adresi değil, **SIP-016** standardına sahip birer Endüstriyel NFT'dir. 

* **İşlevi:** Cihazın bakım geçmişi, mülkiyeti ve yetkileri (Lisanslar) bu kimliğe işlenir. Sahte parça veya yetkisiz yazılım sisteme giremez. 

---

## 3. The Workflow: Nasıl Çalışır? (Akış)

Sopcos, veriyi ihtiyaca göre iki farklı yoldan (Hot/Cold) geçirir: 

### 🔥 Senaryo 1: Acil Tehlike (Hot Path)
* **Olay:** Kazan basıncı 150 Bar'a fırladı (Limit: 140). 
* **Synapse:** Refleks devreye girer. Yapay zekaya danışmaz. 
* **Aksiyon:** **<10ms** içinde "Vana Aç" komutunu PLC'ye gönderir. 
* **Sonuç:** Önce hayat kurtarır, sonra **SIP-002** gereği olayı zincire "Müdahale Edildi" olarak yazar. 

### ❄️ Senaryo 2: Derin Analiz (Cold Path)
* **Olay:** Basınç normal ama ses sensöründe garip bir frekans var. 
* **Axon:** Veriyi alır, geçmişle kıyaslar. (Süre: Saniyeler/Dakikalar). 
* **Aksiyon:** "Valf contası %80 aşınmış" teşhisini koyar. 
* **Sonuç:** Bakım ekibine **SIP-017** üzerinden şifreli, "Sadece Gözler İçin" (For Your Eyes Only) bir bakım emri gönderir. 

---

## 4. The Guarantee: Güven ve Sorumluluk

Sopcos, teknolojiden fazlasını; bir **"Hukuki Güvenlik Kalkanı"** sunar: 

* **İnsan Müdahalesi (Override):** Bir operatör sistemi bypass etmek isterse, Sopcos buna izin verir ancak **SIP-006** gereği ondan biyometrik bir imza alır: **Confession of Liability (Geri alınamaz sorumluluk beyanı)**. "Sistemi durdurdum ve sorumluluğu alıyorum" demeyen kimse sistemi durduramaz. 
* **Öngörü Kanıtı (Foreknowledge):** Bir kaza olmadan önce sistem sizi uyardı mı? **SIP-005** simülasyon kayıtları, "Bilmiyordum" savunmasını ortadan kaldırır. 
* **Veri Egemenliği:** Verileriniz üçüncü parti bulutlarda değil, **SIP-014** ile kendi "Vault"larınızda (Kasa) durur. Zincirde sadece bu verilerin "Parmak İzi" (Hash) bulunur. 

---

## 5. Conclusion (Sonuç)

Sopcos; yapay zeka ve blokzinciri "hype" olmaktan çıkarıp, **Endüstriyel Altyapı** haline getirmiştir. 

Biz makinelerinizi akıllandırmıyoruz; biz makinelerinizle kurduğunuz ilişkiyi **yasallaştırıyoruz**. 

**Sopcos: Trust, Executed. (Güvenin İcrası.)** 
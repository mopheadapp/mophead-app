<script>
import { mapMutations } from "vuex";
export default {
  name: "PrivacyPage",
  created(){
   this.setButtonDisabled(false)
  },
  methods: {
    ...mapMutations({ setButtonDisabled: "setButtonDisabled" }),
  },
  };
</script>
<template>
  <div class='align-self-start mt-12'>
    <h1 class='pr-5 pl-5 pt-2'>Kişisel Veri Gizlilik Politikası ve Aydınlatma Metni</h1>
    <h2 class='pr-5 pl-5 pt-2'>Giriş</h2>
    <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
      Mophead <strong class=' text--text'>(“biz”)</strong> için gizliliğin korunması ve kişisel verilerin hukuka uygun işlenmesi en yüksek önceliğe sahiptir ve bu doğrultuda gizliliğinizi sağlamayı taahhüt etmekteyiz. İşbu gizlilik politikası, kişisel verilerinizin tarafımızca nasıl toplandığını, işlendiğini, depolandığını ve ifşa edildiğini açıklamaktadır: kişisel verilerinizin internet sitemizde, platformumuzda ve mobil uygulamamızda işlenmesi (topluca <strong class=' text--text'>“Hizmetler”</strong>) için geçerlidir. Hizmetlerimizden herhangi birini kullanmadan önce bu gizlilik politikasını dikkatlice okumanızı öneririz.İşbu aydınlatma metnini, özellikle de faaliyetlerimizdeki veya yürürlükteki yasa ve yönetmeliklerdeki herhangi bir değişiklik nedeniyle haklarınız veya temel özgürlükleriniz etkilenecekse zaman zaman değiştirebiliriz. Bu tür değişiklikler yürürlükteki veri koruma mevzuatı uyarınca sizin onayınızı gerektiriyorsa, değişiklikler yürürlüğe girmeden önce onayınızı almak için sizinle iletişime geçeceğiz.
    </p>
    <h2 class='pr-5 pl-5 pt-2'>Biz kimiz</h2>
    <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
      Biz, “https://www.mophead.app” ve mophead isimli mobil uygulama platformunu işletiyor ve hizmetin sürekliliğini sağlıyoruz.6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca ve veri sorumlusu sıfatıyla Kişisel Verilerin Korunması Kanunu hükümlerine göre kişisel verilerinizi korumakla yükümlüyüz.Kişisel Verileri Koruma Görevlimizle ("KVKG"), info@mophead.app adresine bir e-posta göndererek, posta yoluyla kayıtlı ofis adresimize sorularınızı yönelterek veya yürürlükteki mevzuat uyarınca izin verilen başka bir yöntem yoluyla iletişime geçebilirsiniz.
    </p>
    <h2 class='pr-5 pl-5 pt-2'>Kullanıcıya Özel Bölümler</h2>
    <h3 class='pr-5 pl-5 pt-2'>I. EĞER HASTA/DANIŞAN İSENİZ (PLATFORMUMUZUN PROFESYONEL OLMAYAN KULLANICISI İSENİZ)</h3>
    <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
      Eğer bir hasta/danışan iseniz veya daha genel olarak mobil uygulamamızı klinikler/uzmanlar hakkında bilgi almak için ziyaret eden bir kullanıcısıysanız, aşağıdaki bilgiler sizin için geçerlidir:
    </p>
    <h4 class='pr-5 pl-5 pt-2'>A) Kişisel verilerinizi nasıl elde ediyor; hangi amaçlarla ve hangi yasal temelde işliyoruz?</h4>
    <h5 class='pr-5 pl-5 pt-2'>1. Hizmetlerimize kaydolma</h5>
    <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
      Mobil uygulamamıza kaydolduğunuzda veya hizmetlerimizi kullandığınızda kişisel verilerinizi doğrudan sizden alıyoruz.Hizmetlerimize kaydolduğunuzda, telefon numaranız dahil olmak üzere temel kişisel verileri sağlamanızı istiyoruz.  Ayrıca adınız, soyadınız, cinsiyetiniz, yaşınız gibi kendinizle ilgili ek bilgiler de sağlayabilirsiniz. Hizmetleri kullanabilmenizi sağlamak için bu bilgileri saklayacağız.Hizmetlerimizi internet sitemiz veya mobil uygulamamız aracılığı ile kullanabilirsiniz. Hizmetlerimiz, diğer özelliklerin yanı sıra şunları da yapmanızı sağlar: kliniklere/uzmanlara tedavinizle ilgili talep göndermek, kliniklerden/uzmanlardan talep edilen tedaviyle ilgili teklif almak kliniklere/uzmanlara mesaj göndermek ve belirli bir klinikle/uzmanla olan deneyiminizi değerlendirmek. Ayrıca platformumuz ve mobil uygulamamız üzerinden ziyaret geçmişinizi kontrol edebilir ve kullanıcı hesabınızı yönetebilirsiniz.Mobil kullanıcı hesabınızda anlık bildirimleri (ör: açılır “pop-up” pencereler) ve diğer benzer sistem bildirimlerini yönetebilirsiniz. Bu tür bildirimleri almamayı seçerseniz, bahsi geçen bildirimleri hesap ayarlarınız üzerinden devre dışı bırakabilirsiniz.Hizmetlerimizi kullanmak için kaydolduğunuzda, bizimle yasal olarak bağlayıcı bir sözleşme yapmış olursunuz. Bu sözleşme, Kişisel Verilerin İşlenmesi Kanunu’nun 5.2. maddesi uyarınca kişisel verilerinizin işlenmesine yasal bir dayanak oluşturmaktadır.Bir sözleşmenin kurulması ve ifasıyla doğrudan doğruya ilgili olması yasal şartına ek olarak, kişisel verileriniz Kişisel Verilerin Korunması Kanunu’nun 5.2. Maddesi’nde belirtilen diğer yasal şartlara uygun olarak da işlenebilmektedir. Bu şartlar veri sorumlusu olarak hukuki yükümlülüklerimizi yerine getirmek için veri işlemenin zorunlu olması ve veri sorumlusu olarak meşru menfaatlerimiz uyarınca verilerinizin işlenmesi şartlarıdır. Rıza gerektiren verileri işleme faaliyetlerine ilişkin olarak, bu tür veri işleme faaliyetleriniz ancak açık rızanızın temin edilmesi ile Kişisel Verilerin Korunması Kanunu’nun 5.1 maddesi çerçevesinde yürütülecektir.
    </p>
    <h5 class='pr-5 pl-5 pt-2'>2. Kişisel verilerinizin depolanması ve klinikler/uzmanlar ile paylaşılması</h5>
    <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
      Hizmetlerimizin bir parçası olarak, kişisel verilerinizi kullanıcı hesabınızda saklamanızı sağlıyoruz. Bu imkan, diğer özelliklerin yanı sıra size şu olanakları sunar:
      <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>Kişisel verilerinizin tek bir ortamda saklanması,</li>
        <li>Tedavileriniz ile ilgili diğer benzer bilgilerin kolayca erişilebilir bir listesine sahip olmak.</li>
      </ul>
    Tedavileriniz ile ilgili diğer benzer bilgilerin kolayca erişilebilir bir listesine sahip olmak. Bunun yanı sıra, mobil uygulamamızda kullanıcı Profiliniz aracılığıyla sağlıkla ilgili kişisel verilerinizi mobil uygulama hesabınızda saklamanızı sağlıyoruz. Bu imkan, diğer özelliklerin yanı sıra size şu olanakları sunar: 
      <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>Uygun olduğunu düşündüğünüz sağlığa ilişkin kişisel verilerinizin tek bir ortamda saklanması,</li>
        <li>Ziyaretinizden önce kliniklerin/uzmanların bu bilgilere sahip olması için bu bilgilerin seçmiş olduğunuz klinikler/uzmanlar ile paylaşılması,</li>
      </ul>
      Kişisel bilgilerinizi ve fotoğraflarınızı talep göndermek için eklediğinizde, sağlıkla ilgili kişisel verilerinizi işlemek için sizden açık rızanız istiyor olacağız. Kişisel verileriniz, yalnızca yukarıda bahsedilen depolama özelliğinin size sağlanması ve bu verilerin seçmiş olduğunuz klinikler/uzmanlar ile paylaşılması amaçlarıyla rızanız ile işlenmekte ve aktarılmaktadır. Kişisel bilgileriniz tarafımızca başka hiçbir amaç için kullanılmayacak, bu tür veriler size bildirilmeksizin üçüncü kişilere satılmayacak veya aktarılmayacaktır. Rızanız isteğe bağlıdır ve istenildiği takdirde her zaman iptal edilebilir. Eğer rızanızı iptal ederseniz, kullanıcı hesabınıza yüklediğiniz sağlıkla ilgili kişisel verileriniz tarafımızca silinecektir.Platformumuzu kullanarak klinikle/uzmanla iletişime geçtiğiniz takdirde, bu bilgilerin tamamını veya bir kısmını klinikle veya uzmanla paylaşma olanağına sahip olacaksınız. Her bir klinikle veya uzmanla hangi verilerinizi paylaşmak istediğinize kendiniz karar verirsiniz. Verilerinizi kliniklerle veya uzmanlar ile paylaşmak elbette isteğe bağlıdır, ancak kliniğin veya uzmanın randevuya/muayeneye hazırlanmasına yardımcı olacaktır. Verilerinizi paylaşmadan önce rızanızı alıyor olacağız. Yalnızca rıza verildiği takdirde seçtiğiniz kişisel verileriniz klinikle/uzmanla paylaşılacaktır. Sağlığa ilişkin kişisel verilerinizin klinikler/uzmanlar ile paylaşılması halinde hekimler/uzmanların ayrı birer veri sorumlusu olarak hareket ettiğini ve kişisel verilerinizi kendi gizlilik politikaları ile düzenlediklerini lütfen unutmayınız.Mobil uygulamamızda depolama özelliğini etkinleştirebilmeniz için ad, soyad ve e-posta verilerinizi bizimle paylaşmanız gerekmektedir.Ayrıca, depolama özelliğine eklemeniz halinde, telefon numaranız, kimliğiniz, önceki ziyaretlerinize ilişkin bilgileri de toplayabiliriz. Daha açık olması adına, sağlığa ilişkin kişisel verilerinizi yalnızca siz eklemeye karar verirseniz işleyeceğiz. Düşündüğünüz verileri eklemekte özgürsünüz, bu konuda minimum veya gerekli veri yoktur.Verilerinizin rızanız doğrultusunda aktarılması, Kişisel Verilerin Korunması Kanunu’nun 8. maddesine uygundur.
  </p>
  <h5 class='pr-5 pl-5 pt-2'>3. Klinik/Uzman ile sohbet başlatmak ve/veya mesaj göndermek</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Platformumuzu kullanırken klinikler/uzmanlar ile sohbet başlatabilir veya kendilerine özel mesaj gönderebilirsiniz. Mesaj gönderme özelliği mobil uygulamamızın kurgulanması sebebiyle sadece size verilen teklifi onayladığınızda etkinleşir.Sohbet geçmişinize, sorularınıza ve klinik/uzmanların cevaplarına istediğiniz zaman ulaşabilirsiniz.Sohbet seçeneğini kullanmadan önce, tarafımızca rızanız istenir ve konuşma ve mesaj opsiyonları için kişisel verileriniz Kişisel Verilerin Koruması Kanunu’nun 5.1, 5.2 ve 6.2. maddeleri uyarınca işlenir.Gerektiğinde, sohbet ve mesaj seçeneklerinin kullanımına ilişkin ek aydınlatma metinleri ve rıza seçenekleri sağlayabiliriz.
  </p>
  <h5 class='pr-5 pl-5 pt-2'>4. Değerlendirme eklenmesi</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Mobil uygulamamızda bir klinik/uzman hakkında değerlendirme eklemeniz halinde, hakkınızda bazı kişisel verileri edinmiş olabiliriz (örneğin, değerlendirmede ziyaret sebebinizden veya tedavi geçmişinizden bahsetmişseniz). Bu sebeple sağlıkla ilgili kişisel verilerinizin işlenmesi için rızanız alınmaktadır. Rıza esasına dayalı olarak sağlıkla ilgili kişisel verilerinizin işlenmesi, Kişisel Verilerin Korunması Kanunu 6.2. maddesine uygundur.Lütfen değerlendirmelerinizin herkese açık olduğunun farkında olun. Özel veya benzer nitelikteki herhangi bir bilgiyi değerlendirmeye dahil etmemenizi öneririz, çünkü bu bilgiler gizlenmeyip platformun tüm kullanıcılarına açık olacaktır.
  </p>
  <h5 class='pr-5 pl-5 pt-2'>5. Pazarlama</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Pazarlama ve ticari iletileri almaya onay verdiğinizde, e-posta adresiniz, telefon numaranız, adınız ve soyadınız bu amaçla tarafımızca işlenebilir. İstediğinizde bu iletileri almaktan vazgeçebilirsiniz. Kişisel verilerinizin bu amaçla işlenmesinin hukuki dayanağı Kişisel Verilerin Korunması Kanunu’nun 5.1. maddesidir.</p>

  <h5 class='pr-5 pl-5 pt-2'>6. Diğer amaçlar</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Hizmetlerimizi kullandığınız sırada, cihazınız, IP adresiniz, saat dilimi ve diliniz veya kullandığınız tarayıcı hakkında bilgiler içeren ek veriler edinebiliriz. Ayrıca Hizmetlerimizi ilk ve son ne zaman kullandığınız ve Hizmetlerimizi kullanırken ne kadar zaman harcadığınız hakkında da bilgi ediniriz.Mobil uygulamayı kullanırken, GPS verilerine dayalı olarak konum bilgilerinizi de edinebiliriz.Tarafımızca bu kişisel verilerin işlenme amacı:
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>Hizmetlere ilişkin olarak tarafınızca sunulabilecek her türlü iddia ve şikayetinizi değerlendirmek ve kendimizi bu iddia ve şikayetlerinize karşı veya Hizmetleri kullanımınızla ilgili herhangi bir üçüncü taraf iddiasına ve şikayetine karşı korumak;</li>
        <li>sizi Hizmetlerimize ilişkin yeni özellik ve işlevler hakkında bilgilendirmek;</li>
        <li>iş faaliyetlerimizi yönetmek ve planlamak (örneğin, ürünlerimizi ve hizmetlerimizi nasıl kullandığınızı analiz etmek, ürünümüze olan talebi tahmin etmek veya kullanıcılarımızın gelecekte Hizmetlerimizi nasıl kullanacağını öngörmek ve kullanıcıların ihtiyaç ve tercihlerindeki eğilimleri tahmin etmek için). Bu bilgilerin bir kısmı anonim hale getirilebilir (örn. İnternet sitemize gezinme şekliniz), ancak bilgilerden bazıları, diğer bilgiler ile birlikte değerlendirildiğinde kimliğinizi tespit edilebilir kılabilir (örn. Platformumuzda oturumunuzun ne kadar süre açık kaldığı ve hangi e-posta adresini kullandığınız).</li>
      </ul>
    Bu bilgileri, Kişisel Verilerin Korunması Kanunu madde 5.2 uyarınca ve sizinle olan sözleşmemizin kurulması ve ifası, bir hakkın tesis edilmesi veya kullanılması, yasal hak ve yükümlülüklerimizin yerine getirilmesi için gerekli olan işleme hallerinde ve meşru menfaatlerimize dayalı olarak işlemekteyiz.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>B) Sağlığınıza ilişkin bilgi ve verileri işliyor muyuz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Kliniklerden/Uzmanlardan teklif almanız, talep göndermeniz veya değerlendirme eklemeniz veya klinikle/uzmanla sohbet başlattığınız takdirde sağlık durumunuzla ilgili bilgi edinebiliriz. Sağlıkla ilgili kişisel verileriniz hakkında tarafımıza yetki veren uzman ve klinikler adına da veri işleyen olarak hareket edebiliriz. Daha detaylı için lütfen yukarıda yer alan “Kişisel verilerinizi nasıl temin ediyoruz, hangi amaçla ve hangi hukuki dayanakla işliyoruz?” başlıklı bölümü ve aşağıda yer alan “Hekimler/Uzmanlar ve klinikler adına veri işleyen olarak hareket ediyor muyuz?” başlıklı bölümleri inceleyin.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>C) Bize başka kişilere dair kişisel veriler sağladığınız durumlar var mı?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--textv'> 
    Başka bir kişi adına kişisel veri sağlıyorsanız, bu kişiyi bilgilendirmek ve gerektiği takdirde rızasını temin etmek sorumluluğu tarafınıza aittir.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>D) Klinikler/Uzmanlar adına veri işleyen olarak hareket ediyor muyuz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Uzmanlara ve kliniklere farklı hizmetler sunmaktayız. Bu hizmetler doktor ve kliniklerin, diğer amaçların yanı sıra, hastalarına ait kişisel verilerini yükleme ve depolamalarına olanak tanımaktadır. Bu hizmetler ayrıca hastalara mesaj veya e-posta, pazarlama kampanyaları göndermeye olanak tanır ve doktorlar ve klinikler tarafından çalışma takvimini yönetmek için kullanılır.Tüm bu sebeplerle, veri işleyen olarak hareket etmekte ve kendi hastalarının kişisel verilerini onların talimatları doğrultusunda işlemekteyiz.Veri işleyen olarak hareket ettiğimizde, yalnızca uzmanların ve kliniklerin (müşterilerimizin) talimatları doğrultusunda kişisel verileri işliyor, ilgili kişisel verileri kendi amaçlarımız doğrultusunda işlemiyoruz. Bu durum aynı zamanda platformumuz, mesaj, e-posta veya benzer iletişim yollarıyla veya kampanyalar aracılığıyla size gönderilen uzman hekimler ve kliniklere ilişkin bilgiler için de geçerlidir. Size mesaj, e-posta veya benzer kampanyalar gönderip gönderilmeyeceğine biz değil, onlar karar verirler. Bu tür iletişimler hakkında veya kişisel verilerinizin hekimler veya klinikler tarafından işlenmesi için herhangi bir sorumluluk kabul etmemekteyiz.Eğer herhangi bir mesaj almak istemiyorsanız, doğrudan size iletiyi gönderen uzman veya klinikle iletişime geçiniz.
  </p>
  <h3 class='pr-5 pl-5 pt-2'>II. EĞER KLİNİK/UZMAN OLARAK KAYITLI İSENİZ</h3>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Eğer platformumuzu ve Hizmetlerimizi uzman sıfatıyla kullanan bir klinikseniz ve (i) platformda bir profil oluşturduysanız, (ii) Hizmetlerimizi temin etmek için sözleşme akdettiyseniz, ya da (iii) Hizmetlerimizi temin etmek için tarafımızla sözleşme akdeden bir klinik bünyesinde veya adına çalışıyorsanız, aşağıdaki hususlara tabii olursunuz:
  </p>
  <h4 class='pr-5 pl-5 pt-2'>A) Kişisel verilerinizi nasıl temin ediyoruz? Hangi amaçlarla ve hangi hukuki dayanakla işliyoruz?</h4>
  <h5 class='pr-5 pl-5 pt-2'>1. Hizmetlerimize üye olmak ve hizmetlerimizi kullanmak</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Kişisel verilerinizi, hizmetlerimizi kullandığınızda veya üye olduğunuzda direkt olarak sizden temin etmekteyiz.Hizmetlerimize üye olduğunuzda, sizden profesyonel faaliyetlerinizle ilgili verileri ve kullanıcılarımızı sizin hakkınızda bilgilendirmemize yardımcı olacak ve platformumuzdaki profilinizde yayınlanacak diğer bilgileri sağlamanızı istiyoruz. Özellikle aşağıdaki bilgileri bize sağlayabilirsiniz:
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>Adınız ve soyadınız,</li>
        <li>İş adresiniz,</li>
        <li>E-posta adresiniz,</li>
        <li>Uzmanlık alanınız, eğitiminiz ve ilgilendiğiniz hastalıklar veya yapmış olduğunuz tıbbi muayeneler hakkında bilgiler,</li>
        <li>Sicil numaranız (mesleki faaliyetler yürütmeniz için verilen sicil numarası),</li>
        <li>Vergi numaranız,</li>
        <li>Fotoğrafınız,</li>
        <li>İşbirliği yaptığınız klinik hakkında detaylı bilgiler, ve</li>
        <li>Kayıt işlemi sırasında veya ücretli bir sözleşmenin uygulanması sırasında bize sağladığınız diğer tüm veriler.</li>
      </ul>
    Hizmetlerimize üye olduğunuzda tarafımızla hukuki açıdan bağlayıcı bir sözleşme yapmış olursunuz. Söz konusu sözleşme kapsamındaki yükümlülüklerimizi yerine getirme ve bunlara uyma zorunluluğumuz, Kişisel Verilerin İşlenmesi Kanunu’nun 5.2. maddesinde belirtildiği üzere kişisel verilerinizin işlenmesi için geçerli hukuki zemin oluşturmaktadır. Ayrıca, veri sorumlusu olarak kişisel verilerinizi yasal yükümlülüklerimizin gereği olarak da işlemekteyiz. Örneğin fatura düzenlemek ve mali kayıtlarımızı güncel tutmak gibi. Bu durum, Kişisel Verilerin İşlenmesi Kanunu’nun 5.2. maddesi uyarınca kişisel verilerinizin işlenmesine uygun yasal şart teşkil etmektedir.Kişisel verilerinizi, bizden Hizmet temin almak üzere sözleşme akdeden, bünyesinde veya birlikte çalıştığınız kliniklerden de toplamaktayız. Söz konusu klinikler, kendi sorumlulukları uyarınca kişisel verilerinizi tarafımıza aktarabilir ve biz de klinik ile akdettiğimiz sözleşmenin ifası için kişisel verilerinizi işleriz. Kişisel verilerinizi işlemek bizim için çok önemlidir, ancak kişisel verilerinizi tarafımıza aktaran klinikle her zaman iletişime geçebilir ve veri işlenmesine itiraz edebilir veya kişisel bilgilerinizin kullanımı için vermiş olduğunuz rızayı geri çekebilirsiniz.
  </p>
  <h5 class='pr-5 pl-5 pt-2'>2. Pazarlama amacı</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Pazarlama ve ticari iletişimleri almayı seçtiğinizde e-postanızı, telefon numaranızı, adınızı ve soyadınızı bu amaçla işleyebiliriz. Bu iletileri almayı her zaman iptal edebilirsiniz. Kişisel verilerinizin bu amaçla işlenmesinin hukuki dayanağı Kişisel Verilerin Korunması Kanunu’nun 5.1 maddesi uyarıncadır.
  </p>
  <h5 class='pr-5 pl-5 pt-2'>3. Diğer amaçlar</h5>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Hizmetlerimizi kullandığınızda, cihazınız, IP adresiniz, saat dilimi ve diliniz ya da kullandığınız tarayıcı gibi veriler de dahil olmak üzere ek veriler elde edebiliriz. Ayrıca Hizmetlerimizi ilk ve son ne zaman kullandığınız ve Hizmetlerimizi kullanırken ne kadar zaman harcadığınız hakkında da bilgi ediniriz.Mobil uygulamayı kullanırken, GPS verilerine dayalı olarak konum bilgilerinizi de edinebiliriz. Konum bilgilerinizi istediğiniz her zaman kapatabilirsiniz.Tarafımızca bu kişisel verilerin işlenme amacı:
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>Hizmetlere ilişkin olarak tarafınızca sunulabilecek her türlü iddia ve şikayete karşı ileri sürmek ve kendimizi bunlara karşı veya Hizmetleri kullanımınızla ilgili herhangi bir üçüncü taraf iddiasına ve şikayetine karşı korumak;</li>
        <li>sizi Hizmetlerimize ilişkin yeni özellik ve işlevler hakkında bilgilendirmek;</li>
        <li>iş faaliyetlerimizi yönetmek ve planlamak (örneğin, ürünlerimizi ve hizmetlerimizi nasıl kullandığınızı analiz etmek, ürünümüze olan talebi tahmin etmek veya kullanıcılarımızın gelecekte Hizmetlerimizi nasıl kullanacağını öngörmek ve kullanıcıların ihtiyaç ve tercihlerindeki eğilimleri tahmin etmek için). Bu bilgilerin bir kısmı anonim hale getirilebilir (örn. İnternet sitemize gezinme şekliniz), ancak bilgilerden bazıları, diğer bilgiler ile birlikte değerlendirildiğinde kimliğinizi tespit edilebilir kılabilir (örn. Platformumuzda oturumunuzun ne kadar süre açık kaldığı ve hangi e-posta adresini kullandığınız).</li>
      </ul>
    Bu bilgileri, Kişisel Verilerin Korunması Kanunu madde 5.2 uyarınca ve sizinle olan sözleşmemizin kurulması ve ifası, bir hakkın tesis edilmesi veya kullanılması, yasal hak ve yükümlülüklerimizin yerine getirilmesi için gerekli olan işleme hallerinde ve meşru menfaatlerimize dayalı olarak işlemekteyiz.
  </p>
  <h3 class='pr-5 pl-5 pt-2'>Tüm kullanıcılara uygulanacak bilgiler</h3>
  <h4 class='pr-5 pl-5 pt-2'>Kişisel verilerinizi üçüncü kişilerle paylaşıyor muyuz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Eğer açık rıza esasına dayalı olarak kişisel verilerinizin bir klinik/uzman ile paylaşılmasına izin verdiyseniz, paylaşmayı seçtiğiniz verileri ilgili klinik/uzman ile paylaşırız.Kişisel verilerinizi, yine yalnızca Hizmetlerimizi size sunmak amacıyla üçüncü taraf sağlayıcılarıyla paylaşabiliriz. Bu üçüncü kişiler veri işleyen olarak hareket etmekte ve tarafımızla veri koruma sözleşmesi akdetmişlerdir.Örnek olarak, kişisel verilerinizi aşağıdaki veri işleyen kategorisinde yer alan kişilerle paylaşabiliriz:
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>bulut bilişim ve sunucu bakım sağlayıcıları,</li>
        <li>iletişim araçları,</li>
        <li>müşteri destek araçları,</li>
        <li>harici danışmanlar ve denetçiler,</li>
        <li>ödeme hizmetleri sağlayıcıları, bankalar, kredi referans ve dolandırıcılık önleme kurumları ve sigorta şirketleri,</li>
        <li>Bize yazılım ve benzeri hizmetler sunan bilişim şirketleri.</li>
      </ul>
    Son olarak, yasal gerekliliklere yanıt vermek, politikalarımızı uygulamak, yürürlükteki yasaların gerektirdiği durumlarda adli veya düzenleyici makamlarla iletişim kurmak ve haklarımızı ve mülkiyetimizi korumak için bu verileri ifşa edebiliriz. Ayrıca bir işletme ile birleşmeyi, bu işletme tarafından yatırım yapılmasını veya devralınmayı planlıyorsak ya da kurumsal bir yeniden yapılanmaya girersek kişisel bilgilerinizi bu ticari kuruluşlarla da paylaşabiliriz.Bize önceden onay vermediğiniz sürece, kişisel bilgilerinizi başka bir üçüncü kişiye aktarmayacağız.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>Kişisel verilerinizi ne kadar süreyle işliyoruz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Sizin hakkınızda topladığımız verileri yalnızca yukarıda belirtilen amaçlar için gerekli olduğu sürece veya tabi olduğumuz yasal yükümlülüklere uymak için gereken süre boyunca saklayacağız. Hakkınızdaki bilgileri saklayacağımız süre, bilgi türüne ve bunları kullandığımız amaçlara bağlı olarak değişecektir. Genel olarak, yasal yükümlülüklerimize uymak için kayıtlarımızı bizimle ilişkinizi sonlandırdıktan sonra 6 yıla kadar saklamaktayız. Daha fazla ayrıntı için lütfen aşağıdaki tabloya bakın:
  </p>
  <h4 class='pr-5 pl-5 pt-2'>Kişisel verilerinizin işlenmesine ilişkin haklarınız nelerdir?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>kişisel verilerinizin işlenmesi hakkında bilgilendirilme,</li>
        <li>kişisel verilerinizin işlenme amaçları ve verilerinizin uygun olarak işlenip işlenmediği konusunda bilgilendirilme,</li>
        <li>yurt içinde ve yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişiler hakkında bilgilendirilme,</li>
        <li>kişisel verilerinizin silinmesini (Kişisel Verilerin Korunması Kanunu'nda belirtilen sınırlamalara uygun olarak) veya kişisel verilerinizin düzeltilmesini veya doğrulanmasını isteme,</li>
        <li>verilerinize ilişkin her türlü silme, düzeltme veya doğrulama talebinin kişisel verilerinizin paylaşıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>yalnızca otomatik işlemenin bir sonucu olarak alınan herhangi bir karara itiraz etme, ve</li>
        <li>kişisel verilerinizin hukuka aykırı olarak işlenmesi nedeniyle zarara uğramanız halinde tazminat talep etme.</li>
      </ul>
      Bu haklardan herhangi birini icra etmek istiyorsanız bizimle iletişime geçebilirsiniz (bu metnin altındaki iletişim bilgileri üzerinden). Veri sahibi olarak haklarınız ile ilgili yasal yükümlülüklerimizi yerine getireceğiz.Kişisel verilerinize erişim talebi yazılı olarak veya mevzuatta izin verilen başka bir şekilde olmalıdır. Talepleriniz makul bir süre içerisinde ve her halde Kişisel Verilerin Korunması Kanunu uyarınca 30 gün içinde tarafımızca yanıtlanmaya çalışılacaktır. Kişisel Verileri Koruma Kurumu tarafından yayımlanan mevzuat ve yönergelerin izin verdiği ölçüde, size bilgi sağlama maliyetini yansıtan makul bir ücret talep etme hakkını saklı tutarız.Sakladığımız bilgilerinizin her zaman doğru olmasını sağlamayı amaçlamaktayız. Bilgilerinizin güncel olmasını sağlamamıza yardımcı olmak için kişisel bilgilerinizden herhangi birinin değişip değişmediğini bize bildirmeniz gerekecektir. Talebiniz üzerine, verilerin doğru olmasını sağlamak için makul adımları atıp yanlış olan kişisel verileri derhal ve her halde talebinizden itibaren bir ay içinde düzelteceğiz.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>Profil oluşturma faaliyetleri yürütüyor muyuz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Sadece otomatik karar verme süreçlerine dayanarak herhangi bir karar almamaktayız. Verilerinizi işlemek için herhangi bir profilleme sistemi veya aracı kullanmamaktayız.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>Bilgilerinizi nasıl koruyoruz?</h4>
  <p class='pr-5 pl-5 pt-2 secondaryText--text'> 
    Kişisel verilerinizi yetkisiz erişime karşı korumak için uygun teknik, fiziksel, elektronik ve idari önlemleri sağlamaktayız. Bize gönderilen kişisel bilgileri hem iletim sırasında hem de aldıktan sonra korumak için genel kabul görmüş endüstriyel standartları takip etmekteyiz. Fakat ne yazık ki, internet üzerinden bilgi aktarımı (e-posta dâhil) tamamen güvenli değildir. Her ne kadar kişisel verilerinizi korumak için elimizden gelenin en iyisini yapmayı taahhüt etsek de, internet sitemize, platformumuza veya personelimize iletilen verilerinizin güvenliğini garanti edemeyiz; dolayısıyla herhangi bir iletim riski size aittir. Bilgilerinizi aldıktan sonra, yetkisiz erişimi önlemeye çalışmak için katı prosedürler ve güvenlik önlemleri kullanacağız.
  </p>
  <h4 class='pr-5 pl-5 pt-2'>Bizimle iletişime geçin</h4>
  <p class='pr-5 pl-5 pt-2 pb-12 secondaryText--text'> 
    Kişisel verilerinizle ilgili herhangi bir sorunuz varsa bizimle;
    <ul class='pr-5 pl-8 pt-2 pb-2'>
        <li>info@mophead.app adresine e-posta yoluyla,</li>
      </ul>
    iletişime geçebilirsiniz.
  </p>
  </div>
</template>

let data = `CrYPtogRapHY iS a ScIEnce Of «seCrET wriTinG». FOr aT
Least Two THoUsANd yeaRS ThErE haVE bEeN peOPlE WHo WAnTeD
to SEnd MESsaGes WHiCh coUlD oNly bEen rEAd bY tHe pEOPLe
FoR whOm tHey were iNteNdeD. a loT oF different MEtHODs FoR
coNcEalING mEssageS WerE invENtED stARTING WIth AnCIeNt
cIPHerS lIKE «SkytaLE» and «ATBAsH» and ending wiTH MOdErn
SymmeTRiC ANd PubliC-kEy enCRYptioN ALGOriTHmS SUch aS AeS
and Rsa. the dEVELopMENT Of crYPtOgRaPHy cOntiNueS And
NEVER sTopS! decrYPt THe mESsaGe tHat iS hIDdEn in thE teXT oF
this TASk! tHE aLphabet FoR THE mEssAGE ConsisTs of ALl tWEnTy
six enGliSh letTERS from «a» To «z» ANd Six puNCTuaTIoN MARkS
« », «.», «,», «!», «?», «’».`

const BIT = 5
const SAMPLE = `abcdefghijklmnopqrstuvwxyz .,!?'`.split('')

let isUpperCase = x => {
  let pattern = /^[A-Z]+$/i
  if (!pattern.test(x)) return null;
  if (x == x.toLowerCase()) return 0;
  return 1;
}

let binaryArr2Dec = a => {
  let s = a.join('');
  return parseInt(s, 2);
}

let dataArr = data.split('');
let binArr = dataArr.map(letter => isUpperCase(letter)).filter(bit => bit != null);
let binCode = [];
while (binArr.length) binCode.push(binArr.splice(0, BIT));
let decCode = []
while (binCode.length) decCode.push(binaryArr2Dec(binCode.shift()));
let message = decCode.map(code => SAMPLE[code]).join('');

console.log(message)

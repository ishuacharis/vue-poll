export default function() {

  const convertCountsToString = (counts) => {
    return counts.toString().substring(0,4);
  }

  const shortenCounts = (countValue) => {
    let counts =  countValue;
    let countsToString = counts.toString();

    if( counts > 999 && counts <= 9999 ) {
      counts = counts / 1000;
      countsToString = convertCountsToString(counts)  + "K";
    }
    if( counts > 9999 && counts <= 99999 ) {

      counts = (counts / 10000) * 10;
      countsToString =  convertCountsToString(counts) + "K";

    }
    if( counts > 99999 && counts <= 999999 ) {

      counts = (counts / 100000) * 10;
      countsToString =  convertCountsToString(counts) + "M";
    }

    return countsToString;
  }

  return { shortenCounts }
}

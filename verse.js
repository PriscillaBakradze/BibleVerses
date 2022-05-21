let verses = [
    '"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." - Joshua 1:9',
    '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
    '"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." - Psalm 139:14',
    '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." - Proverbs 3:5-6',
    '"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres." - 1 Corinthians 13:4-7',
    '"What, then, shall we say in response to these things? If God is for us, who can be against us? He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?" - Romans 8:31-32',
    '"Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others." - Philippians 2:3-4',
    '"For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you." - Isaiah 41:13',
    '"Love must be sincere. Hate what is evil; cling to what is good." - Romans 12:9',
    '"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." - Romans 8:38-39'
]

function newVerse(){
    var random = Math.floor(Math.random() * (verses.length));
    document.getElementById("display").innerHTML = verses[random];
}

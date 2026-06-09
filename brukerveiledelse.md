Active Dirrctory for windows server i VirutalBOX

Dette skal hjelpe med å veilede deg med å kunne opprette en bruker og vise hvordan du setter opp tilgang på mappe og filnivå.

Hva trenger du?
-VirutalBOX
-Windows server 2025 som kjører i VirtualBOX
-At du har logget in som administator i windows server

Opprette ny bruker
Dette er steg for steg hvordan du legge til en ny ansatt eller bruker.

1. Server manager åpnes automatisk etter du har logget deg in, om ikke kan du trykke på windows tasten og skrive in 'server manager'.
2. Klikk 'tools' øverst til høyre og velg 'Active Directory Users and Computers'
3. Finn riktig mappe (OU) på venstre siden med alle mappene. f.eks 'Ansatte'.
4. Høyre klikk på mappen du vil ha brukeren i og velg 'new' og der etter 'user'.
5. Fyll in fornavn, etternavn, brukernavn (du kan bruke tegn som punktum, du vil få opp et varsel med det er ikke farlig) trykk på next når du er ferdig, du må gi brukeren et passord og du kan velge om - de må bytte passord neste gang de loger inn, 
- ikke kan bytte passord 
- osv.
6. Klikk på finish og nå har du opprettet en bruker med brukernavn og passord!

Hvordan sette  opp tilgang på mappe og filniva

Her er steg for steg hvordan du kan gjøre det:
1. Høyreklikk på mappen du vil sette opp at brukere at tilgang til, og velg 'Properties'
2. Gå in på fanen 'Security' 
3. klikk på 'edit' og deretter 'add'
4. Skriv in navnet på brukeren eller gruppen, klikk 'check names' og trykk 'ok'
5. Velg hva de skal få lov til:
- read: kan åpne og lese filer, men kan ikke endre dem
- modify: kan enedre og slette filer
- full control: full tilgang til alt
6. Klikk 'apply' og deretter 'ok'

Tips: i de fleste tilfeller er det mer effectivt å legge inn en gruppe i stedet for individer, da slipper du å skrive hver enkelt person inn.

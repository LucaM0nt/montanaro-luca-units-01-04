# Levels exercise  


Il **linguaggio macchina** è un il livello più basso di programmazione attraverso cui possiamo dare istruzioni ai computer affinchè svolgano determinati compiti in modo automatico.
Il linguaggio macchina è costituito da sequenze di istruzioni binarie (composte da 0 e 1) che il computer può eseguire direttamente tramite il proprio processore.
Questo linguaggio è ovviamente non leggibile e difficile da scrivere. 
Il **codice assembly**, invece è più comprensibile per l'uomo, pur restando vicino all'hardware e viene quindi usato per collegarlo con i software e gli OS.

---

In programmazione i linguaggi possono essere **classificati per livelli in base a quanto siano vicini al linguaggio macchina**. Il linguaggio macchina è infatti il linguaggio più **"basso"** e più ci si distanzia da esso e più i linguaggi vengono definiti di **"alto livello"**.
Per essere eseguiti, i linguaggi di alto livello, hanno però la necessità di essere interpretati o compilati per essere compresi ed eseguiti dalla macchina.
La principale classificazione tra i linguaggi ad alto livello è che siano compilati o interpretati.

- I **linguaggi compilati**, hanno bisogno di un compilatore che traduce l'intero programma in linguaggio macchina prima dell'esecuzione, generando un file separato. Il file generato verrà eseguito più rapidamente. Per quanto riguarda il debugging, l'errore verrà segnalato solo a compilazione conclusa, direttamente al programmatore e non verrà creato alcun file di codice macchina.
In caso io voglia aggiornare il codice, inoltre, sarà necessario rigenerare da capo un nuovo file compilato in codice macchina.
Nel Momento che sono in possesso del programma compilato finale in codice macchina, non avrò più bisogno del compilatore per la sua esecuzione.
- I **linguaggi interpretati**, hanno bisogno di un interprete che traduca riga per riga in tempo reale il programma, senza generare nuovi file, questo ne rende l'esecuzione più lenta. Per quanto riguarda il debugging, gli errori vengono rilevati durante l'esecuzione stessa del programma e non vengono comunicati a prescindere in fase di programmazione. Per rilevare un bug è quindi necessario molto testing di tutte le possibilità che potrebbe incontrare il codice, altrimenti gli errori possono essere rilevati anche dall'utente finale.
Per eseguire il programma, avrò sempre bisogno di un interprete e non posso farne a meno per la sua esecuzione.


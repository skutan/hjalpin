# Heildarlisti skoðana

::: info Heildarlistinn
birtir samantekt yfir allar skoðanir á völdu skipi þ.e. listi yfir stöðu allra síðustu skoðana sem framkvæmdar hafa verið, óháð því hvort þær eru í gildi eða ekki.
:::

Skoðanir skipa tilheyra alltaf tilteknu skips skírteini, s.s. Haffærisskírteini eða öryggisskírteini. Í dæminu fyrir hér fyrir neðan tilheyra skoðanirnar öryggisskírteininu.

Í þessum lista koma einnig skoðunaratriði innan hverrar skoðunar sem eru með athugasemdir (dæmingar) eða dagsetningar.



::: details Merking litakóða 

Skoðanir sem eru útrunnar eða fengu dæmingu 3 (óhaffært skip) eru auðkenndar með rauðum lit.  Ef athugasemd í skoðun fær dæmingu 2 þá merkist skoðunin með gulum lit og þá er endurskoðun á dagskrá.  Ef skoðun er án athugasemda þá merkist skoðunin með grænum lit.


| Litur    |Merking  |
|:-----------|:-----------|
|<button class="btn-mktg btn bg-blue">17.10.2022</button>| Opið er fyrir skráningu skoðana   |
|<button class="btn-mktg btn bg-valid" @click="valid">17.10.2022</button>| Skoðun hefur verið kláruð með dæmingu 0 eða 1 |
|<button class="btn-mktg btn bg-yellow" @click="invalid">17.01.2023</button> | Endurskoðun með þriggja eða eins (* merkt atriði) mánaða frest - dæming 2 |
|<button class="btn-mktg btn bg-invalid" @click="invalid">17.07.2022</button> | Skoðun var ekki framkvæmd innan skoðunarglugga - útrunnin skoðun |
|<button class="btn-mktg btn bg-invalid" @click="invalid">17.07.2022</button> | Skoðun hefur verið kláruð með dæmingu 3 |
::: 


<!-- ![Heildarlisti](/images/inspection/ins-hl.png) -->

Ef að skírteini hefur ekki verið stofnað í Skútunni (þ.e. afmælisdagsetningin hefur ekki verið ákvörðuð og skírteinið því aldrei verið gefið út áður í kerfinu) birtist texti um að skírteinið hafi ekki verið gangsett.  




Í dæminu hér fyrir neðan hefur haffærisskírteinið ekki verið stofnað eða gefið út áður í Skútunni og þá birtist textinn **Haffærisskírteini hefur ekki verið gangsett**. 


<!-- ![Heildarlisti](/images/inspection/ins-haff-ekki-gangsett.png) -->

Í þessu tilviki ætti að birtast hnappurinn `STOFNA SKÍRTEINI` í skjámyndinni Útgáfa skírteina (amk. hjá Starfsmönnum Samgöngustofu) og þá þarf að hafa samband við skrifstofu Samgöngustofu á Ísafirði (isafjordur@samgongustofa.is), sem stofnar skírteinið.  Líklegasta skýringin fyrir að þessi staða geti komið upp er sú, að skipið hefur ekki verið í rekstri í meira en 4 ár og engin skoðun verið framkvæmd og færð í núverandi skipaskrá á því tímabili.  Í slíku tilviki eru flestar skoðanir útrunnar og því þarf að byrja nýjan skoðunarhring.

## Bolskoðun

<figure>
  <img src='/skodanir/images/bolskodun.png'>
  <figcaption>Bolskoðun</figcaption>
</figure> 
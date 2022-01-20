# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJB_fYy5yT1EwRl_ahwD8ejWk&waypoints=place_id%3AChIJod3jSndk1EwRUVdjYu47q1Q&destination=place_id%3AChIJQ7MCBGgd1EwRSVEcb18fDTg&departure_time=1653397200&traffic_model=pessimistic&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
Version:0.9
StartHTML:0000000411
EndHTML:0000028350
StartFragment:0000000447
EndFragment:0000028314
SourceURL:https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJB_fYy5yT1EwRl_ahwD8ejWk&waypoints=place_id%3AChIJod3jSndk1EwRUVdjYu47q1Q&destination=place_id%3AChIJQ7MCBGgd1EwRSVEcb18fDTg&departure_time=1653397200&traffic_model=pessimistic&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE


{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJB_fYy5yT1EwRl_ahwD8ejWk",
         "types" : [ "street_address" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJod3jSndk1EwRUVdjYu47q1Q",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJQ7MCBGgd1EwRSVEcb18fDTg",
         "types" : [ "establishment", "food", "lodging", "point_of_interest", "restaurant" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.5353983,
               "lng" : -77.8551628
            },
            "southwest" : {
               "lat" : 44.7609603,
               "lng" : -78.1156589
            }
         },
         "copyrights" : "Map data ©2022",
         "legs" : [
            {
               "distance" : {
                  "text" : "38.9 km",
                  "value" : 38920
               },
               "duration" : {
                  "text" : "26 mins",
                  "value" : 1542
               },
               "end_address" : "29572 ON-28, Bancroft, ON K0L 1C0, Canada",
               "end_location" : {
                  "lat" : 45.0369414,
                  "lng" : -77.89347060000001
               },
               "start_address" : "280 Burleigh St, Apsley, ON K0L 1A0, Canada",
               "start_location" : {
                  "lat" : 44.7609603,
                  "lng" : -78.08891029999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 306
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 44.7628774,
                        "lng" : -78.0913164
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eBurleigh St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePeterborough 620\u003c/b\u003e toward \u003cb\u003eON-28 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_kepGtvr{MONAB[V}@r@]X{AnA]Z{AlAIHMTABCNCX?D@T?Z?f@"
                     },
                     "start_location" : {
                        "lat" : 44.7609603,
                        "lng" : -78.08891029999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "38.6 km",
                        "value" : 38614
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1515
                     },
                     "end_location" : {
                        "lat" : 45.0369414,
                        "lng" : -77.89347060000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eON-28 N\u003c/b\u003e (signs for \u003cb\u003eOntario 28 N\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_wepGves{Mm@FeANi@Ja@HIBm@Pm@Rc@NYJs@Zw@d@ULeBfACB_@Tu@b@cDrByA~@aDrB_F|C_@VQJMH_@Ta@T[RC@_@T_@Ta@Rm@^k@VGDcAb@WLGBa@Pa@NIDWHa@Nc@Na@Na@LQFOFgBj@cAZa@Nc@LOFQDa@NSHMBa@Nc@LgCz@kDhAc@La@NYHGBa@LoEvAuC~@}CdAc@LOF{Ah@e@RWJ_@R]Ne@TiAj@WLcB|@cCpAEB{@b@qGhD{DrBGDa@ReExBIDiDdBsAt@cAd@YJiAb@c@LIBqAZg@JG@a@Fw@H_CNqABy@CoCGA?a@AeJOkAC_@Ac@?YAm@@U?M@a@@y@Fo@Fm@Fs@Lm@N[FGBa@Ls@Ts@RyBr@ODa@NoBn@{@VeA\\g@NcCt@OFaBf@aBf@uDlA]JC@i@L[Hc@JA?w@No@Fc@DI@Y@K@{@BE?]@u@?i@AKAc@CI?w@Ig@G{@MKCa@IC?eB]c@KWEsBc@wGyAc@IICYEkCk@a@KeAUc@IeAUc@IwGwAc@KeASc@KCA]IiBa@[GEAc@Ic@IEAUEi@GaAKwAGYAsA?W?a@@G@cAFm@HUBc@FKBgATwBn@C@eAZoH`D_@Pa@ReBt@_@Pa@PmH`DgChA_@PcAb@a@PaAb@eBt@a@PaAb@cAd@cBt@cAb@a@PeCfAkGpCa@Po@XgAd@wFjCa@PcBv@eCjA_@Pa@ReBt@_@P}@`@g@Pc@NaA\\A?oATeARYDc@FSDM@aAJi@D[BG?gAFsCAgAGsDQc@AeAGc@Cc@Ac@CgAGc@Cc@Ac@CsDQc@Cc@Aa@Cc@Cc@Cc@Ac@CmBIqCKkBGoCIsDMc@AoCK_BEK?kCIe@?c@?c@AgA?Q?u@Cc@Cc@AgAEc@Cc@AkBGa@Cc@Ac@Cc@Ac@Cc@Ac@AkBIoCKc@A{FSiBIwAES?gACsDEc@AO?w@Ac@AOAS?oBGcAEgAEc@AkBIc@AgAEa@Cc@CMA[EWEg@GYGo@Ke@Ka@MUGk@Qa@OcA_@GCaA]aCaAa@QcBq@a@QiDuAgCcAeCcAqCiAy@]IE_@QWMGCm@]wBoAu@c@GEWQ_Am@EAYUECs@i@EC]WGE[S_@Wi@]g@W_@Se@Wq@[iAg@uAm@aAe@a@Qa@QkB}@y@]GE{@_@KGu@a@ECYO_@UECYQWOm@_@}B_B}ByA}@m@OIoBsA_@W_C}A]W_Am@_@WcAq@kCcBeCaBeBkA}LiIyByA_C}A_Ao@_@W}EeD_@U_@W_@W_Ao@_@U}AgA_@W_DuB_@W}B}A_Ao@_@U_@WkD_Cq@e@oBoAoBsAc@[{ByA_@W_@U_BgAOKiBoAaAu@s@i@YWUQi@g@mAkAi@k@MO[]WYyAcB[_@qB}B[]}F{GuDkEk@o@GISU[][]y@}@ECWYWWCCw@w@CCOMe@c@aAy@US{@q@{@o@m@a@UQIE_@Uq@c@c@WWMSKMGSKOKOIQIq@[cAc@cBm@c@Oa@OcA]gC_Aa@OkDmAa@OcA]eA_@a@Oa@OcA_@a@Ma@OiC_AeBm@a@OyAg@KGgBm@GCYIa@Ou@Uq@UcA_@a@OiC}@YKi@ScDmAw@[{@[YKw@U_AYm@SUKcA_@UICA_@McA]a@Oa@MGCYKcA_@g@SaCaAGCWMQIOKaF{C_@U?AiAq@WMu@a@o@a@}BuA_BcAYQEE_@U_@UGCy@g@_@U_Am@_@U_Am@_@S?AaAk@_@U_@U_Am@a@U_@U_@UAA}@i@a@U_DoBQIoAu@aAk@IGcBeAaCyAq@a@_BcAa@U_@U_@U_@U_Ak@a@U_@U[SCAsBmAm@_@_@UGCOKGGSMKICC[UyAkAAAYUCC]]}@}@oB}B[_@]_@Y[sAeBKOMQgAyA]g@W_@QYsA{BOYaAkBo@qAQa@wAeDg@oA]}@cA_D_A{CAA[gA_A_EOu@[}AKm@CGIg@Ko@Y}ACMGa@Ko@CKIc@Y}Ao@iD_@qBKo@Mm@W_BMo@Km@Ia@CMKo@Y}Aq@}Dg@mCeB{Js@}De@oCKm@[gBKe@q@_Ee@mCe@iCg@wCMm@Ko@Ko@Mo@W}AMo@G_@k@}CKo@Mm@Ko@Y{AMq@e@mCY_Bo@mDO_A]oBKm@Ko@}@cFq@}Ds@}DqBkLw@uDMq@]wAGSk@qBu@qBc@gAgAuBy@wA]g@w@iAoCyDsBoCOUwAmBsAiBm@w@GIu@eACCQWCEKOKQIMOWq@eA?AUc@AC{A{CWe@Ug@We@_@u@MWSc@Yk@Ue@We@Ug@Q]]o@Ue@We@eAuB]q@kBuDYi@yAyCUg@eAsBiCiF{A{Cm@mAeAuB_AkBaBcDUg@MUGQUc@Yu@GQ]_AWy@IWSs@GUEMi@oBi@qBOk@GSIY_@yAKa@Uw@Om@i@qB[gAm@aCOk@Om@Qk@Om@Ok@Qm@Ok@Me@AG_AgDSq@AEIWGSEKs@oBQ_@EKAASc@_@u@MWWe@ACWa@CES]CES_@Yc@OY{@mAoAeBcA{A]g@GIIKOUSWQY_@g@QUMUMOOUU]U[QWQUCEQWCCQUOU[c@QW]i@mA_By@kASYYc@QYuAoBcCkDg@s@MQeA{AGK_DkEkAgB[e@cCkD[a@s@eAcCkDu@cAYa@s@eA[a@{@mAQYu@cAGKa@m@IKs@cAeCkDQUc@m@CCa@g@Yc@OWMOIKc@g@e@k@OOMMMMUSCA_@YCCiAw@cAq@SOKI]Sy@i@_BaA]U]YcAq@m@c@iAu@e@[UOaBeAwA}@wA}@aEiC{CuBoA_AUUk@i@u@y@q@u@k@y@eA{Ak@}@We@AA}@{Ag@u@aBmCm@aAEEkAkBWc@KOaA{AEIQYk@}@c@s@U]Yc@gIiM]i@q@iAWc@aC{DcCyDi@{@u@kAiEyGy@uAeAmBcAkBYg@OYk@eAk@aA_@s@]m@_@q@S]EGCGOYQ]Yg@AAYk@O[m@qAa@_Ae@sAc@uAIUACEQMe@YkAWqAa@iCY{BAQE[CSEi@YqCi@wFc@oEC[CM?Ec@oEs@}HKcAGq@E]q@mHGk@KeAC]CSQoB]oDSsBO}AGo@[yCSqBKiAi@wDYeBKq@UeAS{@]sAg@yAo@wAEKm@sAW_@[e@{@kAQW[_@c@i@mAsA[][_@sAyAAAy@y@A?[_@IIQS[_@u@y@CC[]WYCE]_@WYCCw@_A[]IIkAsA?A[][_@GGkAwAw@_Ai@y@c@q@o@_Ai@}@c@q@_@o@[e@U_@}CaFcBiCo@iA[g@c@u@S[OW?Ac@q@c@s@_@m@c@s@g@w@?Ae@s@_@m@EG_@k@QYAAk@cACEYc@EKk@}@We@Wc@AAaBqCWe@IOMUq@iAWe@OYGIq@kAYg@QYCGYc@Wc@Ye@Wc@q@eAm@gA]g@iB}CiAoBAAo@gAEISYYa@IMOS[a@MQg@m@SUII[_@GISS][MMOO][][AC[Wc@a@UU[W][_@]k@i@_@a@y@}@Y]QY[a@SYUYS]i@}@s@mA}@{AqAqByA}BcC{DYe@kDuFoBmCm@w@o@m@s@w@eAcAmDaD][kAcAuCkCgC_CMMmC_C{CqCcB{A}@w@aA}@e@c@y@w@GGoBgBGGaC}BEE"
                     },
                     "start_location" : {
                        "lat" : 44.7628774,
                        "lng" : -78.0913164
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "76.6 km",
                  "value" : 76605
               },
               "duration" : {
                  "text" : "59 mins",
                  "value" : 3510
               },
               "end_address" : "Spectacle Lake Rd, Barry's Bay, ON K0J 1B0, Canada",
               "end_location" : {
                  "lat" : 45.53537559999999,
                  "lng" : -77.8687168
               },
               "start_address" : "29572 ON-28, Bancroft, ON K0L 1C0, Canada",
               "start_location" : {
                  "lat" : 45.0369414,
                  "lng" : -77.89347060000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3858
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 225
                     },
                     "end_location" : {
                        "lat" : 45.0577092,
                        "lng" : -77.85986129999999
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eON-28 N\u003c/b\u003e toward \u003cb\u003eOtter Lake Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{g{qGdqlzMCC]]e@c@cB_BwBsBcB_B[[MMq@k@o@c@aAs@}@o@_@Wi@WCAUKKE_@QYMGCWIICc@Oy@SKAWIC?EAc@IWGKCa@EWCKAc@CWCE?E?c@CWAYCy@GWAKAKAUAc@EaAIaAME?g@KYECAEAeA[{Ac@i@UWOe@UoAu@IGkA{@{@u@GEAAq@q@OOKMGGmAsAGISUsA_Bc@e@?AaAmAKMEICEa@q@[c@KSMYQ]Ym@cAeC_@eAOc@AEYaAc@yAUeACIIe@Km@CQUuAQyAe@gCAGAKGYG_@Gg@Gc@Ee@Eu@AECaACaACq@?E?MEeBAM?KCwAAICa@?MC[?OAECk@ACA[CSGaAE_@Iu@?AIaAAEE]Gk@CMMaAG]CMGa@CMGa@Ki@AEMm@Om@[}AEMQi@M_@CKSk@GQc@sAUm@g@mAc@aAAEw@yAc@y@OWIKYc@QWU_@W]o@_Aa@o@k@y@o@aAq@iAYg@a@gAQk@EOESKg@CUSqAGk@Ec@Ee@Ca@Gq@OeBGi@Eo@Eo@CmACg@As@AcACiBAg@C_B@S@W"
                     },
                     "start_location" : {
                        "lat" : 45.0369414,
                        "lng" : -77.89347060000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "60 m",
                        "value" : 60
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 45.05824399999999,
                        "lng" : -77.8599653
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChemaushgon Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ui_rGb_fzMq@Hw@J"
                     },
                     "start_location" : {
                        "lat" : 45.0577092,
                        "lng" : -77.85986129999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 422
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 45.0598137,
                        "lng" : -77.8551628
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eStation St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_m_rGx_fzMOYQc@CC[a@OUGMQYEKSi@YwBEYY}AKo@WcBU_Bo@cEOaA"
                     },
                     "start_location" : {
                        "lat" : 45.05824399999999,
                        "lng" : -77.8599653
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.6 km",
                        "value" : 22640
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1049
                     },
                     "end_location" : {
                        "lat" : 45.2309002,
                        "lng" : -77.93848179999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHastings St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-62 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow ON-62 N\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yv_rGvaezMmB~@WJ_@ROFaAb@cAb@}@ZuAl@{@`@EBcAd@oBpA}@~@QRo@j@GFg@j@[d@GHMRa@v@Uf@MVc@|@EJe@`ACBc@t@W^k@h@]VYNa@PYJUH{@Zq@RULa@Rs@b@w@j@o@j@u@n@GD}@j@w@`@w@ZYHQDQBUDM@a@F[@e@D[BmA?A?i@@mAA_@A]Aw@Gy@IWCc@Gc@Ke@Ke@Mc@M]Kg@Sw@]c@S_@QWQYSm@_@mA_AAA}@s@_@YAA[Us@k@m@g@]YOMWQm@]{@c@i@W}@YOGQEa@MGCq@MSEIAYEc@CEA]CI?YAo@Ck@DgAFc@BiBTq@HUDa@JC@]JODSHUHKDUHKD_@RA?_@TA@mA|@i@f@i@h@iAlAON}@nASX]j@oAtB]v@KTSd@GLWx@_@tAGRAFMd@Ol@Ux@CHUdAOl@AFELk@~BI`@Ol@GTOj@Mn@GVSx@CHGXOl@g@lBe@nBIXy@bDEPIZEPIZu@xCOl@YlAi@vBm@hCOl@Ol@GXGPOl@mCvKoAbFa@`BUz@{@|Da@xAg@fBI\\Md@Qt@Mb@ABABMd@M`@c@bAKTCDQ\\A@CDY`@g@h@g@b@SNe@XKFc@X[NC@YLC?c@JQDQBa@DE?]?c@@gA?oES{AKaBWiASa@MwAi@cAa@UKk@[a@Uu@a@mBgAs@a@_@U[Q_Ai@g@W_@U{A{@}@i@gEaCm@]w@e@[Q_Ai@cB_Ae@WGEmBcAiAk@y@_@ICcBw@EC}BgAiAi@oFkCw@a@e@Um@[_Ag@UOk@[SMUMsA{@AA{@m@w@k@GEOKm@e@yAiAa@]WS]YaDiCwBaBc@[uAkAw@m@_@Y]Y_@Y{BgB{AmA}@s@{C_CoDsCgBwA_@YyBgBgBoA}@o@_Ao@AA{@g@CAu@a@KEm@YUIa@OEA[K_@MA?a@MOEu@SMEUGOEQC_@KC?aAQC?a@IA?c@EQCo@EuAG}@Ac@?QAQ@gABO@S@c@BmAJcBPYBI@i@FiC\\_D^iEj@c@FuAPeEj@{G|@yARc@FeALc@Fc@FqDb@c@Fc@FmC\\eALc@FqDd@uEj@c@FeALc@FiBTc@FqDd@c@FuEj@mEj@wDd@oC\\eAN{@Jo@HQBODUDc@JKDQDOHG@YN]Nc@TWLs@d@c@\\]Xm@j@CBWZML]`@]d@Y`@]l@_@t@[r@IPEJM\\Ob@i@`BQf@Qj@EPcBvFQj@iArDcAnDQj@o@tBQf@Qh@O\\Qd@Q`@Q^[j@Wf@cBpCoD`GWb@Yb@Wd@Yb@Wb@Yd@Wb@q@hAYb@{BvDa@n@OVkHxLoGnKs@pAy@|A_@t@OZc@~@k@pA[z@s@fBu@nBeBvESh@qAdDUj@Sf@Uh@GLMXQb@CBUf@ABc@z@m@bAKRSZe@r@g@r@}@nAORcArAcAdAs@v@q@l@}@t@c@^KHSL_@VEDiAt@o@^OJOHa@TSJgAh@gAl@aAf@cB|@g@Xg@Xc@Xe@ZeAz@q@n@s@v@gAvAmBdCmAdBaAvAi@n@[^g@l@OPKJQPGHSRKHQPURg@^KF_@V_@VUJQJMFa@Rk@Tw@XA?a@Na@NIDWJa@Na@Pa@Pa@Na@Pe@RgCdA}@^cA`@a@NcA`@a@NUJKDa@Na@NeAb@a@Na@Pq@XkEbBQHaC~@_C~@i@Ru@Vo@TcA\\gBj@c@LcAZc@La@La@La@Lc@La@L]JmCx@SHeAZs@V]NA?k@Vy@b@]N_@R]Pc@X_@TQJMHa@T_@T_@T_@T_@V_@Ta@T_@TCB[P_Aj@a@TyCfBGBaCvAQJMHoAr@q@`@u@^MFcBv@IDWJa@P_@PiElBcAd@aAb@cBv@w@Zm@Xu@\\QHOFKFSJq@ZaAd@ULGBa@Pa@RaAb@o@XkF`Cs@ZMHSH_@PcAb@MFa@RQHa@Pa@RMFSHMFQJOFa@PQHKFUJ_@POFQHa@PMHcAb@QHOFQJaAb@a@POHaAb@YLYNa@PMFcAd@QHOF_@Rs@ZWLa@R_@PiFdCa@RWLmB|@_@Pa@Pa@RaAd@a@Pa@R_@Pa@ReChAa@R_@Pa@R}E|BKDa@PaAd@cAd@_@RcAd@_@Pa@RaAd@a@Pa@Ra@P_@RgD|AoAl@_CdA{@`@eD|Aa@Pi@VYL_@RcAb@GDWLcAd@a@P_@Ra@Pa@RMFs@\\KFUJaAd@i@VWNc@V{@d@i@^WPKHSLEDWTSPWTk@n@GFq@z@i@n@g@p@CBWZsAfByDhF[`@u@`AY`@[`@Y`@[`@[^u@bAu@bAY`@[`@Y^]d@W\\Y`@C@W\\AB[`@W\\[`@ABW\\[`@uAjBUXQTKLSRWXa@\\GDOJSJGDUJWJEBC?C@QDI@A@A?S@K@A?M@S?A?S?MAIA[CAA]GC?UGIEMEMGGCGCMIGEIEUQOQOQKMGGMOEGCGU[GQGKCGGSA?IW?AIUEOKe@Oq@ACKo@G]WwA"
                     },
                     "start_location" : {
                        "lat" : 45.0598137,
                        "lng" : -77.8551628
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4507
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 200
                     },
                     "end_location" : {
                        "lat" : 45.2610353,
                        "lng" : -77.9696836
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eON-127 N\u003c/b\u003e (signs for \u003cb\u003eLake Saint Peter\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWhitney\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAlgonquin Park\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cdasGnjuzMcA^eBn@c@Na@Na@Na@Na@NcA^a@Na@Na@Na@Lc@NIDWHa@NIDWHIDWHk@TWHIDWHwDtA{Bx@a@NKDUHIBA@UHa@Na@NKBA?UHIDWHa@NIDA?UHKD{@Za@Na@Na@La@Na@NIDcA`@A@}@b@A?[PEBSLKH}@l@OJOH{AlAC@[T]XgChBUP_C|AAB]R_Aj@EDYNa@T_@R_@Ta@TA?]RaAf@cB|@_@Ra@Rk@ZUJ_@Ra@Pa@R_@Ra@PEB[N}Ap@uAl@eChAa@Pa@RcAb@[NC@]PC@WNGDYPEB]RAB_@TGDWROLMLQR[^IJWZCDW\\]h@]j@OZGLOXCDO\\Sf@Sf@ITIXU~@g@vBKl@CRCNI|@K~AKxAAd@C~@CvBAR?r@Ap@Ab@A`AAr@AdBAh@E`AGr@Ef@G^CPAHG^ADGVGTGXGPSj@?@Ud@Uf@QZQRa@d@c@^GF]XA@[RSJQFOF_@JQFG@]Ha@DYDo@H{@Pi@Pa@P_@RE@YPA@]V]ZA@Y\\A@Y^MRKNGJWf@KXIPIXM`@S`AId@Mn@AFOnBO`CEr@MhCAJEf@AHIp@Il@A@Kf@ADI\\O^KVGLOXGJOVGJY\\WT]TGDYP[RC@_@Pa@RC@]NyCvAy@^"
                     },
                     "start_location" : {
                        "lat" : 45.2309002,
                        "lng" : -77.93848179999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "14.6 km",
                        "value" : 14569
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 620
                     },
                     "end_location" : {
                        "lat" : 45.3733128,
                        "lng" : -77.9295544
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMadawaska Rd\u003c/b\u003e (signs for \u003cb\u003eMadawaska Road\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o`gsGnm{zMWqAMe@Mm@GKQYU_@]a@AA[]]_@s@cAWa@?Ag@}@GOUg@Ys@[oAOm@YiAi@uDQoAKo@q@wEY{BIq@SuAWkBKo@e@cDQoAu@qF[uBG[_BoJMo@Ko@Y_BKm@Mo@Ko@Ko@Mo@Ko@Ms@Kk@Mm@Ko@g@kCMq@Y_BKo@EQG[Qw@Kc@Oi@Qq@AAOi@Qk@EOM[e@sAe@iAq@yAo@iAEIk@_AKSMOm@}@EG[_@[_@sAuAaAy@EGWQ_@W_@Y]WIGu@c@cAg@CA_A_@IEw@WA?c@KSGe@KKCaDa@OAi@CcACmB?s@Dc@B]@kAPc@FG?{@TiBf@c@LQDsAb@oEtAa@LeEpAk@RgBj@a@NeBl@c@LcA\\a@Na@LA?cA\\a@NcA\\a@LkDjAcA\\A?gC|@gBj@a@Na@NG@[JcA\\a@NWHm@NUDKBc@FSBeAJyABk@As@Eo@EkCk@a@Kc@Ka@Ic@Kc@Ia@KeAUiB_@a@K_Cg@MCgBa@eAUc@Ka@KgAUa@IoDy@a@Ic@K_B]k@Mc@Ka@Kc@Ka@IqEeAa@IA?uAYu@Qc@Ka@KEA[Mc@M]Me@QYKGC_@Sg@Uq@_@eAq@]Wk@g@s@q@e@e@q@q@ACq@y@yAsBQY}@{AKSg@}@_AkBMUYc@[i@w@gAs@{@Y[[_@IIs@m@OMMK_@WCCwAaAe@Q_@QSIq@Qa@MKCWEq@Iw@Gc@EKAW@c@?c@?S@O@iAFuANQDc@Jq@Pu@XKDSJgDzAa@PQHOFa@Pa@Pa@P_@Pa@Pa@Pa@Pa@Pa@PE@_CdAa@Pa@P_@Pa@Pa@Pw@\\m@TyBx@gCbAgC`AwAj@o@XcAd@_@P[NE@oDdBWLa@R_@RaAf@a@RaAd@a@R_@Ra@Pa@RaAf@aAd@eClA_@Rs@\\qAl@{Ar@qAb@_AVc@Fc@FM@U@c@BQ?Q@c@@c@Ac@Ac@AwCi@WKcA_@]MCA_@SA?]U_@Wa@WyAsAUSc@c@{@{@][aAcA{A{AQQ][qAkA}AaBs@s@kA{@[Q]SA?eA_@a@G]EEAc@CQAQ?SAO@U?MBc@Fa@FI@YJ[Ju@^QHu@`@KF_@R[Pe@Ta@TC@[Pa@TOHOH_@Ru@`@KF}Ax@g@RWLaA\\o@LSDMBs@JS@c@DI@yABi@Ae@E[AEAc@Ic@KaAQg@Ka@I}A]KCa@Kc@IwA]yBi@EAqAa@o@YKEUO_@Yu@i@c@g@[]gBkC]i@k@_AW_@Wc@[g@W]GISUMOOM]]GGw@k@_@QYOECa@Oa@OWIKCa@Kc@KeAUICWEc@KUEKCgAUc@Ka@Ia@KKA}Bg@C?{Bg@aCg@kBa@WEc@GYGk@GsCOgBEcDISAA?g@CSCKAc@GIA{@Ou@UmAe@EC_@SQGc@WKIECYS]YQMi@i@QOKMQUIIc@i@]g@MUWc@w@uA_AiB?AUe@[o@Q_@m@mAKUqAcCKQMQYc@Ya@U]EC[_@Y[e@e@u@o@KKSM_@U_@USMc@SKEa@OCAc@M[Ka@KA?c@Ia@Gc@GICqCUUC_BOsAMGAYEgAKOC{AMYCIAuAGkA?O?y@DM@YBuBRWFe@Hi@Lc@Jo@LiB\\UFeARmAV_AN_@FA?kBPiBGA?c@AMAg@GoB_@k@SwAi@MI"
                     },
                     "start_location" : {
                        "lat" : 45.2610353,
                        "lng" : -77.9696836
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "19.7 km",
                        "value" : 19654
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 867
                     },
                     "end_location" : {
                        "lat" : 45.5023134,
                        "lng" : -77.9837666
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-523 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e~|sGtrszM{@c@_CwAaEeCa@U_CyAa@Ua@WcAe@mAUW?m@?aBLy@FqAPe@Dc@DK@_BBQ?QAc@AM?UAc@C]AaC[s@Mc@Ic@GEAsC_@WCk@EwC@mBFwAHM@{A^a@JIBYJOD_Cr@_AVa@JkAZg@JWDc@H[DG?c@Bi@B[AM?i@EqAUkAc@_@Oi@a@_@Y}@o@?A]Y_@[][]Y][[WCA_@W]WOKQIa@QMGSGa@Oa@M]KC?c@Ic@IGA[Ac@CA?a@A]AE@mAD_ALc@Fc@Da@Fc@Fc@Fc@Fc@FwFz@eAPs@Jy@Nc@HeAPc@Ha@Fc@Hc@Fa@Hc@H_@FC?c@Ha@Fc@H_@FC?a@Hg@He@Fy@Fw@AUC]EEA]KEAYKGAg@U{@a@OIQI_@Qc@O_@QA?cA]SGA?KEgBg@eD_AoAc@}Au@AA_C_BSMoAe@EC_@GSAu@CiABgAJkAFiAAiACOAcHc@MAc@EOAeAMSGKEOGEEWO[YGKOSIMMSISKYGOESIYMm@ACSmAQ}@Ko@Mw@Ig@Ko@e@oCKq@Ko@cA}FWoA?AOk@K[Yy@ACUc@EISWc@m@m@i@CA_@U]SCAq@W{A]eB]oAW{@SSEOAc@Cc@CkBOm@Ey@Ce@Cc@CSAOC_AIGAc@Ia@Gc@Gc@Ia@Gu@KQEc@Ga@Gc@IgAQa@Gc@GICYEeAQc@G]GCAc@Gc@Ec@Gs@ISCmCUa@CmBKgAGa@CA?mCQc@EIAYAc@Cc@Ec@Cc@Cc@Ec@CMASAc@Ac@AQAQ@c@?[@G@c@F]DmBf@a@JSFOBa@JiBb@SDO@c@Fa@Fa@DA?QFQDQDOBSDOBSBO@c@DA?O@O@C?Q?UAQ?S?Y?c@AmACoAAUAm@A}@?S?O?S@cAFSBKBy@LC?_@HYDI@}@PmAVmAV[Fc@HMDSDc@HC@]Fc@Ja@Hc@HSDOBeAPc@FIBY@c@DU@sA@A?S?OAWAIAm@I}@MA?_@I}@Ok@Kc@GYGm@KQEsAUe@GaAQkB]iB[mB]a@IOCSAc@Cu@Ey@C_@?c@@Q?Q@gADQ@}BDm@B]ASCm@KeAWy@YgAm@MI_@WECYS_@Uy@i@g@[QKMG_@Ua@SUMCCcAe@_@Qg@UyBcAiAe@a@Qi@UkA_@{@W{@SCAe@K}@QEAkASsAO}@ISCUCSAUCg@Ek@GA?a@GYEIA]KSGSGSISISKECKESKAAOIQIQKMGECQKICGEQIECKGUK_@SQIOICAOKKEECQKGGGCQMEEKIOOOOOQY_@CCa@g@QUMQKO[a@ACW]OQKOW_@AAi@s@KO[a@W]]e@Y_@[a@KOMQYc@EGUY[a@Y_@KOOQYa@[a@Ya@MOMQYa@[a@Ya@KOOQWY{@eASWGGCEMKKKMIKKCCGCKIKG?AIEKEIGKCICKCA?ECIAICGAIAGAGAGAA?CAE?GAG?E?G?G?G?G@G?A?G@G?I@G@aBVG@c@HSDMBc@Hc@Hc@Dc@B_A@E?c@CS?OAc@?qAEYAqAA{AAw@?yANc@LA?a@ROHOL]ZIHSP[\\{@x@UTe@b@ONKL]\\[XA@]\\[\\IHSP]\\UVc@`@A@[Z[Xe@b@WV_@`@[VGHSRUTGF]Z]ZML_@^MJ]\\MLk@h@]\\wBpB]\\QPKH[\\yAtA]\\wAvAi@f@kAjA?@{A`Bg@t@y@|AOb@Yr@M^Qf@Wt@IX_@pA]pAI\\WlACNIp@M`AQbCEr@Cp@CrC?D?r@@p@@|A?H@p@@^BfADxBJlEBdBBt@HhE@p@@r@D|BB`C@t@An@Ar@?r@A`@GlCI`C?BGl@Ep@Eb@ALGp@Gh@AFKdAMfAMz@SxAY`BMn@GZOz@Ov@i@lC{@hHGn@a@dEGp@s@jHCZCTGp@[rCKdAE\\QbBGn@OpAU`BY~Bk@rDCJKn@Mn@Kh@?BMn@W|AA@Kn@Ml@Kn@?@Ml@Kn@UrAOx@Mn@Kn@Mn@e@lCO|@I`@Ml@Ol@I\\gA~Di@`Bc@nAIVGPQj@Sj@KXENg@vAy@`Ca@rASl@KZENOl@Qj@Mf@a@~AA@Kl@Kd@AFMn@EZCRKn@Gh@AFIn@Ip@In@Ip@Gd@Il@ALS`BE\\K|@?DETEXK|@Iz@MjACVQzBCr@Cx@EzBEzBIpEIdDEpECl@Ar@ElCEpB?@Ap@Av@E`BAp@?@Af@CrAA\\?n@?fABx@FhA@B?@Fl@@HRrA@BLj@?@Nn@BLH^Nj@DNH^Jl@Jn@?@DTDb@Df@B`A@\\ApAA\\Cn@KpACRG`@CJKf@GTGVCHYz@KTWj@Uf@A?Y`@Y\\m@x@IHw@z@WXwAbBCBUVgArAMPABYb@[b@OTGLo@lAKTINWf@y@zAMVWd@Wd@Wd@MRa@l@W\\u@t@IFa@XA@a@P[PMFWL[NEBYLEBa@RYJc@REBa@Na@PUJKD_@Ra@Pa@Ra@PQJMD[LEBa@NWJID[Lg@T}@^k@V_A\\_Bl@E@k@TqC~@Q@a@FkALcCHG?{@Dg@@oABqAD_AF"
                     },
                     "start_location" : {
                        "lat" : 45.3733128,
                        "lng" : -77.9295544
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10.7 km",
                        "value" : 10729
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 458
                     },
                     "end_location" : {
                        "lat" : 45.5354627,
                        "lng" : -77.8707429
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eON-60 E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mdvtGpe~zMQaDU{EMiCCm@?EIsBAi@Ai@Am@?_B@_BDkCDu@@[Fw@HmAB_@JiAFk@@QD[Ju@TuAJs@r@cDLk@HWZiAPo@Re@n@cBZs@p@yAl@iApAmCN[nA{B^s@jAyBFORe@hB{EHYb@eBZoAR_AVsABWTyA?GPcBFm@?C\\wD@ODq@\\gEVaDRkCPiC@MHeB@IB{@BiA?sA?aA?]Aa@IeBGgAAOCc@Gw@K{@Is@Ki@Ic@Oy@Ms@YkAWaAY_A]_Ak@wA]w@e@{@i@_A]i@OU_@g@w@}@EEg@g@o@i@_Aq@a@WSMKGy@c@iAk@?Aa@Qs@[sAi@_@QA?iBy@qBcA}@k@m@e@KIQO_@YUU}@}@_@a@mBeCeAoBo@qAo@qAUm@Qa@GMM[EMUq@IWiAmDQk@Sk@gBsFY_ASi@yAsEmAuDe@wAQk@oBgGSk@oBeGw@aCiAqDKa@}@mCMc@CGSk@Qk@sA{DM]Qc@M[KWm@oAc@y@u@qAu@aAaAoAw@_AIIm@q@i@g@g@a@s@k@k@]k@]kAo@_Bw@aEmBMGQIa@S}@a@e@Ua@S_@SIEWOQMi@c@[U_@[CC][IGSSIGa@c@g@k@_@e@m@u@s@aA{@uAa@w@Wg@Ug@O_@Qc@Qe@Sk@M]g@aBQo@a@yAAEMi@Mm@EQo@kDI[QcAuCuPi@yCkA_HMo@Y_Bm@mDQ_AaAoFwA{HEWEW_AmFu@aEO{@UsAg@uCIi@Ko@EQQqAM}@Gk@Gw@Ea@AQC_@Ce@E_AEq@Aa@AQAs@CiB?C?g@@s@?GBq@BaADwABs@PuCJeBDi@?GDs@JyADu@?GDq@Dq@NoCD{@H{A^_HJuB?IBi@?GBk@?G@_@?Q@m@?y@?aAA[?i@AG?GEmAAYAi@?AEw@G{@Ei@Em@WsC_@kC]iBOo@Me@AGEOI]Oc@Uu@g@{Aw@uBg@mAA?aCoFo@{AUg@g@kACEQa@CEg@kACEACO]Yo@Qa@CGQa@AEg@kAWi@Wm@Qa@k@oACGQa@Ym@Qa@CGQa@Ug@k@qACEUg@Ug@Qa@o@wAmBkEQa@Q_@CGo@wAMWEIAESa@Ym@Qa@CEUi@m@oAaAmBCEAEQYwAiCIMaBsCkAoBo@iA"
                     },
                     "start_location" : {
                        "lat" : 45.5023134,
                        "lng" : -77.9837666
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 166
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 45.53537559999999,
                        "lng" : -77.8687168
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSpectacle Lake Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ss|tGbchzMJe@F[@S@[CWAGGWEUEQEo@?_@Bk@@I@OLg@@C"
                     },
                     "start_location" : {
                        "lat" : 45.5354627,
                        "lng" : -77.8707429
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "_kepGtvr{M_JrH_@dCeH~BiIlEg^xTqO~FqUtHad@nQoh@~VePf@aRWySfEm^rKyOMe_@}HgYuFyJJ_StGye@~S{k@rW}Q|Cw`@}Ac_AsC}}@uDgc@yP_PiJ}m@i]i{AgcAkX_T_]a`@aP{LcYyKgy@qYuV_LgUiNon@s_@wNqKiTs[_KyZoBmKkGu]e[qgBaK_j@mNeXyOwTwj@yhAaTqu@sFqM}LuQeg@ss@oUc\\eL}K_^mUgO{NaImM__@kl@kV}a@sIuUiH_s@oHes@_FyOoGgImLmMqPcTm^il@}\\qj@_JwIwVg^{TmXcXgVk[cZgNgIaJoAqNeBeLoGmDsDsLiR}FgX_C{`@gD{PwJsSmHqMcAiHw@yLIiGq@aC}Au@eA_BmCyO_AeGeCjAuDbByMzHsKjP_S`L_PfAaIqAaHiDuQqLuLu@cM|CoIxIkE|ImFdT}Hr[wQ|t@cGdMgDjByF\\kTqDaLoGy^gSk^iRg`Aet@wJ{CgOo@ewAfQqg@~GoLpJqNrb@}Qj^qb@pu@kOx^qQfSwW`PeRnUyL|Fiw@fZiTxHeNjI{q@~\\qb@tRcfBhy@qLlH{TrYsKxN{IvIuDHeEyByBkEi@kC_@uBiDnAiC~@iDnAmE|A{LnE}GbCmMjFaT`Ose@tUkH|H_FnS_Ax[yElKcLlDqGhGcDfXgEtIeDdBsEvBe@wB}@sBmEgGyDyP_Moy@iFwYcJ{UsO_NmFaBcO_@_d@pMc[jKmGdBqNq@mZuGu]}HkEaBuJqHaQsWsGiEyGkAoHZgK|D{PpHk`@nPi\\vOsFp@cKyA_R{OqLcJaDWgMtEiPxGmG@_JkB_LeDgI_K_K_JsMuCaQoDiOm@eM}EuLyRyKgNiOmDcLgAsKTaKrBkLv@sNmFqQ_JqMx@oHg@qNiAeKtAmLtCgIy@_MeJaKiBa]xEkLlBuFKkF{BoYaLkMH{MqAmE{K}Gu\\}EuDyLwBaSqBoj@sFoNdAwKrBgMAuPrBiLxBkO_AsY_EkJR}HuCgRwJoTqE}OsFkO_QcRyU{FgAoMlAeKMiFnBkKhK{IpIyThTgGvKoC`Lk@jP^nTGhe@uP~tAwDdTiI~\\{HtWeCnR_C|j@a@n\\`CtNSdRoK`PsKvQsJlHsKvEoJxDoMxBeGPqAyCc@eJOqEAwGv@yN`CuMzS{e@nGii@Ey\\iC}LeGsLgRqL{KyGyKiQqS{n@cQ{g@kJaMoPgJsLsHsHcKkDeJwOsz@uLqs@_@wQtBsa@r@wXiDuZwWun@aLaWuOq[BmJ"
         },
         "summary" : "ON-28 N",
         "warnings" : [],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}




```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 

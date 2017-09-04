;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M915.0996 607.1172H1000V392.822265625h-84.900390625c-86.1211 0-106.6289-49.7441-45.8984-110.5352l60.1191-60.1191-151.5508-151.4902-60.0586 60.0586c-60.8516 60.8516-110.6563 40.2227-110.4746-45.7773 0-0.2441-0.123-0.3672-0.123-0.5488V0H392.9140625v85.205078125c-0.2441 85.8164-49.8652 106.3242-110.627 45.5332l-60.0898-60.0586L70.709 222.168l60.0586 60.1191c60.8223 60.791 40.1914 110.5352-45.7773 110.5352H0v214.294921875h84.9921875c85.9688 0 106.5977 49.7441 45.7773 110.5957l-60.0586 60.0586 151.4902 151.5508 60.0898-60.1191c60.7598-60.7305 110.3828-40.2227 110.627 45.5332V1000h214.203125v-84.412109375c0-0.1836 0.123-0.3672 0.123-0.5488-0.1836-85.998 49.6211-106.5684 110.4746-45.8379l60.0586 60.1191 151.5508-151.5508-60.1191-60.0586C808.4727 656.8613 828.9805 607.1172 915.0996 607.1172zM500 687.5c-103.5469 0-187.5-83.9844-187.5-187.5s83.9531-187.5 187.5-187.5c103.5156 0 187.5 83.9844 187.5 187.5S603.5156 687.5 500 687.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.3267 63.9468c-185.856 0-336.5468 150.4061-336.5468 335.8894 0 185.4822 336.5468 559.7706 336.5468 559.7706s336.5437-374.2884 336.5437-559.7706C848.8704 214.3529 698.1806 63.9468 512.3267 63.9468zM714.2523 399.8362c0 111.2842-90.4018 201.5324-201.9256 201.5324-111.5269 0-201.9287-90.2482-201.9287-201.5324 0-111.3068 90.4018-201.5334 201.9287-201.5334C623.8505 198.3027 714.2523 288.5284 714.2523 399.8362z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M392.446 594.126c0 36.209 0 71.029 0 100.113 10.907-8.734 24.472-18.994 37.343-30.061 14.254-12.255 28.28-17.686 48.654-13.782 22.018 4.22 46.101 4.263 68.107 0.024 20.356-3.919 34.693 1.088 48.653 13.694 12.572 11.35 25.151 22.691 38.68 34.897 0-34.307 0-69.437 0-105.431 34.684 10.604 68.135 17.379 98.581 30.915 50.535 22.466 73.526 68.37 88.642 118.643 2.911 9.682 3.262 20.103 5.384 30.056 5.564 26.097-4.080 47.358-26.823 57.681-33.981 15.422-69.119 30.232-105.321 38.47-132.929 30.254-265.927 26.585-397.548-8.839-24.938-6.713-48.953-18.192-72.019-30.132-21.022-10.882-29.998-29.874-26.934-54.452 5.761-46.216 21.94-87.7 53.546-122.379 17.645-19.36 39.328-31.424 65.3-37.287 24.651-5.562 48.635-14.074 75.748-22.13z"  ></path>' +
    '' +
    '<path d="M638.308 452.787c-1.511 26.002-6.654 47.853-25.097 65.937-6.293 6.169-5.996 20.169-6.705 30.726-2.607 38.775-43.327 86.767-81.874 92.265-13.114 1.87-29.181 0.415-40.508-5.752-36.016-19.604-67.339-43.509-65.915-91.825 0.346-11.74-9.22-23.73-14.047-35.679-6.983-17.286-13.8-34.638-21.456-53.898-15.333 2.323-30.84-1.892-36.378-22.66-6.311-23.67-16.433-47.171 5.548-69.47 4.302-4.365 2.851-16.27 1.349-24.186-10.238-53.965 3.447-101.485 39.185-142.193 39.579-45.084 90.578-51.749 147.997-46.762 99.916 8.678 149.731 110.944 130.815 192.962-2.228 9.66-2.242 16.091 6.302 26.117 17.563 20.611 7.894 45.793-0.808 68.706-6.483 17.070-20.174 19.62-38.407 15.711z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowdown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M464.678228 851.076602 74.299193 192.383612c-4.786003-7.887644-7.220449-16.891715-7.220449-26.134217 0-9.402137 2.596128-18.644639 7.625678-26.771737 9.816576-16.174378 28.312836-26.293853 48.107671-26.293853l780.919752 0c19.794835 0 38.291095 10.119475 48.188512 26.373671 4.948709 8.04728 7.544837 17.289782 7.544837 26.691919 0 9.242502-2.433422 18.246573-7.220449 26.134217L561.785893 851.076602c-9.816576 16.652262-28.393677 27.01119-48.5129 27.01119S474.575646 867.728864 464.678228 851.076602z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dangan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M670.550039 832.464709l-447.696462 0c-52.892651 0-95.934956-43.043329-95.934956-95.934956L126.918621 160.918993c0-52.892651 43.043329-95.934956 95.934956-95.934956l447.696462 0c52.892651 0 95.934956 43.043329 95.934956 95.934956l0 575.61076C766.484995 789.422404 723.44269 832.464709 670.550039 832.464709zM222.852554 128.940674c-17.620309 0-31.978319 14.358009-31.978319 31.978319l0 575.61076c0 17.652032 14.358009 31.978319 31.978319 31.978319l447.696462 0c17.652032 0 31.978319-14.326287 31.978319-31.978319L702.527334 160.918993c0-17.620309-14.326287-31.978319-31.978319-31.978319L222.852554 128.940674zM798.463314 960.377984 318.788533 960.377984c-17.652032 0-31.978319-14.294564-31.978319-31.978319 0-17.683754 14.326287-31.978319 31.978319-31.978319l479.675804 0c17.652032 0 31.978319-14.326287 31.978319-31.978319L830.442656 256.854972c0-17.652032 14.294564-31.978319 31.978319-31.978319s31.978319 14.326287 31.978319 31.978319l0 607.589079C894.39827 917.335678 851.355965 960.377984 798.463314 960.377984zM542.636764 320.81161l-255.82655 0c-17.652032 0-31.978319-14.326287-31.978319-31.978319s14.326287-31.978319 31.978319-31.978319l255.82655 0c17.683754 0 31.978319 14.326287 31.978319 31.978319S560.320519 320.81161 542.636764 320.81161zM606.593402 480.703203 286.841937 480.703203c-17.652032 0-31.978319-14.326287-31.978319-31.978319 0-17.652032 14.326287-31.978319 31.978319-31.978319l319.751465 0c17.683754 0 31.978319 14.326287 31.978319 31.978319C638.57172 466.376916 624.277156 480.703203 606.593402 480.703203zM606.593402 640.594797l-319.783187 0c-17.652032 0-31.978319-14.294564-31.978319-31.978319 0-17.683754 14.326287-31.978319 31.978319-31.978319l319.783187 0c17.683754 0 31.978319 14.294564 31.978319 31.978319C638.57172 626.300232 624.277156 640.594797 606.593402 640.594797z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gaojing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M644.629859 819.467773 376.115552 819.467773l-9.349464 0c-4.238981 0-3.016393 5.361097 3.602287 16.027975 6.61868 10.662363 16.723371 22.380237 30.312945 35.204424 13.473298 12.818542 29.553202 24.535288 47.963135 35.198779 18.465248 10.666878 38.211786 16.029104 59.114307 16.029104 0.870374 0 1.68769-0.351085 2.556935-0.408658 0.871503 0.058702 1.682046 0.408658 2.554677 0.408658 20.90365 0 40.591485-5.420928 59.17188-16.029104 18.35123-10.719936 34.495481-22.437811 47.96765-35.198779 13.529742-12.823058 23.68862-24.540932 30.250856-35.204424 6.623196-10.724452 7.89997-16.027975 3.601158-16.027975L644.629859 819.467773 644.629859 819.467773zM913.147552 728.724236 913.147552 728.724236c-13.241876-18.53411-28.049521-40.619708-44.48051-66.204863-16.380189-25.585155-31.823399-53.851423-46.572343-84.799933-14.51865-31.004954-27.061743-63.761945-37.51639-98.204369-10.45126-34.563215-15.67802-69.472998-15.67802-105.138009 0-34.85221-4.818101-66.616907-14.11225-94.941878-9.347206-28.496562-21.88917-53.735147-37.627021-75.821874-15.679148-22.091242-34.086823-40.506819-55.3393-55.482669-21.252477-14.980366-43.726412-26.288453-67.421806-34.038281-24.854763-7.109747-53.075876-11.013447-81.934811-11.249385-0.637823 0-1.333219-0.115147-2.034259-0.115147l-0.055316 0-0.058702 0c-0.694267 0-1.334348 0.115147-2.034259 0.115147-28.802491 0.235938-57.080048 4.139638-81.878367 11.249385-23.750709 7.750956-46.222387 19.115488-67.532437 34.095854-21.199419 14.97585-39.664667 33.393685-55.224153 55.484926-15.798811 22.084468-28.340775 47.323054-37.68911 75.820745-9.348335 28.323841-14.111121 60.089667-14.111121 94.941878 0 35.607437-5.227888 70.57931-15.679148 105.13688-10.509963 34.448068-23.056442 67.14297-37.569448 98.146795-14.69137 30.94851-30.139096 59.214778-46.514769 84.799933-16.373416 25.526453-31.185577 47.613179-44.422937 66.14616l-0.057573 0.058702c-4.820359 6.410964-7.141356 12.707911-6.738342 18.710217 0.351085 6.061009 1.917984 11.128594 4.761657 15.500784 2.730784 4.196083 6.217924 7.634681 10.509963 10.140816 0.062089 0.058702 0.177236 0 0.234809 0.058702 2.263424 1.399823 5.108226 1.805095 7.957543 2.392117 1.390792 0.288996 2.843673 1.222587 4.234465 1.222587l1.046481 0 761.643787 0 1.044223 0c1.45401 0 2.787229-0.991165 4.24011-1.222587 2.844802-0.588152 5.692991-0.992294 7.957543-2.392117 0.116276-0.058702 0.17272 0 0.287867-0.058702 4.24011-2.507264 7.72725-5.945862 10.513349-10.140816 2.7861-4.314616 4.354127-9.383331 4.700697-15.500784C920.288908 741.431018 917.966782 735.134071 913.147552 728.724236L913.147552 728.724236zM913.147552 728.724236"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renminbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M758.909818 173.435861l-182.977543 311.293592 144.178718 0 0 68.778366-167.987772 0 0 94.784715 167.987772 0 0 69.651264-167.987772 0 0 138.00823-86.416931 0 0-138.00823L291.548031 717.943798l0-69.651264 174.15826 0 0-94.784715L291.548031 553.507819l0-68.778366 148.60341 0L258.919694 173.435861l97.43351 0c84.671135 154.623398 136.081834 252.658907 154.322399 294.106526l1.775897 0c6.170488-17.036567 23.086655-51.4408 50.718401-103.182598l103.603998-190.923927L758.909818 173.435861z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.168 959.456 887.168 116.192 753.856 0 310.112 165.824l0 41.472 402.976-135.808 0 948.832 268.256 0 0-60.864L887.168 959.456zM165.728 699.68l211.296-42.272 0-107.232L165.728 605.76 165.728 699.68zM165.728 1021.76l211.296 0 0-112.512-211.296 15.328L165.728 1021.76zM165.728 860.192l211.296-20.416 0-107.04-211.296 35.52L165.728 860.192zM165.728 536.096l211.296-58.208 0-111.328-211.296 71.488L165.728 536.096zM611.392 259.168l-119.296-72.512L42.88 348.64 42.656 1024l59.168 0L101.824 381.312l336.096-110.688 0 749.92 173.504 0L611.424 259.168zM611.392 259.168"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuichu" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1001.65696 463.424l-332.224-332.416C648.76096 110.4 624.05696 104.256 598.52096 113.792c-26.176 9.856-41.152 33.28-41.216 64.384L557.30496 328.32 492.28096 328.32 305.65696 328.384C266.48896 328.512 239.16096 355.712 239.03296 394.624c-0.128 78.4-0.128 156.736 0 235.072 0.128 37.696 27.776 65.28 65.792 65.664l252.48 0.064L557.24096 724.48c-0.128 40.768-0.256 81.408 0.576 122.112 0.256 15.936 6.528 33.28 16.256 45.184 11.904 14.656 28.224 22.72 45.952 22.72l0 0c17.536 0 35.2-8 49.728-22.464 110.848-110.72 221.568-221.504 332.288-332.352C1031.60896 530.176 1031.48096 493.248 1001.65696 463.424z"  ></path>' +
    '' +
    '<path d="M387.70496 805.696 387.64096 805.696l-72.576 0.128-103.872-0.064c-52.48 0-82.624-30.144-82.624-82.688L128.56896 300.48c0-52.416 30.144-82.496 82.752-82.496l68.8-0.064 75.584 0.064 42.048-0.064c30.08 0 46.528-15.104 48.896-44.8 0.896-11.072 0.64-22.336 0.256-34.88C446.13696 106.944 428.60096 89.664 397.68896 89.6L321.33696 89.6C280.44096 89.6 239.54496 89.6 198.71296 89.856 186.16896 89.92 173.30496 91.328 160.44096 94.08 68.21696 113.728 0.88896 196.416 0.37696 290.688 0.12096 341.504 0.18496 392.384 0.24896 443.136l0.064 67.648L0.18496 581.76C0.12096 632.768-0.00704 683.712 0.44096 734.784c0.896 107.776 88.768 197.056 195.904 199.04 26.368 0.512 52.8 0.64 79.168 0.64l125.376-0.256c24.768 0 42.112-15.04 45.184-39.232 1.088-8.832 1.216-17.856 1.28-26.88l0-4.48c0.128-13.312 0.256-31.552-12.544-44.48C422.45696 806.784 404.66496 805.696 387.70496 805.696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiala" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M837.891 231.386l-325.889 564.458-325.889-564.458z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M975.896052 1024c-5.629185 0-11.258371-1.023488-16.375812-2.558721s-9.723138-4.093953-13.817092-7.676162l-5.629185-4.605697-297.835082-291.694153-4.605698 3.070465c-69.085457 47.592204-147.382309 71.644178-232.843578 71.644178-8.69965 0-17.3993-0.511744-26.09895-1.023488-8.69965-0.511744-17.3993-2.046977-26.098951-3.582209-59.362319-6.652674-117.189405-27.122439-166.316841-59.362319-54.244878-33.775112-98.766617-79.32034-131.006497-135.612194-15.864068-26.098951-28.145927-54.244878-36.845577-82.902549-8.69965-29.169415-14.328836-59.362319-16.375812-90.066966-2.046977-30.192904 0-60.897551 5.117441-91.090455 7.676162-49.127436 25.075462-95.184408 51.686157-137.147426 26.098951-42.474763 59.874063-78.808596 100.813593-108.489755 34.286857-26.610695 73.17941-47.08046 115.654173-61.409296 41.963018-14.328836 85.973013-21.493253 130.494752-21.493253 18.934533 0 36.845577 1.023488 53.733134 3.582209 46.056972 6.14093 90.066967 19.958021 132.029985 40.93953 41.451274 20.981509 78.808596 48.103948 110.024987 81.879061 36.333833 37.357321 64.47976 81.367316 83.926037 132.029985 18.934533 50.662669 27.634183 102.86057 25.075463 154.546726-3.070465 86.996502-34.286857 166.316842-92.625688 235.402299l-4.093953 4.605697 296.299851 289.135433v5.117441h3.582208c7.164418 9.211394 10.746627 18.422789 10.746627 29.169415 0 12.793603-4.605697 23.54023-13.817091 32.751624-8.69965 8.69965-20.469765 13.817091-33.263369 13.817092l-1.535232 1.023488z m-610.510745-973.337331c-4.093953 0-7.676162 0.511744-11.770115 1.535232l-6.652673 1.023488c-51.174413 7.676162-101.325337 27.122439-143.8001 56.291854-42.986507 28.145927-79.32034 66.526737-104.907546 110.536732-29.681159 47.592204-46.056972 101.837081-49.127437 160.175912-3.070465 58.850575 8.187906 114.118941 33.263369 164.269865 20.981509 45.033483 52.709645 85.973013 91.602198 118.212894 38.892554 32.23988 84.949525 56.291854 134.076962 69.597201 32.23988 8.69965 64.47976 13.305347 96.71964 13.305347 19.958021 0 39.916042-1.535232 59.874063-5.117441 27.634183-4.605697 54.756622-12.793603 80.343828-23.54023 25.587206-10.746627 49.63918-24.563718 72.155922-40.93953s42.474763-34.798601 60.897552-55.268366c17.911044-20.981509 33.263368-43.498251 45.545227-68.061969 23.028486-43.498251 35.310345-90.578711 37.869065-139.194403 2.558721-48.103948-5.629185-97.231384-24.563718-141.753123-10.746627-27.634183-24.563718-53.733133-42.474762-77.785108-17.911044-24.051974-38.892554-46.056972-62.432784-65.503248-23.54023-18.934533-49.63918-35.310345-77.273363-47.592204-46.056972-20.981509-97.743128-31.728136-148.405797-31.728136-13.817091-0.511744-27.122439 0-40.939531 1.535233z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengquewancheng-yuankuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM428 718.4l-45.6 45.6-45.6-45.6-116-117.6 45.6-45.6L383.2 672l367.2-367.2 45.6 45.6-368 368z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cuowuguanbiquxiao-yuankuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m238.4 641.6l-45.6 45.6L512 557.6 318.4 750.4l-45.6-45.6L467.2 512 273.6 318.4l45.6-45.6L512 467.2l193.6-193.6 45.6 45.6L557.6 512l192.8 193.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowright-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M851.077 559.322l-658.693 390.379c-7.888 4.786-16.892 7.22-26.134 7.22-9.402 0-18.645-2.596-26.772-7.626-16.174-9.817-26.294-28.313-26.294-48.108v-780.92c0-19.795 10.119-38.291 26.374-48.189 8.048-4.949 17.29-7.545 26.692-7.545 9.243 0 18.247 2.433 26.134 7.22l658.693 390.459c16.652 9.817 27.011 28.394 27.011 48.513s-10.359 38.697-27.011 48.595z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
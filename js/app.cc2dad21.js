(function() {
	var e = {
			20038: function(e, a, c) {
				"use strict";
				var d = c(49963),
					f = c(66252);

				function b(e, a, c, d, b, A) {
					const E = (0, f.up)("router-view");
					return (0, f.wg)(), (0, f.j4)(E)
				}
				var A = c(33907),
					E = {
						data() {
							return {}
						},
						computed: {
							...(0, A.rn)({
								isLoading: e => e.Modals.loadingOverlay
							})
						},
						methods: {
							stopLoading() {
								this.$store.commit("SET_LOADING_OVERLAY", !1)
							}
						}
					},
					C = c(83744);
				const D = (0, C.Z)(E, [
					["render", b]
				]);
				var B = D,
					F = c(42119),
					x = c(65961),
					t = c(45582),
					n = c(22526),
					s = c(83743),
					i = c(15342),
					o = c(59827),
					r = c(68826),
					u = c(40225),
					p = c(8102),
					l = c(63101),
					m = c(73486),
					y = c(83344),
					g = c(68013),
					v = c(11103),
					h = c(87426),
					w = c(79378),
					T = c(31812),
					_ = c(82217);
				const k = {
						id: "home"
					},
					M = (0, f.uE)('<div class="home-bg bg-small-pc"><img src="' + x + '"></div><div class="home-bg bg-pc"><img src="' + t + '"></div><div class="home-bg bg-mobile"><img src="' + n + '"></div><div class="home-bg bg-wide"><img src="' + s + '"></div>', 4),
					S = (0, f.uE)('<div class="nav-logo"><img data-aos="fade-down" src="' + i + '" alt="Tasties Logo"></div><div id="WEB3_CONNECT_MODAL_ID"></div><div class="alert-container" id="alert-container"></div><div class="info-btn-wrap"><h5 id="ape-max" style="display: none;">5 Max</h5><p class=totalamount">Total: <span 
						      ">0.05</span> ETH</p><div class="amount"><button type="button" id="minus">-</button><p id="lnprice" style="text-align: center;">1</p><button type="button" id="plus">+</button></div><button id="connect" style="cursor:pointer;">Connect</button><button class="button_mint" id="transfer" style="cursor:pointer; width: 115;">Mint</button></div><header><div class="content" id="staking"><div class="header-img-wrap" data-aos="fade-up"><img class="pc" src="' + o + '" alt="Header image"><img class="mobile" src="' + r + '" alt="Header image"></div><p class="stake-text" data-aos="fade-up"> Staking is a major part of the Tasties Ecosystem. With our $treat token, you will be able to earn, collect, and spend $treat throughout Sweetland. With our growing community the possibilities for our token are endless. </p><div class="boxes-wrap"><div class="box-wrap" data-aos="fade-right"><div class="img-wrap"><img src="' + u + '" alt="Wooden box"></div><p> Staking your Tasties opens many possibilities! Put your Tasties to work in The Factory to earn $treat token! Every Tasty earns at least 10 $treat per day by being staked, however rarer tastes will earn you more! </p></div><div class="box-wrap" data-aos="fade-up"><div class="img-wrap"><img src="' + p + '" alt="Wooden box"></div><p> Keep your Tasties staked in the factory to earn a passive amount of $treat token every day! The more tasties you have staked the more you will earn. Make sure to check on the factory every day to see how much your tasties have earned and collect your rewards! </p></div><div class="box-wrap" data-aos="fade-left"><div class="img-wrap"><img src="' + l + '" alt="Wooden box"></div><p> With each Tastie earning you at least 10 $treat token per day, you can now put this to use in the Tasties ecosystem, which offers many ways to spend your $treat token! Once you have earned your $treat you can now use this in the Tasty Shop. </p></div></div></div></header><section class="rarities" id="rarities" data-aos="fade-up"><div class="rarities-img-wrap"><img class="mobile" src="' + y + '" alt="Rarities"></div></section>', 4),
					O = {
						class: "faq",
						id: "faq",
						"data-aos": "fade-up"
					},
					I = (0, f._)("div", {
						class: "faq-header-wrap"
					}, [(0, f._)("img", {
						src: g,
						alt: "Faq header"
					})], -1),
					R = {
						class: "content"
					},
					N = {
						class: "faqs"
					},
					L = (0, f._)("div", {
						class: "question"
					}, "What is the total supply?", -1),
					q = (0, f._)("div", {
						class: "answer"
					}, "5,000", -1),
					W = [L, q],
					P = (0, f._)("div", {
						class: "question"
					}, "When will Tasties launch?", -1),
					K = (0, f._)("div", {
						class: "answer"
					}, "June 25th, 2022", -1),
					G = [P, K],
					Y = (0, f._)("div", {
						class: "question"
					}, "What is the price of minting?", -1),
					$ = (0, f._)("div", {
						class: "answer"
					}, "Completely Free!", -1),
					U = [Y, $],
					V = (0, f._)("div", {
						class: "question"
					}, "How many Tasties can I mint?", -1),
					H = (0, f._)("div", {
						class: "answer"
					}, "2 per wallet", -1),
					Z = [V, H],
					j = (0, f._)("div", {
						class: "question"
					}, "Can I ask my own question?", -1),
					z = (0, f._)("div", {
						class: "answer"
					}, " Yes! Go to our support questions part of our discord. ", -1),
					X = [j, z],
					Q = (0, f.uE)('<footer><div class="footer-bg-wrap"><img src="' + v + '"></div><div class="content"><div class="logo-wrap"><img src="' + h + '" alt="Logo"></div><div class="socials-wrap"><a href="https://twitter.com/tastiesnft"><img src="' + w + '" alt="Twitter"></a><a href=""><img src="' + T + '" alt="Instagram"></a><a href="https://t.co/Bwn2XTRe9m"><img src="' + _ + '" alt="Discord"></a></div><div class="copy">© 2022 TASTIES</div></div></footer>', 1);

				function J(e, a, c, d, b, A) {
					const E = (0, f.up)("MainNav");
					return (0, f.wg)(), (0, f.iD)("div", k, [M, (0, f.Wm)(E), S, (0, f._)("section", O, [I, (0, f._)("div", R, [(0, f._)("div", N, [(0, f._)("div", {
						class: "faq-item",
						"data-aos": "fade-left",
						onClick: a[0] || (a[0] = (...e) => A.toggleFaq && A.toggleFaq(...e))
					}, W), (0, f._)("div", {
						class: "faq-item",
						"data-aos": "fade-left",
						onClick: a[1] || (a[1] = (...e) => A.toggleFaq && A.toggleFaq(...e))
					}, G), (0, f._)("div", {
						class: "faq-item",
						"data-aos": "fade-left",
						onClick: a[2] || (a[2] = (...e) => A.toggleFaq && A.toggleFaq(...e))
					}, U), (0, f._)("div", {
						class: "faq-item",
						"data-aos": "fade-left",
						onClick: a[3] || (a[3] = (...e) => A.toggleFaq && A.toggleFaq(...e))
					}, Z), (0, f._)("div", {
						class: "faq-item",
						"data-aos": "fade-left",
						onClick: a[4] || (a[4] = (...e) => A.toggleFaq && A.toggleFaq(...e))
					}, X)])])]), Q])
				}
				var ee = c(2711),
					ae = c.n(ee),
					ce = c(3577),
					de = c(66639);
				const fe = {
						class: "top"
					},
					be = (0, f._)("a", {
						href: "/"
					}, [(0, f._)("img", {
						src: de,
						alt: "home"
					})], -1),
					Ae = {
						key: 0,
						class: "expand"
					},
					Ee = {
						class: "nav-social"
					},
					Ce = (0, f._)("img", {
						src: w,
						alt: "Twitter"
					}, null, -1),
					De = [Ce],
					Be = (0, f._)("img", {
						src: T,
						alt: "Instagram"
					}, null, -1),
					Fe = [Be],
					xe = (0, f._)("img", {
						src: _,
						alt: "Discord"
					}, null, -1),
					te = [xe],
					ne = (0, f.uE)('<div class="nav-social"><a href="https://twitter.com/tastiesnft"><img src="' + w + '" alt="Twitter"></a><a href=""><img src="' + T + '" alt="Instagram"></a><a href="https://t.co/Bwn2XTRe9m"><img src="' + _ + '" alt="Discord"></a></div>', 1),
					se = {
						class: "nav-items"
					},
					ie = (0, f._)("a", {
						href: "/",
						class: "nav-item"
					}, "Home", -1),
					oe = (0, f._)("a", {
						href: "#staking",
						class: "nav-item"
					}, "Staking", -1),
					re = (0, f._)("a", {
						href: "#rarities",
						class: "nav-item"
					}, "Rarities", -1),
					ue = (0, f._)("a", {
						href: "#faq",
						class: "nav-item"
					}, "FAQ", -1);

				function pe(e, a, c, d, b, A) {
					return (0, f.wg)(), (0, f.iD)(f.HY, null, [(0, f._)("nav", {
						class: (0, ce.C_)(`nav-mobile ${b.menu?"expanded":""} ${b.menuBg?"menu-bg":""}`)
					}, [(0, f._)("div", fe, [be, b.menu ? ((0, f.wg)(), (0, f.iD)("i", {
						key: 0,
						class: "close",
						onClick: a[0] || (a[0] = e => A.hideMenu())
					})) : (0, f.kq)("", !0), b.menu ? (0, f.kq)("", !0) : ((0, f.wg)(), (0, f.iD)("i", {
						key: 1,
						class: "open",
						onClick: a[1] || (a[1] = e => A.showMenu())
					}))])], 2), b.menu ? ((0, f.wg)(), (0, f.iD)("div", Ae, [(0, f._)("a", {
						href: "#staking",
						class: "nav-item",
						onClick: a[2] || (a[2] = e => A.hideMenu())
					}, "Staking"), (0, f._)("a", {
						href: "#rarities",
						class: "nav-item",
						onClick: a[3] || (a[3] = e => A.hideMenu())
					}, "Rarities"), (0, f._)("a", {
						href: "#faq",
						class: "nav-item",
						onClick: a[4] || (a[4] = e => A.hideMenu())
					}, "FAQ"), (0, f._)("a", {
						class: "nav-item-button",
						onClick: a[5] || (a[5] = e => A.hideMenu() || A.comingSoon())
					}, "GUIDE"), (0, f._)("a", {
						class: "nav-item-button",
						onClick: a[6] || (a[6] = e => A.hideMenu() || A.comingSoon())
					}, "THE FACTORY"), (0, f._)("div", Ee, [(0, f._)("a", {
						href: "https://twitter.com/tastiesnft",
						onClick: a[7] || (a[7] = e => A.hideMenu())
					}, De), (0, f._)("a", {
						href: "",
						onClick: a[8] || (a[8] = e => A.hideMenu())
					}, Fe), (0, f._)("a", {
						href: "https://t.co/Bwn2XTRe9m",
						onClick: a[9] || (a[9] = e => A.hideMenu())
					}, te)])])) : (0, f.kq)("", !0), (0, f._)("nav", {
						class: (0, ce.C_)("nav-pc " + (b.menuBg ? "menu-bg" : ""))
					}, [ne, (0, f._)("div", se, [ie, oe, re, ue, (0, f._)("a", {
						target: "blank",
						class: "nav-item-button",
						onClick: a[10] || (a[10] = e => A.comingSoon())
					}, "GUIDE"), (0, f._)("a", {
						target: "blank",
						class: "nav-item-button",
						onClick: a[11] || (a[11] = e => A.comingSoon())
					}, "THE FACTORY")])], 2)], 64)
				}
				var le = {
					data() {
						return {
							menu: !1,
							menuBg: !1
						}
					},
					methods: {
						async comingSoon() {
							this.$store.commit("SET_LOADING_OVERLAY", !0)
						},
						showMenu() {
							this.menu = !0, document.body.classList.add("lock-scroll")
						},
						hideMenu() {
							this.menu = !1, document.body.classList.remove("lock-scroll")
						},
						hideMenuComingSoon() {
							alert("Coming Soon!")
						}
					}
				};
				const me = (0, C.Z)(le, [
					["render", pe]
				]);
				var ye = me,
					ge = {
						components: {
							MainNav: ye
						},
						name: "HomeView",
						computed: {
							...(0, A.rn)({
								wallet: e => e.Web3.account
							})
						},
						async mounted() {
							ae().init({
								once: !0,
								duration: 1e3
							}), window.addEventListener("load", ae().refresh)
						},
						unmounted() {},
						methods: {
							handleScroll() {},
							toggleFaq(e) {
								e.target.classList.toggle("show"), Array.from(document.querySelectorAll(".faq-item.show")).forEach((a => {
									a !== e.target && a.classList.remove("show")
								}))
							},
							async connectWallet() {
								await this.$store.dispatch("getWeb3Data")
							},
							async comingSoon() {
								this.$store.commit("SET_LOADING_OVERLAY", !0)
							}
						}
					};
				const ve = (0, C.Z)(ge, [
					["render", J]
				]);
				var he = ve,
					we = c(95930),
					Te = c(58705),
					_e = c(80244);
				const ke = {
						id: "dashboard"
					},
					Me = (0, f._)("div", {
						class: "dashboard-bg"
					}, [(0, f._)("img", {
						src: we
					})], -1),
					Se = {
						class: "content-wrap"
					},
					Oe = {
						class: "staking"
					},
					Ie = (0, f._)("div", {
						class: "stake-buttons"
					}, [(0, f._)("a", {
						class: "selected"
					}, "Stake Tastie"), (0, f._)("a", {
						class: ""
					}, "Unstake")], -1),
					Re = {
						class: "staking-inner"
					},
					Ne = {
						class: "img-wrap"
					},
					Le = ["src", "alt"],
					qe = (0, f._)("div", {
						class: "multi"
					}, "1.4X", -1),
					We = {
						class: "nft-name"
					},
					Pe = (0, f.uE)('<div class="staking-counter"><div class="count">12</div><div class="tasties-staked"><img src="' + Te + '" alt="Tasties Staked"></div><div class="treats-wrap"><div class="treats-pet-day"> 150 <img src="' + _e + '"> Treat Per Day </div><div class="treats-count"> 11336 <img src="' + _e + '"></div></div></div>', 1);

				function Ke(e, a, c, d, b, A) {
					const E = (0, f.up)("MainNav"),
						C = (0, f.up)("DashboardMenu"),
						D = (0, f.up)("FooterContent");
					return (0, f.wg)(), (0, f.iD)("div", ke, [Me, (0, f.Wm)(E), (0, f.Wm)(C), (0, f._)("div", Se, [(0, f._)("div", Oe, [Ie, (0, f._)("div", Re, [((0, f.wg)(!0), (0, f.iD)(f.HY, null, (0, f.Ko)(b.nfts, (e => ((0, f.wg)(), (0, f.iD)("div", {
						class: "nft-stake staked",
						key: e.id
					}, [(0, f._)("div", Ne, [(0, f._)("img", {
						src: e.path,
						alt: `NFT:${e.id}`
					}, null, 8, Le)]), qe, (0, f._)("div", We, "#" + (0, ce.zw)(e.id), 1)])))), 128))])]), Pe]), (0, f._)("footer", null, [(0, f.Wm)(D)])])
				}
				const Ge = {
						class: "dashboard-menu-wrap"
					},
					Ye = {
						class: "dashboard-menu"
					},
					$e = (0, f.Uk)("Staking"),
					Ue = (0, f.Uk)("Leaderboard"),
					Ve = (0, f._)("a", {
						class: (0, ce.C_)("soon")
					}, "Shop", -1);

				function He(e, a, c, d, b, A) {
					const E = (0, f.up)("router-link");
					return (0, f.wg)(), (0, f.iD)("div", Ge, [(0, f._)("div", Ye, [(0, f.Wm)(E, {
						to: "/staking",
						class: (0, ce.C_)("" + ("staking" === c.selected ? "active" : ""))
					}, {
						default: (0, f.w5)((() => [$e])),
						_: 1
					}, 8, ["class"]), (0, f.Wm)(E, {
						to: "/leaderboard",
						class: (0, ce.C_)("" + ("leaderboard" === c.selected ? "active" : ""))
					}, {
						default: (0, f.w5)((() => [Ue])),
						_: 1
					}, 8, ["class"]), Ve])])
				}
				var Ze = {
					props: ["selected"]
				};
				const je = (0, C.Z)(Ze, [
					["render", He]
				]);
				var ze = je;
				const Xe = {
						class: "content"
					},
					Qe = (0, f.uE)('<div class="logo-wrap"><img src="' + h + '" alt="Logo"></div><div class="socials-wrap"><a href="https://twitter.com/tastiesnft"><img src="' + w + '" alt="Twitter"></a><a href=""><img src="' + T + '" alt="Instagram"></a><a href="https://t.co/Bwn2XTRe9m"><img src="' + _ + '" alt="Discord"></a></div><div class="copy">© 2022 TASTIES</div>', 3),
					Je = [Qe];

				function ea(e, a, c, d, b, A) {
					return (0, f.wg)(), (0, f.iD)("div", Xe, Je)
				}
				var aa = {};
				const ca = (0, C.Z)(aa, [
					["render", ea]
				]);
				var da = ca,
					fa = {
						components: {
							MainNav: ye,
							DashboardMenu: ze,
							FooterContent: da
						},
						data() {
							return {
								nfts: [{
									id: 2947,
									path: "/nfts/2947.png"
								}, {
									id: 2948,
									path: "/nfts/2948.png"
								}, {
									id: 2949,
									path: "/nfts/2949.png"
								}, {
									id: 2950,
									path: "/nfts/2947.png"
								}, {
									id: 2951,
									path: "/nfts/2948.png"
								}, {
									id: 2952,
									path: "/nfts/2949.png"
								}, {
									id: 2953,
									path: "/nfts/2947.png"
								}, {
									id: 2954,
									path: "/nfts/2948.png"
								}, {
									id: 2955,
									path: "/nfts/2949.png"
								}]
							}
						}
					};
				const ba = (0, C.Z)(fa, [
					["render", Ke]
				]);
				var Aa = ba,
					Ea = c(74091);
				const Ca = {
						id: "leaderboard"
					},
					Da = (0, f._)("div", {
						class: "leaderboard-bg"
					}, [(0, f._)("img", {
						src: Ea
					})], -1),
					Ba = {
						class: "leaderboard-wrap"
					},
					Fa = {
						key: 0,
						class: "order candy"
					},
					xa = ["src"],
					ta = {
						key: 1,
						class: "order"
					},
					na = {
						class: "name"
					},
					sa = {
						class: "score"
					};

				function ia(e, a, c, d, b, A) {
					const E = (0, f.up)("MainNav"),
						C = (0, f.up)("DashboardMenu"),
						D = (0, f.up)("FooterContent");
					return (0, f.wg)(), (0, f.iD)("div", Ca, [Da, (0, f.Wm)(E), (0, f.Wm)(C, {
						selected: "leaderboard"
					}), (0, f._)("div", Ba, [((0, f.wg)(!0), (0, f.iD)(f.HY, null, (0, f.Ko)(b.data, ((e, a) => ((0, f.wg)(), (0, f.iD)("div", {
						class: "leaderboard-item",
						key: e.id
					}, [a + 1 <= 3 ? ((0, f.wg)(), (0, f.iD)("div", Fa, [(0, f._)("img", {
						src: `/images/candy${a+1}.svg`
					}, null, 8, xa)])) : ((0, f.wg)(), (0, f.iD)("div", ta, "#" + (0, ce.zw)(a + 1), 1)), (0, f._)("div", na, (0, ce.zw)(e.name), 1), (0, f._)("div", sa, (0, ce.zw)(e.score) + " Score", 1)])))), 128))]), (0, f._)("footer", null, [(0, f.Wm)(D)])])
				}
				var oa = {
					components: {
						MainNav: ye,
						DashboardMenu: ze,
						FooterContent: da
					},
					data() {
						return {
							data: [{
								id: 1,
								name: "Kek 1",
								score: 200
							}, {
								id: 2,
								name: "Kek 2",
								score: 450
							}, {
								id: 3,
								name: "Kek 3",
								score: 320
							}, {
								id: 4,
								name: "Kek 4",
								score: 600
							}, {
								id: 5,
								name: "Kek 5",
								score: 500
							}, {
								id: 6,
								name: "Kek 6",
								score: 1235
							}, {
								id: 7,
								name: "Kek 7",
								score: 746
							}, {
								id: 8,
								name: "Kek 8",
								score: 314
							}, {
								id: 9,
								name: "Kek 9",
								score: 450
							}, {
								id: 10,
								name: "Kek 10",
								score: 515
							}, {
								id: 11,
								name: "Kek 11",
								score: 278
							}, {
								id: 12,
								name: "Kek 12",
								score: 450
							}, {
								id: 13,
								name: "Kek 13",
								score: 390
							}, {
								id: 14,
								name: "Kek 14",
								score: 100
							}, {
								id: 15,
								name: "Kek 15",
								score: 540
							}, {
								id: 16,
								name: "Kek 16",
								score: 235
							}, {
								id: 17,
								name: "Kek 17",
								score: 76
							}, {
								id: 18,
								name: "Kek 18",
								score: 31
							}, {
								id: 19,
								name: "Kek 19",
								score: 212
							}, {
								id: 20,
								name: "Kek 20",
								score: 789
							}]
						}
					},
					mounted() {
						this.data.sort(((e, a) => a.score - e.score))
					}
				};
				const ra = (0, C.Z)(oa, [
					["render", ia]
				]);
				var ua = ra;
				const pa = [{
						path: "/staking",
						name: "staking",
						component: Aa
					}, {
						path: "/leaderboard",
						name: "leaderboard",
						component: ua
					}, {
						path: "/",
						name: "home",
						component: he
					}],
					la = (0, F.p7)({
						history: (0, F.PO)(),
						routes: pa
					});
				var ma = la,
					ya = {
						state() {
							return {
								loadingOverlay: !1
							}
						},
						mutations: {
							SET_LOADING_OVERLAY(e, a) {
								e.loadingOverlay = a
							}
						}
					},
					ga = c(31692),
					va = c.n(ga),
					ha = c(3283),
					wa = c.n(ha),
					Ta = JSON.parse('{"ez":"","IB":{"ID":1},"$D":60000000000000000}'),
					_a = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerIndexOutOfBounds","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TokenIndexOutOfBounds","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_prefixURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newID","type":"uint256"}],"name":"increaseTokenID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"localtotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintItems","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"presaleMintItems","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"resetSaleMintsForAddrs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ext","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"updateMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"updateMaxPresaleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"updateMaxTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawSponsorship","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
					ka = JSON.parse('[""]'),
					Ma = c(25108),
					Sa = {
						state() {
							return {
								web3: null,
								account: null,
								smartContract: null,
								isPresaleActive: !1,
								isSaleActive: !1,
								mintError: null,
								proof: null,
								currentMinted: 0
							}
						},
						mutations: {
							SET_ACCOUNT(e, a) {
								e.account = a
							},
							CONNECT_SUCCESS(e, a) {
								e.web3 = a.web3, e.account = a.account, e.smartContract = a.smartContract
							},
							IS_PRESALE(e, a) {
								e.isPresaleActive = a
							},
							IS_SALE(e, a) {
								e.isSaleActive = a
							},
							SET_CLAIMING_PROOF(e, a) {
								e.proof = a
							},
							SET_MINT_ERROR(e, a) {
								e.mintError = a
							},
							SET_CURRENT_MINTED(e, a) {
								e.currentMinted = a
							}
						},
						actions: {
							async getWeb3Data({
								commit: e,
								dispatch: a
							}) {
								const {
									ethereum: c
								} = window, d = c && c.isMetaMask;
								if (d) {
									e("SET_LOADING_OVERLAY", !0), va().setProvider(c);
									let d = new(wa())(c);
									try {
										const f = await c.request({
												method: "eth_requestAccounts"
											}),
											b = await c.request({
												method: "net_version"
											});
										if (b == Ta.IB.ID) {
											const b = new(va())(_a, Ta.ez);
											e("SET_LOADING_OVERLAY", !1), e("CONNECT_SUCCESS", {
												account: f[0],
												smartContract: b,
												web3: d
											}), a("isPresale", e), a("isSale", e), a("generateRoot", f[0]), a("getUserTokens", e), a("getCurrentMinted", e), c.on("accountsChanged", (a => {
												e("SET_ACCOUNT", a[0])
											})), c.on("chainChanged", (() => {
												window.location.reload()
											}))
										} else e("SET_LOADING_OVERLAY", !1), e("SET_ACTIVE_WRONG_NETWORK", !0), e("SET_CLOSED_WRONG_NETWORK", !1), e("SET_MINT_ERROR", "Change your network to ethereum!")
									} catch (f) {
										e("SET_LOADING_OVERLAY", !1), Ma.log(f), e("SET_MINT_ERROR", "Sorry, something went wrong."), alert("Something went wrong.")
									}
								} else window.location.replace("")
							},
							generateRoot({
								state: e,
								commit: a
							}, d) {
								Ma.log(e);
								const {
									MerkleTree: f
								} = c(2162), b = c(94648), A = ka.map((e => b(e))), E = new f(A, b, {
									sortPairs: !0
								}), C = b(d), D = E.getHexProof(C);
								a("SET_CLAIMING_PROOF", D)
							},
							getCurrentMinted({
								state: e
							}, a) {
								e.smartContract.methods.totalSupply().call().then((function(e) {
									return Ma.log("currentMinted", e), a("SET_CURRENT_MINTED", e), e
								}))
							},
							isPresale({
								state: e
							}, a) {
								e.smartContract.methods.preSaleActive().call().then((function(e) {
									return Ma.log("PreSaleActive", e), a("IS_PRESALE", e), e
								}))
							},
							isSale({
								state: e
							}, a) {
								e.smartContract.methods.saleActive().call().then((function(e) {
									Ma.log("saleActive", e), a("IS_SALE", e)
								}))
							},
							mint({
								state: e,
								commit: a
							}, c) {
								a("SET_LOADING_OVERLAY", !0);
								let d = Ta.$D;
								Ma.log("mint", "trying to mint");
								let f = String(d * c);
								e.smartContract.methods.mintItems(c).send({
									to: Ta.ez,
									from: e.account,
									value: f
								}).once("error", (e => {
									a("SET_LOADING_OVERLAY", !1), 4001 === e.code ? (Ma.log("Cancelled transaction"), a("SET_MINT_ERROR", "Cancelled transaction.")) : (Ma.log("Sorry, something went wrong, please try again later."), a("SET_MINT_ERROR", "Sorry, something went wrong."))
								})).then((e => {
									a("SET_LOADING_OVERLAY", !1), ma.push("/mint-succeed"), Ma.log("ResultMint", e), Ma.log("WOW, the tasties is yours! Go visit Opensea.io to view it.")
								}))
							},
							presaleMint({
								state: e,
								commit: a
							}, c) {
								if (Ma.log("my add", e.account), !ka.find((a => a.toLowerCase() === e.account.toLowerCase()))) return void alert("You are not whitelisted! Please come back in 2 hours for public sale!");
								a("SET_LOADING_OVERLAY", !0);
								let d = Ta.$D;
								Ma.log("preSalemint", "trying to presale");
								let f = String(d * c);
								e.smartContract.methods.presaleMintItems(c, e.proof).send({
									to: Ta.ez,
									from: e.account,
									value: f
								}).once("error", (e => {
									a("SET_LOADING_OVERLAY", !1), 4001 === e.code ? (Ma.log("Cancelled transaction"), a("SET_MINT_ERROR", "Cancelled transaction.")) : (Ma.log("Sorry, something went wrong, please try again later."), a("SET_MINT_ERROR", "Sorry, something went wrong."))
								})).then((e => {
									a("SET_LOADING_OVERLAY", !1), ma.push("/mint-succeed"), Ma.log("ResultMint", e), Ma.log("WOW, the tasties is yours! Go visit Opensea.io to view it.")
								}))
							},
							getUserTokens({
								state: e
							}) {
								e.smartContract.methods.getTokenIds(e.account).call().then((function(e) {
									Ma.log("getToeknIds", e)
								}))
							}
						}
					},
					Oa = (0, A.MT)({
						state: {},
						mutations: {},
						actions: {},
						modules: {
							Modals: ya,
							Web3: Sa
						}
					});
				(0, d.ri)(B).use(Oa).use(ma).mount("#app")
			},
			11103: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/bg-footer.e3ec4d4c.svg"
			},
			80244: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/candy.3fa15f7a.svg"
			},
			58705: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/tasties-staked.8b9f5387.svg"
			},
			68013: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/faq-header.d0ccf0f4.svg"
			},
			87426: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/logo.9b9bbe60.svg"
			},
			82217: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/discord.c514e819.svg"
			},
			31812: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/instagram.c5c7c9e8.svg"
			},
			79378: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/twitter.b3eb7a66.svg"
			},
			66639: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/home.666ede2e.svg"
			},
			15342: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/nav-logo.f1d26d4a.svg"
			},
			8102: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/earn-box.7eb15071.svg"
			},
			63101: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/spend-box.abe74e09.svg"
			},
			40225: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/stake-box.6677159e.svg"
			},
			59827: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/staking-header-img.dff4ef7c.svg"
			},
			68826: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/staking-header-mobile.e73bf086.svg"
			},
			22526: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/bg-mobile.29966830.png"
			},
			45582: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/bg-pc.2d2566a0.png"
			},
			65961: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/bg-small-pc.08fc1331.png"
			},
			83743: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/bg-wide.9623efa4.png"
			},
			95930: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/dashboard-bg.601085e8.png"
			},
			74091: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/leaderboard-bg.babdc70c.png"
			},
			83344: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/rarities-img-mobile.678f230a.png"
			},
			73486: function(e, a, c) {
				"use strict";
				e.exports = c.p + "img/rarities-img.583236fb.png"
			},
			88677: function() {},
			62808: function() {},
			80950: function() {},
			46601: function() {},
			89214: function() {},
			8623: function() {},
			7748: function() {},
			85568: function() {},
			56619: function() {},
			77108: function() {},
			52361: function() {},
			94616: function() {},
			43503: function() {},
			55896: function() {},
			87500: function() {}
		},
		a = {};

	function c(d) {
		var f = a[d];
		if (void 0 !== f) return f.exports;
		var b = a[d] = {
			id: d,
			loaded: !1,
			exports: {}
		};
		return e[d].call(b.exports, b, b.exports, c), b.loaded = !0, b.exports
	}
	c.m = e,
		function() {
			c.amdO = {}
		}(),
		function() {
			var e = [];
			c.O = function(a, d, f, b) {
				if (!d) {
					var A = 1 / 0;
					for (B = 0; B < e.length; B++) {
						d = e[B][0], f = e[B][1], b = e[B][2];
						for (var E = !0, C = 0; C < d.length; C++)(!1 & b || A >= b) && Object.keys(c.O).every((function(e) {
							return c.O[e](d[C])
						})) ? d.splice(C--, 1) : (E = !1, b < A && (A = b));
						if (E) {
							e.splice(B--, 1);
							var D = f();
							void 0 !== D && (a = D)
						}
					}
					return a
				}
				b = b || 0;
				for (var B = e.length; B > 0 && e[B - 1][2] > b; B--) e[B] = e[B - 1];
				e[B] = [d, f, b]
			}
		}(),
		function() {
			c.n = function(e) {
				var a = e && e.__esModule ? function() {
					return e["default"]
				} : function() {
					return e
				};
				return c.d(a, {
					a: a
				}), a
			}
		}(),
		function() {
			c.d = function(e, a) {
				for (var d in a) c.o(a, d) && !c.o(e, d) && Object.defineProperty(e, d, {
					enumerable: !0,
					get: a[d]
				})
			}
		}(),
		function() {
			c.g = function() {
				if ("object" === typeof globalThis) return globalThis;
				try {
					return this || new Function("return this")()
				} catch (e) {
					if ("object" === typeof window) return window
				}
			}()
		}(),
		function() {
			c.o = function(e, a) {
				return Object.prototype.hasOwnProperty.call(e, a)
			}
		}(),
		function() {
			c.r = function(e) {
				"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}
		}(),
		function() {
			c.nmd = function(e) {
				return e.paths = [], e.children || (e.children = []), e
			}
		}(),
		function() {
			c.p = "/"
		}(),
		function() {
			var e = {
				143: 0
			};
			c.O.j = function(a) {
				return 0 === e[a]
			};
			var a = function(a, d) {
					var f, b, A = d[0],
						E = d[1],
						C = d[2],
						D = 0;
					if (A.some((function(a) {
							return 0 !== e[a]
						}))) {
						for (f in E) c.o(E, f) && (c.m[f] = E[f]);
						if (C) var B = C(c)
					}
					for (a && a(d); D < A.length; D++) b = A[D], c.o(e, b) && e[b] && e[b][0](), e[b] = 0;
					return c.O(B)
				},
				d = self["webpackChunktasties_vue"] = self["webpackChunktasties_vue"] || [];
			d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
		}();
	var d = c.O(void 0, [998], (function() {
		return c(20038)
	}));
	d = c.O(d)
})();
//# sourceMappingURL=app.cc2dad21.js.map

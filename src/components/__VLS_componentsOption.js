/* __placeholder__ */
const __VLS_componentsOption = {};
const __VLS_name = undefined;
function __VLS_template() {
	let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent,new () => {}>> & {};
	/* Components */
	let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
	let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name,typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
	let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own,keyof typeof __VLS_otherComponents>;
	let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
	/* Style Scoped */
	type __VLS_StyleScopedClasses = {};
	let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
	/* CSS variable injection */
	/* CSS variable injection end */
	let __VLS_resolvedLocalAndGlobalComponents!: {};
	__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
	{
		const __VLS_0 = __VLS_intrinsicElements["div"];
		const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
		const __VLS_2 = __VLS_1({ ...{},class: ("Copyright"),},...__VLS_functionalComponentArgsRest(__VLS_1));
		({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0,typeof __VLS_2> & Record<string,unknown>) => void)({ ...{},class: ("Copyright"),});
		const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0,__VLS_2)!;
		let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
	}
	if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
		__VLS_styleScopedClasses["Copyright"];
	}
	var __VLS_slots!: {};
	return __VLS_slots;
}
let __VLS_internalComponent!: typeof import('./Copyright.vue')['default'];

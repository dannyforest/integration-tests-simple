import { mount } from '@vue/test-utils';
import { describe, it, expect} from "vitest";
import ParentComponent from "@/components/ParentComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";

describe("ParentComponent", () => {
    it('listens for title-clicked event from PostTitle', async () => {
        const wrapper = mount(ParentComponent);
        const childComponent = wrapper.findComponent(ChildComponent);

        await childComponent.find('button').trigger('click');

        expect(childComponent.emitted('child-event')).toBeTruthy();
    })
});
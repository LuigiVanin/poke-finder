import { onMounted, ref } from "vue";

export const useAsync = <T = any>(
    handler: (...args: any[]) => Promise<T>,
    asap: boolean = true
) => {
    const loading = ref(false);
    const data = ref<any>(null);
    const error = ref<any>(null);

    const action = async (...args: any[]) => {
        loading.value = true;
        error.value = null;
        try {
            const result = await handler(...args);
            data.value = result;
            console.log(data.value);
        } catch (err) {
            console.log(err);
            error.value = err;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    onMounted(async () => {
        if (asap) {
            await action();
        }
    });

    return {
        data,
        loading,
        error,
        action,
    };
};

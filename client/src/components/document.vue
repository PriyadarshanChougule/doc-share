<template>
    <div class="editor-container">
        <!-- Toolbar -->
        <div ref="toolbarRef" class="toolbar">
            <span class="ql-formats">
                <select class="ql-header">
                    <option selected>Normal</option>
                    <option value="1">H1</option>
                    <option value="2">H2</option>
                    <option value="3">H3</option>
                </select>
                <select class="ql-font"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
            </span>
            <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
            </span>
        </div>

        <!-- Editor -->
        <div class="editor-wrapper">
            <div ref="editorRef" class="a4-page"></div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
    setup() {
        const toolbarRef = ref(null);
        const editorRef = ref(null);
        const quill = ref(null);

        onMounted(() => {
            if (editorRef.value && toolbarRef.value) {
                // Initialize Quill
                quill.value = new Quill(editorRef.value, {
                    theme: "snow",
                    modules: {
                        toolbar: toolbarRef.value, // Use custom toolbar
                    },
                });

                // Optional: Add a placeholder or set initial content
                quill.value.root.dataset.placeholder = "Start typing here...";
                quill.value.on("text-change", (delta, oldDelta, source) => {
                    // 'delta' contains the change details
                    console.log("Text Change Detected:", delta);
                    console.log("Source:", source); // e.g., "user" if triggered by typing
                });
            }

        });

        return { toolbarRef, editorRef };
    },
};
</script>

<style scoped>
/* Full Editor Container */
.editor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
}

/* Toolbar Styling */
.toolbar {
    width: 100%;
    max-width: 800px;
    background: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 64px;
    z-index: 100;
}

/* Wrapper for Centered A4 Page */
.editor-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
}

/* A4 Page Styling */
.a4-page {
    width: 210mm;
    /* A4 width */
    height: 297mm;
    /* A4 height */
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-top: 20px;
}
</style>

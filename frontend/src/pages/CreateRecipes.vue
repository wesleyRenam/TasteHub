<template class="bg-gray-100">
    <div class="container mx-auto mt-8">
        <div class="bg-white p-8 rounded shadow">
            <h1 class="text-2xl font-semibold mb-4">Formulário de Criação de Receitas</h1>

            <form>
                <div class="mb-4">
                    <label for="title" class="block font-semibold">Título</label>
                    <input type="text" id="title" class="w-full p-2 border rounded" v-model="recipe.title">
                </div>

                <div class="mb-4">
                    <label for="description" class="block font-semibold">Descrição</label>
                    <textarea id="description" class="w-full p-2 border rounded" v-model="recipe.description"></textarea>
                </div>

                <div class="mb-4">
                    <label for="ingredients" class="block font-semibold">Ingredientes</label>
                    <input type="text" id="ingredients" class="w-full p-2 border rounded" v-model="ingredientsInput" @keydown.enter.prevent="addIngredient">
                    <ul class="mt-2">
                        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }} <button class="text-red-600" @click="removeIngredient(index)">Remover</button></li>
                    </ul>
                </div>

                <div class="mb-4">
                    <label for="instructions" class="block font-semibold">Instruções</label>
                    <textarea id="instructions" class="w-full p-2 border rounded" v-model="recipe.instructions"></textarea>
                </div>

                <div class="mb-4">
                    <label for="tags" class="block font-semibold">Tags</label>
                    <input type="text" id="tags" class="w-full p-2 border rounded" v-model="tagsInput" @keydown.enter.prevent="addTag">
                    <div class="mt-2">
                        <span class="bg-blue-200 px-2 py-1 rounded mr-2" v-for="(tag, index) in recipe.tags" :key="index">{{ tag }} <button class="text-red-600" @click="removeTag(index)">Remover</button></span>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="image" class="block font-semibold">URL da Imagem</label>
                    <input type="text" id="image" class="w-full p-2 border rounded" v-model="recipe.image">
                </div>

                <div class="text-center">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click.prevent="submitRecipe">Criar Receita</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                recipe: {
                    title: '',
                    description: '',
                    ingredients: [],
                    instructions: '',
                    tags: [],
                    image: ''
                },
                ingredientsInput: '',
                tagsInput: ''
            },
            methods: {
                addIngredient() {
                    if (this.ingredientsInput.trim() !== '') {
                        this.recipe.ingredients.push(this.ingredientsInput.trim());
                        this.ingredientsInput = '';
                    }
                },
                removeIngredient(index) {
                    this.recipe.ingredients.splice(index, 1);
                },
                addTag() {
                    if (this.tagsInput.trim() !== '') {
                        this.recipe.tags.push(this.tagsInput.trim());
                        this.tagsInput = '';
                    }
                },
                removeTag(index) {
                    this.recipe.tags.splice(index, 1);
                },
                submitRecipe() {
                    // Aqui você pode enviar os dados da receita para onde desejar
                    console.log(this.recipe);
                }
            }
        });
    </script>
</body>
</html>

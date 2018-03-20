export default {
    data: () => ({
        currentItem: 'tab-Active',
        //tabsItems[0] are active categories, tabsItems[1] are disabled
        tabsItems: [
            {
                title: 'Active',
                categories: [
                    {
                        categoryID: 1,
                        categoryName: 'Channel-Marketing',
                        isActive: true,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 2,
                        categoryName: 'Non-Channel Marketing HyperX',
                        isActive: true,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2C',
                        isActive: true,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2B',
                        isActive: true,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    }
                ]
            },
            {
                title: 'Disabled',
                categories: [
                    {
                        categoryID: 1,
                        categoryName: 'Channel-Marketing 1',
                        isActive: false,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 2,
                        categoryName: 'Non-Channel Marketing HyperX 1',
                        isActive: false,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2C 1',
                        isActive: false,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2B 1',
                        isActive: false,
                        isLoading: false,
                        isValid: true,
                        errMsg: ''
                    }
                ]
            }
        ],
        newCategoryModal: {
            isOpen: false,
            isFormValid: true,
            isLoading: false,
            categoryName: '',
            categoryNameRules: [
                v => !!v || 'Category is required',
            ]
        }
    }),
    methods: {
        //New Category Modal
        openNewCategoryModal: function () {
            this.newCategoryModal.isOpen = true;
        },
        closeNewCategoryModal: function () {
            this.newCategoryModal.isLoading = false;
            this.newCategoryModal.isFormValid = true;
            this.newCategoryModal.categoryName = '';
            //Clear states
            this.$refs.form.reset();
            this.newCategoryModal.isOpen = false;
        },
        addNewCategory: function (event) {
            //Validation
            if (this.$refs.form.validate()) {

                //Show loading animation
                this.newCategoryModal.isLoading = true;

                //Send to backend
                //axios.post('/api/submit', {
                //})

                setTimeout(() => {
                    //Add newly added category to active categories array
                    this.tabsItems[0].categories.push({
                        categoryID: 4,
                        categoryName: this.newCategoryModal.categoryName,
                        isActive: true
                    });
                    //Close modal
                    this.closeNewCategoryModal();
                }, 2000);
            }
        },
        //Categories Lines
        saveCategory: function (category, index, previousState) {
            //Validation

            category.isLoading = true;
            //Send to backend
            setTimeout(() => {
                //axios.post('/api/submit', {
                //})
                //Show loading animation
                category.isLoading = false;
                if (previousState == 'Active') {
                    //Active -> Disabled : Remove and Add to Disabled
                    if (category.isActive == false) {
                        this.tabsItems[0].categories.splice(index, 1);
                        this.tabsItems[1].categories.push(category);
                    }
                }
                else {
                    //Disabled -> Active : Remove and Add to Active
                    if (category.isActive == true) {
                        this.tabsItems[1].categories.splice(index, 1);
                        this.tabsItems[0].categories.push(category);
                    }
                }
            }, 2000);
        }


    }
}
}

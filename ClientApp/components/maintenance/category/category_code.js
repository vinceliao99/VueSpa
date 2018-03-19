export default {
    data: () => ({
        currentItem: 'tab-Active',
        tabsItems: [
            {
                title: 'Active',
                categories: [
                    {
                        categoryID: 1,
                        categoryName: 'Channel-Marketing',
                        isActive: true,
                    },
                    {
                        categoryID: 2,
                        categoryName: 'Non-Channel Marketing HyperX',
                        isActive: true,
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2C',
                        isActive: true,
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2B',
                        isActive: true,
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
                    },
                    {
                        categoryID: 2,
                        categoryName: 'Non-Channel Marketing HyperX 1',
                        isActive: false,
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2C 1',
                        isActive: false,
                    },
                    {
                        categoryID: 3,
                        categoryName: 'Non-Channel Marketing B2B 1',
                        isActive: false,
                    }
                ]
            }
        ],
        dialog: false

    })
}

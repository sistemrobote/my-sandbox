
export const WithLoadingWrapper = (Component) => {
    return ({ isLoading, ...rest }) => {

        if (isLoading) return (<h2>Loading....</h2>)
        else return <Component {...rest} />

    }
}

const MyComponent = ({ data }) => <h1>{data}</h1>;

export const MyComponentWithLoading = WithLoadingWrapper(MyComponent)


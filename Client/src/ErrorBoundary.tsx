import React from "react";

type ErrorBoundaryProps = {
    children:React.ReactNode,
    fallback:React.ReactNode
}
type ErrorBoundaryState = {
    hasError:Boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    state={hasError:false}

    
    static getDerivedStateFromError(error:any){
        return {hasError:true}
    }
    
    componentDidCatch(error: any, errorInfo: any) {
        // You can log the error here or send it to an error tracking service
        this.setState({hasError:true})
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
      }

    render(): React.ReactNode {
         if(this.state.hasError){
            return this.props.fallback
         }
      
         return this.props.children
        
        
    }

}
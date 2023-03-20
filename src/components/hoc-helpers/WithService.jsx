import { BookContext } from "../../helpers";

const { Consumer } = BookContext;

const WithService = (WrappedComponent) => (props) => {
  return (
    <Consumer>
      {(service) => <WrappedComponent service={service} {...props} />}
    </Consumer>
  );
};

export default WithService;

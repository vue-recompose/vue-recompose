const mapProps = mapper => {
  return component => {
    return {
      props: component.props,
      render: function(createElement) {
        const props = mapper(
          (component.props || [])
            .reduce(
              (acc, prop) => Object.assign(acc, { [prop]: this[prop] }),
              {}
            )
        );

        return createElement(
          { ...component, props: Object.keys(props) },
          { props }
        );
      }
    };
  };
};

export default mapProps;

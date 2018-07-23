import * as React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { InputType } from "reactstrap/lib/Input";

interface IOptionalTextboxProps {
  disabled?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  required?: boolean;
  requiredMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  setValidFunction?: any;
  type?: InputType;
  valid?: boolean;
  validates?: boolean;
}

interface ITextboxProps extends IOptionalTextboxProps {
  id: string;
  label: string;
  onChange: any;
  value: string;
}

class Textbox extends React.Component<ITextboxProps, { invalid: boolean }> {
  public static defaultProps: IOptionalTextboxProps = {
    disabled: false,
    invalid: false,
    invalidMessage: "",
    required: false,
    type: "text",
    valid: false,
    validates: false
  };

  public constructor(props: any) {
    super(props);
    this.state = {
      invalid: false
    };
  }

  public validate = () => {
    let valid = true;
    if (this.props.required && this.props.value === "") {
      valid = false;
    }

    if (valid === this.state.invalid) {
      this.setState({ invalid: !valid });
    }

    if (this.props.setValidFunction) {
      this.props.setValidFunction(valid);
    }
  };

  public componentDidUpdate() {
    this.validate();
  }

  public onChanged = (e: any) => {
    this.props.onChange(e);
    this.validate();
  };

  public render() {
    return (
      <FormGroup>
        <Label for={this.props.id}>
          {this.props.label} {this.props.required && " *"}
        </Label>
        <Input
          id={this.props.id}
          type={this.props.type}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={this.onChanged}
          valid={this.props.valid}
          invalid={
            (this.props.invalid || this.state.invalid) && this.props.validates
          }
        />
        {// this.props.validates && (
        // this.props.required &&
        // this.props.value === "" &&
        (this.props.invalid || this.state.invalid) &&
          this.props.validates && (
            <FormFeedback>
              {this.props.requiredMessage || this.props.label + " is required"}
            </FormFeedback>
          )
        // )
        }
        <FormFeedback>{this.props.invalidMessage}</FormFeedback>
      </FormGroup>
    );
  }
}

Textbox.defaultProps = {};

export default Textbox;

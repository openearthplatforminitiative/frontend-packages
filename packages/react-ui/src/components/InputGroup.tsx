import { ark } from "@ark-ui/react"
import { Box, styled } from "../../styled-system/jsx"
import { inputGroup } from "../../styled-system/recipes"
import { forwardRef, useRef, cloneElement, ReactElement } from "react"
import css from "styled-jsx/css"

export type InputGroupProps = {
	leftComponent?: React.ReactNode
	rightComponent?: React.ReactNode
	children: ReactElement
}

const BaseInputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
	(props, ref) => {
		const { leftComponent, rightComponent, children, ...rest } = props

		const childrenRef = useRef<HTMLElement | null>(null)

		const handleClick = () => {
			if (childrenRef.current) {
				if (typeof childrenRef.current.click === "function") {
					childrenRef.current.click()
				}
				if (typeof (childrenRef.current as any).focus === "function") {
					;(childrenRef.current as any).focus()
				}
			}
		}

		const clonedChildren = cloneElement(children, {
			ref: (node: HTMLElement) => {
				childrenRef.current = node
				if (typeof children.ref === "function") children.ref(node)
				else if (children.ref)
					(children.ref as React.MutableRefObject<HTMLElement | null>).current =
						node
			},
		})

		return (
			<ark.div
				ref={ref}
				{...rest}
				onClick={handleClick} // Delegate the click event
			>
				{leftComponent && <ark.div>{leftComponent}</ark.div>}
				{clonedChildren} {/* Inject the ref directly into children */}
				{rightComponent && <ark.div>{rightComponent}</ark.div>}
			</ark.div>
		)
	}
)

export const InputGroup = styled(BaseInputGroup, inputGroup)

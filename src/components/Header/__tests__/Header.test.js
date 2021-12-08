import { render, screen } from '@testing-library/react'
import externalLink from '../../../utils/externalLink'
import Header from '../index'

describe("Header", () => {
    test('header should be rendered', () => {
        render(<Header />)

        const bannerElement = screen.getByRole("banner")
        
        expect(bannerElement).toBeInTheDocument()
    })
    test('header should always be visible', () => {
        render(<Header />)

        const bannerElement = screen.getByRole("banner")
        
        expect(bannerElement).toBeVisible()
    })
    test('external link should be rendered', () => {
        render(<Header />)

        const linkElement = screen.getByRole("link")
        
        expect(linkElement).toHaveAttribute("href", externalLink)
    })
    test('app logo should be rendered', () => {
        render(<Header />)

        const imageElement = screen.getByRole("img")
        
        expect(imageElement).toBeInTheDocument()
    })
})
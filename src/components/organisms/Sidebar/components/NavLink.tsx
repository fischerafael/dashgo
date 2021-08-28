import NextLink from 'next/link'
import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
    icon: ElementType
    label: string
}

export const NavLink = ({ icon, label, ...props }: NavLinkProps) => {
    return (
        <Link display="flex" w="full" color="gray.400" {...props}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
                {label}
            </Text>
        </Link>
    )
}

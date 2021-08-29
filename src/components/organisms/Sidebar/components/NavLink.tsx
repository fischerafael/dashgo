import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Icon, Link, Text, LinkProps, HStack } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
    icon: ElementType
    label: string
    href: string
}

export const NavLink = ({ icon, href, label, ...props }: NavLinkProps) => {
    const { asPath } = useRouter()

    const isActive = asPath === href

    return (
        <Link as={NextLink} href={href} {...props}>
            <HStack
                w="full"
                color={isActive ? 'blue.500' : 'gray.400'}
                spacing="4"
                cursor="pointer"
                _hover={{ color: 'gray.600' }}
            >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {label}
                </Text>
            </HStack>
        </Link>
    )
}

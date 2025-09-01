import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';

import { useSettingsContext } from '@minimals/components/settings';

// ----------------------------------------------------------------------

export default function OneView() {
    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ paddingBottom: 4 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: 8,
                    background: `linear-gradient(135deg, ${alpha('#1976d2', 0.1)} 0%, ${alpha(
                        '#9c27b0',
                        0.1
                    )} 100%)`,
                    borderRadius: 4,
                    mb: 6,
                }}
            >
                <Typography variant='h2' component='h1' gutterBottom sx={{ fontWeight: 700 }}>
                    Minimals POC
                </Typography>
                <Typography variant='h5' color='text.secondary' paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
                    Uma demonstração completa do sistema Minimals.cc integrado com Material-UI para
                    desenvolvimento rápido de aplicações React modernas.
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent='center'
                    sx={{ mt: 4 }}
                >
                    <Button variant='contained' size='large' sx={{ px: 4, py: 1.5 }}>
                        Começar Agora
                    </Button>
                    <Button variant='outlined' size='large' sx={{ px: 4, py: 1.5 }}>
                        Ver Documentação
                    </Button>
                </Stack>
            </Box>

            {/* Features Section */}
            <Typography variant='h3' component='h2' textAlign='center' gutterBottom sx={{ mb: 6 }}>
                Recursos Principais
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                        <Avatar
                            sx={{
                                width: 64,
                                height: 64,
                                bgcolor: 'primary.main',
                                mx: 'auto',
                                mb: 2,
                                fontSize: '2rem',
                            }}
                        >
                            🚀
                        </Avatar>
                        <Typography variant='h5' gutterBottom>
                            Performance
                        </Typography>
                        <Typography color='text.secondary'>
                            Otimizado para máxima performance com React 19 e Vite, garantindo carregamento
                            rápido e experiência fluida.
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                        <Avatar
                            sx={{
                                width: 64,
                                height: 64,
                                bgcolor: 'secondary.main',
                                mx: 'auto',
                                mb: 2,
                                fontSize: '2rem',
                            }}
                        >
                            🎨
                        </Avatar>
                        <Typography variant='h5' gutterBottom>
                            Design System
                        </Typography>
                        <Typography color='text.secondary'>
                            Sistema completo de design baseado no Material-UI com componentes personalizados e
                            temas flexíveis.
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                        <Avatar
                            sx={{
                                width: 64,
                                height: 64,
                                bgcolor: 'success.main',
                                mx: 'auto',
                                mb: 2,
                                fontSize: '2rem',
                            }}
                        >
                            🔧
                        </Avatar>
                        <Typography variant='h5' gutterBottom>
                            TypeScript
                        </Typography>
                        <Typography color='text.secondary'>
                            Totalmente tipado com TypeScript para maior segurança, produtividade e
                            manutenibilidade do código.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            {/* Stats Section */}
            <Paper sx={{ p: 6, mb: 8, textAlign: 'center' }}>
                <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
                    Números que Impressionam
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h3' color='primary' sx={{ fontWeight: 700 }}>
                            125+
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            Componentes
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h3' color='secondary' sx={{ fontWeight: 700 }}>
                            99%
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            Performance
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h3' color='success.main' sx={{ fontWeight: 700 }}>
                            24/7
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            Suporte
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h3' color='warning.main' sx={{ fontWeight: 700 }}>
                            50K+
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            Desenvolvedores
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* Pricing Section */}
            <Typography variant='h3' component='h2' textAlign='center' gutterBottom sx={{ mb: 6 }}>
                Planos e Preços
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', position: 'relative' }}>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                            <Typography variant='h5' gutterBottom>
                                Starter
                            </Typography>
                            <Typography variant='h3' color='primary' sx={{ my: 2 }}>
                                Grátis
                            </Typography>
                            <Typography color='text.secondary' paragraph>
                                Perfeito para projetos pessoais e aprendizado
                            </Typography>
                            <Box sx={{ textAlign: 'left', mb: 3 }}>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Até 3 projetos
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Componentes básicos
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Suporte da comunidade
                                </Typography>
                            </Box>
                            <Button variant='outlined' fullWidth size='large'>
                                Começar Grátis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card
                        sx={{ height: '100%', position: 'relative', border: 2, borderColor: 'primary.main' }}
                    >
                        <Chip
                            label='Mais Popular'
                            color='primary'
                            sx={{
                                position: 'absolute',
                                top: -12,
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        />
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                            <Typography variant='h5' gutterBottom>
                                Professional
                            </Typography>
                            <Typography variant='h3' color='primary' sx={{ my: 2 }}>
                                $29
                                <Typography variant='body1' component='span'>
                                    /mês
                                </Typography>
                            </Typography>
                            <Typography color='text.secondary' paragraph>
                                Ideal para equipes e projetos comerciais
                            </Typography>
                            <Box sx={{ textAlign: 'left', mb: 3 }}>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Projetos ilimitados
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Todos os componentes
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Suporte prioritário
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Templates premium
                                </Typography>
                            </Box>
                            <Button variant='contained' fullWidth size='large'>
                                Escolher Plano
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', position: 'relative' }}>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                            <Typography variant='h5' gutterBottom>
                                Enterprise
                            </Typography>
                            <Typography variant='h3' color='primary' sx={{ my: 2 }}>
                                $99
                                <Typography variant='body1' component='span'>
                                    /mês
                                </Typography>
                            </Typography>
                            <Typography color='text.secondary' paragraph>
                                Para grandes organizações e soluções customizadas
                            </Typography>
                            <Box sx={{ textAlign: 'left', mb: 3 }}>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Tudo do Professional
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Consultoria dedicada
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    SLA garantido
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                                >
                                    <Chip
                                        size='small'
                                        color='success'
                                        label='✓'
                                        sx={{ mr: 1, minWidth: 'auto' }}
                                    />
                                    Customizações
                                </Typography>
                            </Box>
                            <Button variant='outlined' fullWidth size='large'>
                                Falar com Vendas
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Testimonials Section */}
            <Typography variant='h3' component='h2' textAlign='center' gutterBottom sx={{ mb: 6 }}>
                O que nossos clientes dizem
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <CardContent>
                            <Rating value={5} readOnly sx={{ mb: 2 }} />
                            <Typography variant='body1' paragraph>
                                "O Minimals revolucionou nosso processo de desenvolvimento. Conseguimos criar
                                interfaces incríveis em tempo recorde!"
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>JS</Avatar>
                                <Box>
                                    <Typography variant='subtitle2'>João Silva</Typography>
                                    <Typography variant='caption' color='text.secondary'>
                                        CTO, TechCorp
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <CardContent>
                            <Rating value={5} readOnly sx={{ mb: 2 }} />
                            <Typography variant='body1' paragraph>
                                "A qualidade dos componentes é excepcional. Nossa equipe está muito mais
                                produtiva desde que adotamos o Minimals."
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'secondary.main' }}>MS</Avatar>
                                <Box>
                                    <Typography variant='subtitle2'>Maria Santos</Typography>
                                    <Typography variant='caption' color='text.secondary'>
                                        Lead Developer, StartupXYZ
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <CardContent>
                            <Rating value={5} readOnly sx={{ mb: 2 }} />
                            <Typography variant='body1' paragraph>
                                "Suporte excepcional e documentação clara. Recomendo para qualquer equipe que
                                busca agilidade no desenvolvimento."
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'success.main' }}>PC</Avatar>
                                <Box>
                                    <Typography variant='subtitle2'>Pedro Costa</Typography>
                                    <Typography variant='caption' color='text.secondary'>
                                        Frontend Engineer, BigTech
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* FAQ Section */}
            <Typography variant='h3' component='h2' textAlign='center' gutterBottom sx={{ mb: 4 }}>
                Perguntas Frequentes
            </Typography>

            <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}>
                <Accordion>
                    <AccordionSummary expandIcon={<Typography>▼</Typography>}>
                        <Typography variant='h6'>O que está incluído no Minimals?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            O Minimals inclui mais de 125 componentes React, sistema de temas flexível,
                            templates prontos, documentação completa e suporte da comunidade.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<Typography>▼</Typography>}>
                        <Typography variant='h6'>Posso usar em projetos comerciais?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sim! Com o plano Professional ou Enterprise, você pode usar o Minimals em quantos
                            projetos comerciais desejar, sem limitações.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<Typography>▼</Typography>}>
                        <Typography variant='h6'>Como funciona o suporte técnico?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Oferecemos suporte via Discord para o plano gratuito, suporte prioritário por
                            email para o Professional, e suporte dedicado 24/7 para Enterprise.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<Typography>▼</Typography>}>
                        <Typography variant='h6'>Posso cancelar a qualquer momento?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Claro! Não há contratos de longo prazo. Você pode cancelar sua assinatura a
                            qualquer momento e continuar usando até o final do período pago.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            {/* CTA Section */}
            <Paper
                sx={{
                    p: 6,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${alpha('#1976d2', 0.1)} 0%, ${alpha(
                        '#9c27b0',
                        0.1
                    )} 100%)`,
                    borderRadius: 4,
                }}
            >
                <Typography variant='h3' component='h2' gutterBottom>
                    Pronto para começar?
                </Typography>
                <Typography variant='h6' color='text.secondary' paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
                    Junte-se a milhares de desenvolvedores que já estão criando aplicações incríveis com o
                    Minimals.
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent='center'
                    sx={{ mt: 4 }}
                >
                    <Button variant='contained' size='large' sx={{ px: 4, py: 1.5 }}>
                        Iniciar Teste Gratuito
                    </Button>
                    <Button variant='outlined' size='large' sx={{ px: 4, py: 1.5 }}>
                        Agendar Demo
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}

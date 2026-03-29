'use strict';

module.exports = {
  register(/*{ strapi }*/) {},
  async bootstrap({ strapi }) {
    const existingHero = await strapi.entityService.findMany('api::hero.hero');
    if (existingHero.length === 0) {
      await strapi.entityService.create('api::hero.hero', {
        data: {
          eyebrow: 'Chennai, India — Professional Media Production',
          headline: 'WE MAKE',
          headlineHighlight: 'WORLDS.',
          tagline: 'SLIM Studios is a professional Media Production Company offering world-class post production services for the entertainment industry in India. We transform imagination into reality.',
          backgroundImage: '/mnt/user-data/uploads/1773679734791_image.png',
          stat1Number: '150+',
          stat1Label: 'Productions',
          stat2Number: '42',
          stat2Label: 'Awards',
          stat3Number: '23+',
          stat3Label: 'Clients'
        }
      });
    }

    const existingAbout = await strapi.entityService.findMany('api::about.about');
    if (existingAbout.length === 0) {
      await strapi.entityService.create('api::about.about', {
        data: {
          body1: 'Slim Studios is a professional Media Production Company which offers world-class post production services for the entertainment industry in India. We bring peerless experience of bringing to life for your audio, visual, motion and still content.',
          body2: 'We have the expertise of providing complete range of pre-production, production and post-production services and Digital Marketing Promotions to our clients. With a back up of an experienced creative team we are capable of delivering turn key projects that include everything from idea generation, scripting, artiste management, language dubbing, voice over, music, editing and post production. We have served some nationally acclaimed clients.',
          visionText: 'To be the most trusted media production partner in India — delivering world-class content that captivates, inspires and endures.',
          missionText: 'Complete pre-production, production and post-production services with a passionate creative team delivering turnkey projects.',
          profileName: 'VIKRAM',
          profileRole: 'Founder · Director of Photography',
          profileImage: '/mnt/user-data/uploads/1773679734791_image.png',
          stat1Number: '150+',
          stat1Label: 'Productions',
          stat2Number: '23+',
          stat2Label: 'Clients',
          stat3Number: '15+',
          stat3Label: 'Years Active',
          stat4Number: '9',
          stat4Label: 'Core Services'
        }
      });
    }

    const existingServices = await strapi.entityService.findMany('api::service.service');
    if (existingServices.length === 0) {
      const services = [
        { title: 'Film Making & Cinematography', icon: '🎥', shortNumber: '01', description: 'Full-scale cinematic productions with world-class direction and cinematography from concept to final cut.', link: 'https://vikramdop.com/film-making-and-cinematography.php', sortOrder: 1 },
        { title: 'Video & Audio Editing', icon: '✂️', shortNumber: '02', description: 'World-class video and audio post-production including color grading, sound design and mastering.', link: 'https://vikramdop.com/world-class-video-and-audio-editing.php', sortOrder: 2 },
        { title: 'VFX & 2D/3D Animation', icon: '✨', shortNumber: '03', description: 'Cutting-edge visual effects, motion graphics, compositing and 2D/3D animation for every production scale.', link: 'https://vikramdop.com/vfx-visual-effects-and-2D-3D-animation.php', isFeatured: true, hasAiBadge: true, aiBadgeText: 'Advanced · FX', sortOrder: 3 },
        { title: 'Aerial Videography', icon: '🚁', shortNumber: '04', description: 'Stunning aerial videography and photography using professional drone systems for epic, cinematic perspectives.', link: 'https://vikramdop.com/aerial-videography-and-photography.php', sortOrder: 4 },
        { title: 'Photography Services', icon: '📷', shortNumber: '05', description: 'Professional photography for commercial, editorial, portrait and event — every frame crafted with intention.', link: 'https://vikramdop.com/photography-services.php', sortOrder: 5 },
        { title: 'Product Branding & Logo', icon: '🎨', shortNumber: '06', description: 'Distinctive brand identities, logo creation and visual communication that makes your brand unforgettable.', link: 'https://vikramdop.com/product-branding-and-logo-creation.php', sortOrder: 6 },
        { title: 'Event Management & Projection', icon: '🎪', shortNumber: '07', description: 'End-to-end event management with projection mapping, immersive installations and live production.', link: 'https://vikramdop.com/event-management-and-projection-mapping.php', sortOrder: 7 },
        { title: 'Music Video & Independent Films', icon: '🎵', shortNumber: '08', description: 'Visually arresting music video production and independent film creation with full creative freedom.', link: 'https://vikramdop.com/music-video-production-and-independent-films.php', sortOrder: 8 },
        { title: 'Digital Marketing & Promotions', icon: '📱', shortNumber: '09', description: 'AI-enhanced digital marketing and promotions to amplify your brand\'s reach across all digital platforms.', link: 'https://vikramdop.com/digital-marketing-promotions.php', isFeatured: true, hasAiBadge: true, aiBadgeText: 'New · AI Powered', sortOrder: 9 }
      ];
      for (const service of services) {
        await strapi.entityService.create('api::service.service', { data: service });
      }
    }

    const existingPortfolio = await strapi.entityService.findMany('api::portfolio.portfolio');
    if (existingPortfolio.length === 0) {
      const portfolios = [
        { title: 'SHADOWS OF NOON', category: 'Film', tag: 'Feature Film · 2024', imageUrl: '/mnt/user-data/uploads/1773679734791_image.png', featured: true, sortOrder: 1 },
        { title: 'LAST LIGHT', category: 'Commercial', tag: 'Documentary · 2023', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagiccinemacamera/landing/hero/hero-xl.jpg', sortOrder: 2 },
        { title: 'ECHO', category: 'AI / FX', tag: 'VFX Production · 2024', imageUrl: 'https://images.blackmagicdesign.com/images/products/davinciresolve/landing/hero/hero-xl.jpg', sortOrder: 3 },
        { title: 'VOID', category: 'Music Video', tag: 'Music Video · 2024', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagicpocketcinemacamera/landing/hero/hero-xl.jpg', sortOrder: 4 },
        { title: 'DEPTH', category: 'Film', tag: 'Aerial · Short Film · 2023', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagicursacinecamera/landing/hero/hero-xl.jpg', sortOrder: 5 }
      ];
      for (const portfolio of portfolios) {
        await strapi.entityService.create('api::portfolio.portfolio', { data: portfolio });
      }
    }

    const existingProcess = await strapi.entityService.findMany('api::process.process');
    if (existingProcess.length === 0) {
      const processes = [
        { stepNumber: '01', title: 'DEVELOP', description: 'Idea generation, concept refinement, AI-assisted scriptwriting and story architecture.', sortOrder: 1 },
        { stepNumber: '02', title: 'PRE-PRODUCE', description: 'Casting, scouting, storyboarding, artiste management and crew assembly.', sortOrder: 2 },
        { stepNumber: '03', title: 'PRODUCE', description: 'Principal photography on Blackmagic cinema cameras with expert direction and DOP.', sortOrder: 3 },
        { stepNumber: '04', title: 'DELIVER', description: 'DaVinci color grading, VFX, sound design, language dubbing and digital distribution.', sortOrder: 4 }
      ];
      for (const process of processes) {
        await strapi.entityService.create('api::process.process', { data: process });
      }
    }

    const existingGear = await strapi.entityService.findMany('api::gear.gear');
    if (existingGear.length === 0) {
      const gears = [
        { title: 'URSA CINE 12K LF', category: 'Cinema Camera', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagicursacinecamera/landing/hero/hero-xl.jpg', featured: true, gridSpan: 5, sortOrder: 1 },
        { title: 'POCKET CINEMA 6K', category: 'Handheld', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagicpocketcinemacamera/landing/hero/hero-xl.jpg', gridSpan: 4, sortOrder: 2 },
        { title: 'DAVINCI RESOLVE', category: 'Post Production', imageUrl: 'https://images.blackmagicdesign.com/images/products/davinciresolve/landing/hero/hero-xl.jpg', gridSpan: 3, sortOrder: 3 },
        { title: 'CINEMA CAMERA 6K', category: 'Full Frame', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagiccinemacamera/landing/hero/hero-xl.jpg', gridSpan: 4, sortOrder: 4 },
        { title: 'STUDIO CAMERA 4K', category: 'Live Production', imageUrl: 'https://images.blackmagicdesign.com/images/products/blackmagicstudiocamera/landing/hero/hero-xl.jpg', gridSpan: 3, sortOrder: 5 },
        { title: 'ATEM CONSTELLATION', category: 'Live Switching', imageUrl: 'https://images.blackmagicdesign.com/images/products/atemconstellation/landing/hero/hero-xl.jpg', featured: true, gridSpan: 5, sortOrder: 6 }
      ];
      for (const gear of gears) {
        await strapi.entityService.create('api::gear.gear', { data: gear });
      }
    }

    const existingTeam = await strapi.entityService.findMany('api::team-member.team-member');
    if (existingTeam.length === 0) {
      const team = [
        { name: 'VIKRAM', role: 'Founder & Director of Photography', imageUrl: '/mnt/user-data/uploads/1773679734791_image.png', sortOrder: 1 },
        { name: 'IRIS MALONE', role: 'Creative Director', initials: 'I', sortOrder: 2 },
        { name: 'MARCUS OSEI', role: 'VFX Supervisor', initials: 'M', sortOrder: 3 },
        { name: 'NAOMI CHEN', role: 'Executive Producer', initials: 'N', sortOrder: 4 }
      ];
      for (const member of team) {
        await strapi.entityService.create('api::team-member.team-member', { data: member });
      }
    }

    const existingAwards = await strapi.entityService.findMany('api::award.award');
    if (existingAwards.length === 0) {
      const awards = [
        { title: 'NATIONAL', icon: '🏆', subtitle: 'Acclaimed Clients', sortOrder: 1 },
        { title: 'INDIA', icon: '🎬', subtitle: 'Entertainment Industry', sortOrder: 2 },
        { title: 'VFX', icon: '✨', subtitle: 'Award Winning Effects', sortOrder: 3 },
        { title: 'AERIAL', icon: '🚁', subtitle: 'Certified Drone Ops', sortOrder: 4 },
        { title: 'AI', icon: '🤖', subtitle: 'Production Pioneer', sortOrder: 5 }
      ];
      for (const award of awards) {
        await strapi.entityService.create('api::award.award', { data: award });
      }
    }

    const existingContact = await strapi.entityService.findMany('api::contact.contact');
    if (existingContact.length === 0) {
      await strapi.entityService.create('api::contact.contact', {
        data: {
          address: '#5/6, 3rd Trust Cross St,\nMandavelipakkam,\nRaja AnnamalaiPuram,\nChennai - 600028',
          email: 'cc.vikramdop@gmail.com',
          phone: '+919884901234'
        }
      });
    }

    const existingSettings = await strapi.entityService.findMany('api::setting.setting');
    if (existingSettings.length === 0) {
      await strapi.entityService.create('api::setting.setting', {
        data: {
          siteName: 'SLIM Studios',
          tagline: 'Sound · Light · Image · Magic',
          logoUrl: 'https://vikramdop.com/images/logo.png',
          primaryColor: '#1a6bff',
          accentColor: '#00d4ff',
          backgroundColor: '#02040f',
          tickerItems: ['SLIM STUDIOS', 'FILM MAKING & CINEMATOGRAPHY', 'VFX & 2D/3D ANIMATION', 'AI PRODUCTION', 'AERIAL VIDEOGRAPHY', 'EVENT MANAGEMENT', 'DIGITAL MARKETING', 'PRODUCT BRANDING']
        }
      });
    }
  },
};
